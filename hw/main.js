const productCategories = [
  "Jackets & Coats",
  "Hoodies",
  "T-shirts & Vests",
  "Shirts",
  "Blazers & Suits",
  "Jeans",
  "Trousers",
  "Shorts",
  "Underwear",
  "Gift sets",
]

let categoryButtons;

function createCategoryButton(categoryName) {
  const sidebarNav = document.getElementById("categories-nav");
  const categoryButton = document.createElement("button");
  categoryButton.classList.add("sidebar-category-btn");
  categoryButton.textContent = categoryName;
  sidebarNav.appendChild(categoryButton);
}

function initializeCategories(categories) {
  categories.forEach((categoryName) => {
    createCategoryButton(categoryName);
  });
}

function handleCategoryClick(categoryButton) {
  categoryButton.addEventListener("click", function () {
    console.log("Selected category:", categoryButton.textContent);
    categoryButton.classList.add("active-category");

    categoryButtons.forEach((otherButton) => {
      if (otherButton !== categoryButton) {
        otherButton.classList.remove("active-category");
      }
    });
  });
}

function initializeCategoryListeners() {
  categoryButtons = document.querySelectorAll(".sidebar-category-btn");
  console.log("Available categories:", categoryButtons);
  categoryButtons.forEach((button) => {
    handleCategoryClick(button);
  });
}

// Initialize the application
initializeCategories(productCategories);
initializeCategoryListeners();