// ============================
// ROBOTRONICS — calculator.js
// Build cost calculator
// ============================

let productsData = [];
let pricesData = [];
let selectedParts = new Set();

const partsList = document.getElementById("parts-list");
const summaryItems = document.getElementById("summary-items");
const summaryTotal = document.getElementById("summary-total");

async function loadData() {
  const [products, prices] = await Promise.all([
    fetch("../DATA/products.json").then(r => r.json()),
    fetch("../DATA/prices.json").then(r => r.json())
  ]);
  productsData = products;
  pricesData = prices;
  renderParts();
}

function getCheapestPrice(productId) {
  const productPrices = pricesData.filter(p => p.product_id === productId);
  if (productPrices.length === 0) return null;

  let cheapest = Infinity;
  let seller = "";
  productPrices.forEach(p => {
    const latest = p.prices[p.prices.length - 1].price;
    if (latest < cheapest) {
      cheapest = latest;
      seller = p.seller;
    }
  });
  return { price: cheapest, seller };
}

function renderParts() {
  partsList.innerHTML = "";

  // Group by subcategory
  const groups = {};
  productsData.forEach(p => {
    const group = p.subcategory || p.category;
    if (!groups[group]) groups[group] = [];
    groups[group].push(p);
  });

  for (const [groupName, parts] of Object.entries(groups)) {
    const header = document.createElement("div");
    header.className = "section-header";
    header.style.gridColumn = "1 / -1";
    header.textContent = groupName;
    partsList.appendChild(header);

    parts.forEach(product => {
      const priceInfo = getCheapestPrice(product.id);
      const card = document.createElement("div");
      card.className = "calc-part-card" + (selectedParts.has(product.id) ? " selected" : "");
      card.innerHTML = `
        <div class="part-check">${selectedParts.has(product.id) ? '✓' : ''}</div>
        <div style="flex:1; min-width:0;">
          <div style="font-weight:600; color: var(--text-primary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${product.name}</div>
          <div style="font-size:0.75rem; color: var(--text-muted);">${priceInfo ? '₹' + priceInfo.price + ' via ' + priceInfo.seller : 'Price N/A'}</div>
        </div>
      `;

      card.addEventListener("click", () => {
        if (selectedParts.has(product.id)) {
          selectedParts.delete(product.id);
        } else {
          selectedParts.add(product.id);
        }
        renderParts();
        updateSummary();
      });

      partsList.appendChild(card);
    });
  }
}

function updateSummary() {
  summaryItems.innerHTML = "";
  let total = 0;
  let partCount = 0;

  selectedParts.forEach(id => {
    const product = productsData.find(p => p.id === id);
    const priceInfo = getCheapestPrice(id);
    if (!product || !priceInfo) return;

    partCount++;
    total += priceInfo.price;

    const row = document.createElement("div");
    row.className = "calc-summary-row";
    row.innerHTML = `
      <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;">${product.name}</span>
      <span class="val">₹${priceInfo.price}</span>
    `;
    summaryItems.appendChild(row);
  });

  summaryTotal.innerHTML = `
    <span>Total (${partCount} parts)</span>
    <span>₹${total.toLocaleString()}</span>
  `;
}

document.getElementById("add-all-to-cart").addEventListener("click", () => {
  if (selectedParts.size === 0) {
    alert("Select at least one part!");
    return;
  }
  let cart = getCart();
  selectedParts.forEach(id => {
    const priceInfo = getCheapestPrice(id);
    if (priceInfo) {
      cart.push({ productId: id, seller: priceInfo.seller, price: priceInfo.price });
    }
  });
  saveCart(cart);
  alert(`Added ${selectedParts.size} parts to cart!`);
});

loadData();
