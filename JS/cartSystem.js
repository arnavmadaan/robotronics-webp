//this shows updated cart value across all pages within the webpage

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || []; //reads local storage and prevents crash if empty
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart)); //save value + refresh the counter
  updateCartCount();
}

function updateCartCount() {
  const countElement = document.getElementById("cart-count"); 
  if (!countElement) return;

  const cart = getCart();
  countElement.textContent = cart.length;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
