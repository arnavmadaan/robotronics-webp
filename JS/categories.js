fetch("data/categories.json")
  .then(response => response.json()) //raw response to usable js object
  .then(categories => {
    const container = document.getElementById("categories"); //div select

    categories.forEach(category => {
      const card = document.createElement("div"); //loops through every category and creates a new div dynamically
      card.className = "card"; //applies css styling

      card.innerHTML = ` 
        <h3>${category.name}</h3> 
        <p>${category.description}</p>  
      `; //for inserting category name and description into the site from the json

      card.onclick = () => { 
        window.location.href = `category.html?id=${category.id}`;
      }; //navigate to card id

      container.appendChild(card); //displays the card
    });
  });
