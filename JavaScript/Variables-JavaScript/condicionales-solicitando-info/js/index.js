let datosCompletos = false
let nombre = prompt("Ingrese su nombre")
if (nombre != "") {
    let apellido = prompt("Ingrese apellido")
    if (apellido != "") {
    // alert(apellido)
        let textoEdad = prompt("Ingrese su edad")
        if(textoEdad != "") {
            let edad = Number(textoEdad)
            //alert (typeof edad)
            if (edad >= 18) {
                document.write("bienvenido al BAR")
            } else {
                alert("Eres menor de edad")
            }
        }else{
            alert ("La edad es requerida")
            window.location.reload ()
        }
        
    }else{
        alert("El apellido es requerido")
        window.location.reload ()
    }

} else {
    alert("El nombre es requerido")
    window.location.reload ()
}
//alert(nombre)