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
          <button onclick="loadToolDetails('${tool.id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#toolDetail">
            Details
          </button>
          </div>
        </div>
      </div>
    </div>
    `;
    cardContainer.appendChild(cardDiv);
  });
};

const loadToolDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayToolsDetails(data.data);
};

const displayToolsDetails = (toolDetail) => {
  console.log(toolDetail);

  // Modal Right Contianer
  const modalRightContianer = document.getElementById("modal_RightContianer");
  modalRightContianer.innerHTML = "";
  const modalCardDiv = document.createElement("div");
  modalCardDiv.innerHTML = `
    <div class="card border-0 px-2 py-2" style="width: 18rem;">
    <img src="${
      toolDetail.image_link[0]
    }" class="card-img-top rounded" alt="...">
    <div class="card-body">
      <p class="card-text">${findElem(
        toolDetail.input_output_examples[Math.floor(Math.random() * 2)]
      )}</p>
      
    </div>
    </div>
  `;
  modalRightContianer.appendChild(modalCardDiv);

  // Modal Left Container
};

function findElem(elem) {
  // console.log(elem);
  const str = elem.input + "\n" + elem.output;
  console.log(str);
  return str;
}

loadData();
