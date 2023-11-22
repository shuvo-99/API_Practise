const loadMeal = (searchItem) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const mealContainer = document.getElementById("meal_container");
  mealContainer.innerHTML = "";
  meals.forEach((meal) => {
    console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
      <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">
            <span class='fw-medium'>Instruction</span> - ${meal.strInstructions}
          </p>
        </div>
      </div>
    `;
    mealContainer.appendChild(mealDiv);
  });
};

function search() {
  const searchText = document.getElementById("search_field").value;
  console.log(searchText);
  loadMeal(searchText);
}

loadMeal("fish");
