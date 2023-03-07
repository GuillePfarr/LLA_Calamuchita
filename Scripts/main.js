events = data.events

const contenedorTarjetas = document.querySelector("#contenedor")

let tarjetasGeneradas = crearTarjetas(events)

contenedorTarjetas.innerHTML = tarjetasGeneradas

function crearTarjetas(arrayData){
    let tarjetas =""
    for (const event of arrayData){
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
    return tarjetas
}

function seeDetail(_id) {
  window.location.href = `./details.html?id=${_id}`
}

{/* <a href="details.html" class="btn btn-warning">DETAILS</a> */}












