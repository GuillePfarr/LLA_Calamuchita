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
                    this.events = datos.events
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

