function load_data() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

function displayUser(data) {
  const postContainer = document.getElementById("post_container");
  for (const user of data) {
    // console.log(user);
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    console.log(user.address.geo);
    postDiv.innerHTML = `
      <h5> ID no - ${user.id}</h5>
      <h5> Name - ${user.name}</h5>
      <h5> Email - ${user.email}</h5>
      <h5> Phone no - ${user.phone}</h5>
      <h5> Website - ${user.website}</h5>
      <h5> Address - 
        <ul>
          <li> Street - ${user.address.street} </li> 
          <li> Suite - ${user.address.suite} </li> 
          <li> City - ${user.address.city} </li> 
          <li> Zipcode - ${user.address.zipcode} </li> 
          <li> City - ${user.address.city} </li>
          <li>
            Geo - 
              <ul>
                <li> LAT - ${user.address.geo.lat} </li> 
                <li> LNG - ${user.address.geo.lng} </li> 
              </ul>
          </li> 
        </ul>
      </h5>
      <h5> Comapny - 
        <ul>
          <li> Name - ${user.company.name} </li> 
          <li> CatchPhrase - ${user.company.catchPhrase} </li> 
          <li> BS - ${user.company.bs} </li> 
        </ul>
      </h5>
      
      
    `;
    postContainer.appendChild(postDiv);
  }
}
