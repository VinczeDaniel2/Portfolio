import { getData  } from "./assets.js";

export const project = ()=>{
  console.log("ok");
    const url = "https://raw.githubusercontent.com/VinczeDaniel2/Portfolio_data/main/portfolio_data.json"
    getData(url,renderData)
    let row = document.querySelector(".row")
    function renderData(data){
        console.log(data);
        data.forEach(e => {
        row.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${e.images}" class="card-img-top img-fluid" style="width: 10rem; height: 10rem;" alt="...">
        <div class="card-body">
          <h5 class="card-title">${e.name}</h5>
          <p class="card-text">${e.descr}</p>
          <a href="${e.github}" target="blank_" class="btn btn-primary"><i class="fa-brands fa-github"></i></a>
          <a href="${e.hosted}" traget="blank_" class="btn btn-primary">Go to the Website</a>
        </div>
      </div>`
    });
    }
    
}
