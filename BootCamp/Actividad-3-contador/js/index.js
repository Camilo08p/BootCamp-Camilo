const numero = document.querySelector ('#numero')
const botonDisminuir = document.getElementById ('boton-1')
const botonReiniciar = document.getElementById ('boton-2')
const botonAumentar = document.getElementById ('boton-3')

let num = Number(numero.textContent)

let aumentar = () => {
    num++; numero.textContent =num
}
let disminuir = () => {
    num--; numero.textContent =num
}
let reiniciar =() => {
    num = 0; numero.textContent =num
}

botonAumentar.addEventListener ('click',()=> {
    aumentar()
})
botonDisminuir.addEventListener ('click',() =>{
    disminuir()
})
botonReiniciar.addEventListener ('click', () =>{
    reiniciar()
})