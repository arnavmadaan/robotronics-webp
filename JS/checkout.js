// ============================
// ROBOTRONICS — checkout.js
// Checkout page logic
// ============================

const checkoutItemsList = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");
const payBtn = document.getElementById("pay-btn");
const successOverlay = document.getElementById("success-overlay");

fetch("./DATA/products.json")
  .then(res => res.json())
  .then(products => {
    displayCheckout(products);
  });

function displayCheckout(products) {
  const cart = getCart();
  checkoutItemsList.innerHTML = "";

  if (cart.length === 0) {
    checkoutItemsList.innerHTML = '<li style="color: var(--text-secondary); text-align:center; border: none;">Your cart is empty.</li>';
    payBtn.disabled = true;
    payBtn.style.opacity = "0.5";
    payBtn.style.cursor = "not-allowed";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${product ? product.name : "Unknown"} — ${item.seller}</span>
      <span class="item-price">₹${item.price}</span>
    `;
    checkoutItemsList.appendChild(li);
    total += item.price;
  });

  checkoutTotal.innerHTML = `
    <span>Total</span>
    <span class="amount">₹${total}</span>
  `;
}

payBtn.addEventListener("click", () => {
  const cart = getCart();
  if (cart.length === 0) return;

  // Clear cart and show success
  saveCart([]);
  successOverlay.classList.add("visible");
  payBtn.disabled = true;
  payBtn.style.opacity = "0.5";
});
