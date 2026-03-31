//Reads ID from URL, Loads categories + products, displays recommended parts.

const params = new URLSearchParams(window.location.search);
const categoryId = params.get("id"); //url read + get id

let categoriesData = []; 
let productsData = [];

fetch("data/categories.json") //categories data loaded
  .then(res => res.json())
  .then(categories => {
    categoriesData = categories; //store categories list
    return fetch("data/products.json");
  })
  .then(res => res.json())
  .then(products => {
    productsData = products; //store products list
    loadCategory();
  });

function loadCategory() { 
  const category = categoriesData.find(c => c.id === categoryId); //find the selected category

  document.getElementById("category-name").textContent = category.name; //change heading to that
  document.getElementById("category-desc").textContent = category.description; //change description to that

  const container = document.getElementById("products");
  container.innerHTML = "";

  category.recommended_parts.forEach(partId => { //loop through all recommended part IDs
    const product = productsData.find(p => p.id === partId); //match the part ID to the actual product

    const card = document.createElement("div"); //creates product cart
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.category}</p>
    `;

    card.onclick = () => {
      window.location.href = `product.html?id=${product.id}`; //navigates to the product page 
    };

    container.appendChild(card); //display card
  });
}
