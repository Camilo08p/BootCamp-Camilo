const body = document.querySelector ('body')
const main = document.createElement ('main')
const span = document.createElement ('span')

body.style.height = '100vh'
// inserta codigo HTLM
body.innerHTML = "<h1>Soy un h1 generado en js</h1>"
body.innerHTML = "<h1>hola</h1>"

//inseta texto
span.innerText = "hola soy un span"
//añadiendo span al body
body.appendChild (main)
main.appendChild (span)