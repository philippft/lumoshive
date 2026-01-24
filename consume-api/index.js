async function displayRecipes() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    const recipes = data.recipes;
    loopRecipes(recipes, productList);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

async function mealTypes() {
  const mealList = document.getElementById("product-list");
  mealList.innerHTML = "";

  try {
    const respone = await fetch(
      "https://dummyjson.com/recipes/meal-type/snack",
    );
    const data = await respone.json();
    const mealLists = data.recipes;

    loopRecipes(mealLists, mealList);
    
  } catch (e) {
    console.error("Error fetching recipes:", e);
  }
}

async function searchRecipes() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  const inputElement = document.querySelector(".search-button input");
  const keyword =inputElement.value;

  try {
    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${keyword}`);
    const data = await response.json();
    const recipes = data.recipes;
    loopRecipes(recipes, productList);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

async function sortRecipes () {
  const sortValue = document.getElementById("sortRecipe").value;
  const productList = document.getElementById("product-list");
  let sort = "";

  if(sortValue === "name-asc"){
    sort = "asc";
  } else if (sortValue === "name-desc") {
    sort = "desc";
  } else if (sortValue === "default") {
    displayRecipes();
  }

  // console.log(sort);

  try {
    const response = await fetch(
      `https://dummyjson.com/recipes?sortBy=name&order=${sort}`,
    );
    const data = await response.json();
    const recipes = data.recipes;
    loopRecipes(recipes, productList);
    console.log("berhasil");
  } catch (e) {
    console.error("Error fetching recipes:", e);
  }
}

function loopRecipes (recipes, container) {
    container.innerHTML = "";

    recipes.forEach((recipe) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.name}" class="product-image"/>
                    <div class="card-body">
                        <h1 class="product-title">${recipe.name}</h1>
                        <p class="product-description">
                            Rating: ${recipe.rating} ⭐ | Difficulty: ${recipe.difficulty}
                        </p>
                    </div>
                `;
      container.appendChild(card);
    });
}

async function getAllRecipesTag () {
  const recipesTagLists = document.getElementById("product-list");

  try {
    const response = await fetch("https://dummyjson.com/recipes/tags");
    const data = await response.json();
    // console.log(data);
    
    recipesTagLists.innerHTML = "";
    // console.log(recipesTags);
    data.forEach((tag) => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
                    <div class="card-tag-body" onclick="getRecipesByTag('${tag}')">
                        <h1 class="tags-title">${tag}</h1>
                    </div>
                `;
      recipesTagLists.appendChild(card);
      // console.log("berhasil")
    });
  } catch (e) {
    console.error("Error fetching recipes:", e);
  }
}

async function getRecipesByTag(tag) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  try {
    const response = await fetch(`https://dummyjson.com/recipes/tag/${tag}`);
    const data = await response.json();
    const recipes = data.recipes;
    loopRecipes(recipes, productList);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
}

displayRecipes();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");
  });
});

// fetch("https://dummyjson.com/recipes/1")
//   .then((res) => res.json())
//   .then(console.log);

// fetch("https://dummyjson.com/recipes?sortBy=name&order=asc")
//   .then((res) => res.json())
//   .then(console.log);

// fetch("https://dummyjson.com/recipes?sortBy=name&order=desc")
//   .then((res) => res.json())
//   .then(console.log);

// fetch('https://dummyjson.com/recipes')
// .then(res => res.json())
// .then(console.table);
