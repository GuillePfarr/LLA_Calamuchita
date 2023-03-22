let perfil = []

function traerDatos(){
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then( datosApi => {
  console.log(datosApi)
  eventos = datosApi.events
  console.log(eventos)
  let perfil = eventos.filter(info => info._id == new URLSearchParams(location.search).get("id") );
console.log(perfil)
console.log(perfil[0].image)
const container = document.getElementById("details-contenedor");

let html = "";
html += `
    <div class details-card">
<div class="row">
  <div class="col-md-6">
    <img src="${perfil[0].image}" class="details-card-img"  alt="${perfil[0].name}">
  </div>
  <div class="col-md-6">
    <div class="card-body">
    <ul class="details-card-ul" >
    <li> <span class="details-card-title"> ${perfil[0].name}</span></li>
    <li>Date:${perfil[0].date}</li>
    <li>Description:${perfil[0].description}</li>
    <li>Category:${perfil[0].category}</li>
    <li>Place:${perfil[0].place}</li>
    <li>Capacity:${perfil[0].capacity}</li>
    <li>Assistance/Estimate:${perfil[0].assistance || perfil[0].estimate}</li>
    <li>Price &#36;${perfil[0].price}</li>
   </ul>
    </div>
  </div>
</div>
</div>

    `



container.innerHTML = html
})
   
   
.catch(error => console.error(error.message))

}

traerDatos()


