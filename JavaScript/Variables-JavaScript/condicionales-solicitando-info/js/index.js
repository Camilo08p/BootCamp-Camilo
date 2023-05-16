let datosCOmpletos = false
let nombre = prompt("Ingrese su nombre")
if (nombre != "") {

    alert("ingresaste el nombre " + nombre)
} else {
    alert("El nombre es requerido")
    window.location.reload()
}



let apellido = prompt("Ingrese apellido")
if (apellido == "") {
    alert("el apellido es necesario")
}
let textoEdad = prompt("Ingrese su edad")
let edad = Number(textoEdad)
console.log(nombre + apellido)
console.log(apellido)
console.log(edad)

if (edad >= 18) {
    document.write("bienvenido al BAR")
} else {
    alert("Eres menor de edad")
}