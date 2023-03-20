
function captData() {
  let ingresoBusqueda = document.getElementById(`search`).value.toLowerCase()
  let checksCateg = Array.from(document.querySelectorAll(`.checks:checked`) ).map(each => each.value)
console.log( ` checksCateg:  ${checksCateg} ` );
console.log( ` ingresoBusqueda:  ${ingresoBusqueda}` );

  let ev_filtrados = eventos.filter( each =>{
                  return (each.name.toLowerCase().includes(ingresoBusqueda) || each.description.toLowerCase().includes(ingresoBusqueda) )
                      && ( checksCateg.length === 0 || checksCateg.includes(each.category ) )             
              }     
          )
console.log( ev_filtrados );
      ev_filtrados.length>0 ? crearTarjetas(ev_filtrados) :  noEncontrado() ;
}


function noEncontrado(){
  Swal.fire({
   html: `
       <div >
         <img src="https://cdn-icons-png.flaticon.com/512/1548/1548682.png" width="100px"/>
       </div>
   `,
   showCloseButton: true,
   //width: '50%',  
   //grow: 'row',
   //padding: '1rem',


 })

}


