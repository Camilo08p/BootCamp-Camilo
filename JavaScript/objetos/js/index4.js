/*
    Operador logico AND &&  V V = V
                            V F = F

    Operador logico OR ||   V V = V
                            F V = V
*/ 

let promedio = 0

const estudiantes = {
    estudiante1: {
        nombre: "Camilo",
        apellido: "Parada",
        notas: [5.0, 4.5, 3.0]
    },
    estudiante2: {
        nombre: "Camilo",
        apellido: "Quiñonez",
        notas: [1.5, 3.5, 3.0]
    },
    estudiante3: {
        nombre: "Karol",
        apellido: "Ariza",
        notas: [5.0, 3.5, 1.0]
    }
}

let llavesObjeto = Object.keys (estudiantes)

for (let llave of llavesObjeto) {
    let nombre = estudiantes [llave].nombre
    let apellido = estudiantes[llave].apellido
    let notas = estudiantes[llave].notas

    
    for(let nota of notas){
        promedio += nota
    }

    let divisor = notas.length 
    
    promedio /= divisor
    alert ("Hola " + nombre + " " + apellido)

    if (promedio >= 0 && promedio <= 2.9){
        alert ("Tu promedio es: " + promedio )
        alert ("Perdiste la materia")
    }
    if(promedio >=3 && promedio <=3.9){
    alert ("Tu promedio es: " + promedio )
    alert ("Pasaste la materia")
    }
    if(promedio >=4 && promedio <=5){
        alert ("Tu promedio es: " + promedio )
        alert ("Ganaste una beca")
        }
    
    promedio = 0
}

// //operador AND &&
// V V V F = false
// V V F V = false
// V V V V = true
// V F V V = false
// F V V V = false


// //Operador OR ||
// V V V F = true
// V V F v = true
// F F F F = false

