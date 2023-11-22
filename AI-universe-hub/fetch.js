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
        <p class="card-text">
          <ol class ="ps-3">
            <li>
              ${tool.features[0]}
            </li>
            <li>
              ${tool.features[1]}
            </li>
            <li>
              ${tool.features[2]}
            </li>
          </ol>
        </p>
      </div>
      <div class="card-body border-top">
        <div class="d-flex align-items-center justify-content-between">
          <div >
            <h5 class="card-title">${tool.name}</h5>
            <p class="mb-0">
            ${tool.published_in}</p>
          </div>
          <div>
            <button type="button" class="btn btn-info">Details</button>
          </div>
        </div>
      </div>
    </div>
    `;
    cardContainer.appendChild(cardDiv);
  });
};

loadData();
