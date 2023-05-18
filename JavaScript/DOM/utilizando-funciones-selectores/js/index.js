const body = document.querySelector ('body')
const main = document.createElement ('main')
const span = document.createElement ('span')

body.style.height = '100vh'
body.innerHTML = "<h1>Soy un h1 generado en js</h1>"
body.innerHTML = "<h1>hola</h1>"

span.innerText = "hola soy un span"
body.appendChild (main)
main.appendChild (span)