  

function crearTarjetas( data ){
  let tarjetas =""   
  for (const event of data){
      tarjetas += `<div class="card">
      <img src="${event.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <div class="card-footer">
        <p>Price:&#36; ${event.price}</p>
        <input type="button" class="btn btn-warning" onclick="seeDetail('${event._id}')" value="See more" id="button"></input>
        
      </div>
      </div>
    </div>`
  }
  document.querySelector("#contenedor").innerHTML = tarjetas
}

function seeDetail(_id) {
window.location.href = `./details.html?id=${_id}`
}
let ev = data.events
crearTarjetas( ev )







