const titulo = document.querySelector ('#encabezado')
const parrafo = document.getElementById ('parrafo')
const boton = document.getElementById ('boton')

// titulo.classList.add('tamaño')
// // titulo.classList.remove('tamaño')

// parrafo.classList.add ('color')

// boton.classList.add ('btn')
titulo.style.width ='70px'
titulo.style.margin = 0

const agregarClase = (elemento, nombreClase) => {
    elemento.classList.add (nombreClase)
}

const eliminarClase = (elemento, nombreClase) => {
    elemento.classList.remove (nombreClase)
}

const intercalarClase = (elemento, nombreClase) => {
    elemento.classList.toggle (nombreClase)
}

agregarClase (titulo, 'tamaño') 
agregarClase (parrafo, 'color')
agregarClase (boton, 'btn')

eliminarClase (titulo, 'tamaño')
eliminarClase (parrafo, 'color')
eliminarClase (boton, 'btn')

boton.addEventListener('click',() =>{
    intercalarClase (titulo, 'tamaño') 
    intercalarClase (parrafo, 'color')
    intercalarClase (boton, 'btn')
})

titulo.addEventListener('mouseover',()=>{
    titulo.style.color ='cyan'
})

titulo.addEventListener('mouseout',()=>{
    titulo.style.color ='black'
})