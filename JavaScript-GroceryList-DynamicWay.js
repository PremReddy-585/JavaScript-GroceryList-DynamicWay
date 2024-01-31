let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let containerEl = document.getElementById("groceryListContainer");
containerEl.classList.add("background");

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery List";
containerEl.appendChild(headingEl);

let groceryContainer = document.createElement("ul");
groceryContainer.classList.add("grocery-container","dflex", "flex-column", "justify-content-center" );
containerEl.appendChild(groceryContainer);

for (let groceryItem of groceryList){
    let ListItemEl = document.createElement("li");
    ListItemEl.textContent = groceryItem;
    groceryContainer.appendChild(ListItemEl);
}

