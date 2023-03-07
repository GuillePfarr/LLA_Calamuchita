
const p_events = data.events.filter(event => event.date < data.currentDate)

console.log(p_events);

const contenedorTarjetas = document.querySelector("#contenedor")/*selecciona el elemento que quiero modificar*/

let tarjetasGeneradas = crearTarjetas(p_events)

contenedorTarjetas.innerHTML = tarjetasGeneradas

function crearTarjetas(arrayData){
    let tarjetas =""
    for (const event of arrayData){
        tarjetas += `<div class="card">
        <img src="${event.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text">${event._id}</p>
          <p class="card-text">${event.description}</p>
          <div class="card-footer">
          <p>Price:&#36; ${event.price}</p>
          
          <input type="button" class="btn btn-warning" onclick="seeDetail('${event._id}')" value="See more" id="button"></input>
          
        </div>
        </div>
      </div>`
    }
    return tarjetas
}

function seeDetail(_id) {
  window.location.href = `./details.html?id=${_id}`
}
