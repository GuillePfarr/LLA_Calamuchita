
cDate = data.currentDate;
events = data.events
p_events = []
f_events = []

for (let event in events) {
    if (events[event].date < cDate) {
        p_events.unshift(events[event])
    }
    else {
        f_events.unshift(events[event])
    }
}
const contenedorTarjetas = document.querySelector("#contenedor")

let tarjetasGeneradas = crearTarjetas(f_events)

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
          <a href="details.html" class="btn btn-warning">DETAILS</a>
        </div>
        </div>
      </div>`
    }
    return tarjetas
}




