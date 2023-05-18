const etiquetaH1 = document.querySelector("h1")
//const parrafo = document.getElementById ("parrafo")
const parrafo = document.querySelector ("#parrafo")
const boton = document.querySelector (".boton")
const enlace = document.querySelector (".enlace")



boton.addEventListener ("click", function (){
    etiquetaH1.innerHTML = "Nuevo Valor"
    parrafo.innerHTML = "nuevo parrafo"
} )