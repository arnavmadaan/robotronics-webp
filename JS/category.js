// ============================
// ROBOTRONICS — category.js
// Category browsing + Just Browsing (grouped by subcategory)
// ============================

const params = new URLSearchParams(window.location.search);
const categoryId = params.get("id");
const browseMode = params.get("browse");

let categoriesData = [];
let productsData = [];

fetch("./DATA/categories.json")
  .then(res => res.json())
  .then(categories => {
    categoriesData = categories;
    return fetch("./DATA/products.json");
  })
  .then(res => res.json())
  .then(products => {
    productsData = products;
    if (categoryId) {
      loadCategory();
    } else if (browseMode === "categories") {
      loadAllCategories();
    } else {
      loadJustBrowsing();
    }
  });

function loadAllCategories() {
  document.getElementById("category-name").textContent = "Project Categories";
  document.getElementById("category-desc").textContent = "Choose a category to explore recommended parts";

  const container = document.getElementById("products");
  container.innerHTML = "";

  categoriesData.forEach(category => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${category.name}</h3>
      <p>${category.description}</p>
    `;

    card.onclick = () => {
      window.location.href = `category.html?id=${category.id}`;
    };

    container.appendChild(card);
  });
}

function loadCategory() {
  const category = categoriesData.find(c => c.id === categoryId);

  if (!category) {
    document.getElementById("category-name").textContent = "Category Not Found";
    return;
  }

  document.getElementById("category-name").textContent = category.name;
  document.getElementById("category-desc").textContent = category.description;

  const container = document.getElementById("products");
  container.innerHTML = "";

  category.recommended_parts.forEach(partId => {
    const product = productsData.find(p => p.id === partId);
    if (!product) return;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description || product.category}</p>
      <span class="card-badge">${product.subcategory || product.category}</span>
    `;

    card.onclick = () => {
      window.location.href = `product.html?id=${product.id}`;
    };

    container.appendChild(card);
  });
}

function loadJustBrowsing() {
  document.getElementById("category-name").textContent = "Just Browsing";
  document.getElementById("category-desc").textContent = `Explore all ${productsData.length} parts across every category`;

  const container = document.getElementById("products");
  container.innerHTML = "";
  container.classList.remove("card-container");

  // Group by subcategory
  const groups = {};
  productsData.forEach(p => {
    const group = p.subcategory || p.category;
    if (!groups[group]) groups[group] = [];
    groups[group].push(p);
  });

  for (const [groupName, parts] of Object.entries(groups)) {
    const section = document.createElement("div");
    section.innerHTML = `<div class="section-header">${groupName} (${parts.length})</div>`;
    container.appendChild(section);

    const grid = document.createElement("div");
    grid.className = "card-container";
    grid.style.marginBottom = "24px";

    parts.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description || product.category}</p>
        <span class="card-badge">${product.subcategory || product.category}</span>
      `;

      card.onclick = () => {
        window.location.href = `product.html?id=${product.id}`;
      };

      grid.appendChild(card);
    });

    container.appendChild(grid);
  }
}
