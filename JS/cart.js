fetch("../DATA/products.json") //loads products + read cart
  .then(res => res.json())
  .then(products => {
    displayCart(products);
  });

function displayCart(products) { //displays all the items in the cart
  const cart = getCart();
  const list = document.getElementById("cart-items");
  list.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => { //loop through each item
    const product = products.find(p => p.id === item.productId);

    const li = document.createElement("li"); //create delete functionality
    li.innerHTML = `
      ${product.name} | ${item.seller} | ₹${item.price}
      <button onclick="removeItem(${index})">Remove</button> 
    `;

    list.appendChild(li);
    total += item.price; //total calculation
  });

  document.getElementById("total-price").textContent = `Total: ₹${total}`;
}

function removeItem(index) { 
  let cart = getCart();
  cart.splice(index, 1); //remove a specific entry
  saveCart(cart); //update cart
  location.reload();
}

function clearCart() {
  saveCart([]); //[] emptry value saved
  location.reload();
}
