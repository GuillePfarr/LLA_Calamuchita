
let perfil = data.events.filter(info => info._id == new URLSearchParams(location.search).get("id") );
console.log(perfil)
/* Renderizar profile */
const container = document.getElementById("details-contenedor");
let html = "";

html += `
    <div class="card">
        <img src="${perfil[0].image}" class="card-img-top"  alt="${perfil[0].name}">
        <div clas="card-body">
            <h5 class="card-title">${perfil[0].name}</h5>
            
            <p>Date:<span>${perfil[0].date}</span></p>
            <p>Description:<span>${perfil[0].description}</span></p>
            <p>Category:<span>${perfil[0].category}</span></p>
            <p Place class="card-text">${perfil[0].place}</p>
            <div class="card-footer>
            <p>Price:&#36; ${perfil[0].price}</p>
            <p> Estimate:${perfil[0].price}</p>
            </div>
            
        </div>
    </div>
    `


container.innerHTML = html