// let eventos = []

// function traerDatos(){
//   // fetch("./Scripts/data.json")
//   fetch("https://mindhub-xj03.onrender.com/api/amazing")
//   .then(response => response.json())
//   .then( datosApi => {
//     console.log(datosApi)
//     eventos = datosApi.events.filter(event => event.date < datosApi.currentDate)
//     console.log(eventos)
//     crearTarjetas(eventos)
//   })
     
     
//   .catch(error => console.error(error.message))
  
//   }
  
//   traerDatos()

//   function crearTarjetas( eventos ){
//     let tarjetas =""   
//     for (const event of eventos){
//         tarjetas += `<div class="card">
//         <img src="${event.image}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${event.name}</h5>
//           <p class="card-text">${event.description}</p>
//           <div class="card-footer">
//           <p>Price:&#36; ${event.price}</p>
//           <input type="button" class="btn btn-warning" onclick="seeDetail('${event._id}')" value="See more" id="button"></input>
          
//         </div>
//         </div>
//       </div>`
//     }
//     document.querySelector("#contenedor").innerHTML = tarjetas
// }

// function seeDetail(_id) {
//   window.location.href = `./details.html?id=${_id}`
// }

const { createApp } = Vue

createApp({
    data(){
        return {
            urlApi: "https://mindhub-xj03.onrender.com/api/amazing",
            events : [],
            backupEvents: [],
            texto: '',
            categorias: [],
            categoriasSeleccionadas: [],
            favoritos: [],
        }
    },
    created(){
        this.traerDatos()
        this.favoritos = JSON.parse(localStorage.getItem('favs'))
        if(this.favoritos == null){
            this.favoritos = []
        }
    },
    mounted(){

    },
    methods:{
        traerDatos(){
            fetch(this.urlApi)
                .then(response => response.json())
                .then(datos => {
                    console.log(datos);
                    this.events = datos.events.filter(event => event.date < datos.currentDate)
                    console.log(datos.events)
                    
                    this.backupEvents = this.events
                    this.extraerCategorias(datos.events)
                })
                .catch(error => console.log(error.message))
        },   
        extraerCategorias(array){
            array.forEach(elemento =>{
                if(!this.categorias.includes(elemento.category)){
                    this.categorias.push(elemento.category)
                }
            })
            console.log(this.categorias);
        },
        agregarFavorito(event){
            if(!this.favoritos.includes(event)){
                this.favoritos.push(event)
                localStorage.setItem('favs',JSON.stringify(this.favoritos))
            }
        },
        eliminarFavorito(event){
            this.favoritos = this.favoritos.filter(eventF => eventF.name != event.name)
            localStorage.setItem('favs',JSON.stringify(this.favoritos))
        },

        seeDetail(_id) {
          window.location.href = `./details.html?id=${_id}`
        }


    },
    computed:{
        // filtrarPorTexto(){
        //     this.events = this.backupEvents.filter(event => event.name.toLowerCase().includes(this.texto.toLowerCase()))
        // },
        // filtrarPorCategoria(){
        //     if(this.categoriasSeleccionadas.length>0){
        //         this.events = this.backupEventss.filter(event => this.categoriasSeleccionadas.includes(event.category))
        //     } else {
        //         this.events = this.backupEventss
        //     }
        // } ,
        filtroDoble(){
            let primerFiltro = this.backupEvents.filter(event => event.name.toLowerCase().includes(this.texto.toLowerCase()))
            if(this.categoriasSeleccionadas.length>0){
                this.events = primerFiltro.filter(event => this.categoriasSeleccionadas.includes(event.category))
            } else {
                this.events = primerFiltro
            }
        }
    },
}).mount('#app')

