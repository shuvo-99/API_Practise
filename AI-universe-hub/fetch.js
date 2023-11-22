const loadData = async () => {
  const url = "https://openapi.programming-hero.com/api/ai/tools";
  const res = await fetch(url);
  const data = await res.json();
  displayTools(data.data.tools);
};

const displayTools = (tools) => {
  const cardContainer = document.getElementById("card_container");
  tools.forEach((tool) => {
    console.log(tool);
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
    <div class="card h-100 px-2 py-2 rounded ">
      <img src="${tool.image}" class="card-img-top rounded " alt="...">
      <div class="card-body">
        <h5 class="card-title">Features</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-body border-top">
      <h5 class="card-title">${tool.name}</h5>
      </div>
    </div>
    `;
    cardContainer.appendChild(cardDiv);
  });
};

loadData();
