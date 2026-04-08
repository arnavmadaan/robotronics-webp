// ============================
// ROBOTRONICS — wishlist.js
// ============================

function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(list) {
  localStorage.setItem("wishlist", JSON.stringify(list));
}

const container = document.getElementById("wishlist-container");

fetch("./DATA/products.json")
  .then(r => r.json())
  .then(products => {
    renderWishlist(products);
  });

function renderWishlist(products) {
  const wishlist = getWishlist();
  container.innerHTML = "";

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="feature-empty" style="grid-column: 1 / -1">
        <div class="empty-icon">❤️</div>
        <p>Your wishlist is empty</p>
        <p style="font-size: 0.82rem">Browse parts and click the ❤️ button to save them here</p>
      </div>`;
    return;
  }

  wishlist.forEach((id, index) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const card = document.createElement("div");
    card.className = "wishlist-card";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description || product.category}</p>
      <div style="display:flex; gap:8px;">
        <button onclick="event.stopPropagation(); removeFromWishlist(${index})" style="flex:1">Remove</button>
        <button onclick="event.stopPropagation(); window.location.href='product.html?id=${product.id}'" style="flex:1; background: var(--accent); color: var(--bg-primary); border: none;">View</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function removeFromWishlist(index) {
  const wishlist = getWishlist();
  wishlist.splice(index, 1);
  saveWishlist(wishlist);
  location.reload();
}
