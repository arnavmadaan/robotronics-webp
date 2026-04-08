const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

let products = [];
let prices = [];

fetch("./DATA/products.json")
  .then(res => res.json())
  .then(prodData => {
    products = prodData;
    return fetch("./DATA/prices.json");
  })
  .then(res => res.json())
  .then(priceData => {
    prices = priceData;
    loadProduct();
  });

function loadProduct() {
  const product = products.find(p => p.id === productId); //identify the chosen part
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-category").textContent = product.category;

  const relevantPrices = prices.filter(p => p.product_id === productId);

  const tableBody = document.querySelector("#price-table tbody");
  tableBody.innerHTML = "";

  let cheapestPrice = Infinity; //initially the cheapest price is the largest value
  let selectedSeller = null;

  relevantPrices.forEach(p => {
    const latest = p.prices[p.prices.length - 1].price; //loop through every price and find the minimum value
    if (latest < cheapestPrice) cheapestPrice = latest; //update the new cheapest price
  });

  relevantPrices.forEach(p => {
    const latest = p.prices[p.prices.length - 1].price;

    const row = document.createElement("tr");

    if (latest === cheapestPrice) row.classList.add("cheapest"); //highlight cheapest

    row.innerHTML = `
      <td><input type="radio" name="seller" value="${p.seller}" data-price="${latest}"></td> 
      <td>${p.seller}</td>
      <td>${latest}</td>
    `; //RADIO BUTTON- allows selecting cheapest seller

    tableBody.appendChild(row);
  });

  drawChart(relevantPrices);

  document.getElementById("add-to-cart").onclick = () => { //add selected to cart
    const selected = document.querySelector("input[name='seller']:checked");

    if (!selected) {
      alert("Please select a seller first!"); //if not selected alert
      return;
    }

    let cart = getCart(); 

    cart.push({ 
  productId: productId,
  seller: selected.value,
  price: parseInt(selected.dataset.price)
}); //adds to cart

saveCart(cart);
alert("Added to cart!");

  };
}


function drawChart(data) {
  const labels = data[0].prices.map(p => p.date);  //X axis shows dates

  const datasets = data.map(p => ({ //one line per seller
    label: p.seller,
    data: p.prices.map(x => x.price), 
    borderWidth: 2,
    tension: 0.3
  }));

  new Chart(document.getElementById("priceChart"), { //to render the graph using ChartJS
    type: "line",
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      plugins: {
        legend: { labels: { color: "#e5e7eb" } }
      },
      scales: {
        x: { ticks: { color: "#e5e7eb" } },
        y: { ticks: { color: "#e5e7eb" } }
      }
    }
  });
}

document.getElementById("add-to-cart").onclick = () => { //get the selected seller
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productId); //store the structured item
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
};
//append cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = document.getElementById("cart-count");
  if (count) count.textContent = cart.length;
}

updateCartCount();
