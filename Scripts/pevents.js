
function crearTarjetas( ev ){

  var contenedor_id = document.querySelector('#contenedor-main') || 
                      document.querySelector('#contenedor-upcoming') || 
                      document.querySelector('#contenedor-past');
        
  switch(contenedor_id.id) {
    case 'contenedor-main':
      contenedor_id.innerHTML = ev.map( plantilla ).join('')
      break;

    case 'contenedor-upcoming':
      contenedor_id.innerHTML = ev.map( 
          cada_evento => {
                if( cada_evento.date > data.currentDate){
                  plantilla(cada_evento)
                }
          }
      ).join('')
      break;

    case 'contenedor-past':
      contenedor_id.innerHTML = ev.map( 
            cada_evento => (cada_evento.date) < data.currentDate ? plantilla(cada_evento) : "" ).join('')
      break;
  }

        if(contenedor_id.innerHTML==="") {
          noEncontrado()
        }
}

            function plantilla(event){
              return `<div class="card">
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

function seeDetail(_id) {
  window.location.href = `./details.html?id=${_id}`
}


crearTarjetas(data.events)