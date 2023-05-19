//Zona de Variables del formulario
const usuario = document.querySelector('#user') 
const correo = document.querySelector('#email') 
const contraseña = document.querySelector('#pass1') 
const repetirContraseña = document.querySelector('#pass2') 
const codigos = document.querySelector('#codigos') 
const terminos = document.querySelector('#terminos')

//Zona de variables d elos botones
const btnRegistrar = document.querySelector('#botonRegistrar')
const btnReset = document.querySelector('#botonReset')

//Variable del formulario
const formulario = document.getElementById('myForm')

//Zona de las funciones
const validarDatos = () => {
    if(usuario.value == ''){
        usuario.style.border = '2px solid red'
    } else {
        localStorage.setItem('nombre', usuario.value)
        usuario.style.border = 'none'
    }
    
    if(correo.value == ''){
        correo.style.border = '2px solid red'
    }else{
        localStorage.setItem('correo', correo.value)
        correo.style.border = 'none'
    }

    if(contraseña.value == ''){
        contraseña.style.border = '2px solid red'
    }else{
        localStorage.setItem('contraseña', contraseña.value)
        contraseña.style.border = 'none'
    }

    if(contraseña.value != repetirContraseña.value){
        repetirContraseña.style.border = '2px solid red'
        alert('Hey!! las contraseñas tienen que ser iguales')
    }else{
        if(repetirContraseña.value == ''){
            repetirContraseña.style.border = '2px solid red'
        }else{
            localStorage.setItem('repetir contraseña', repetirContraseña.value)
            repetirContraseña.style.border = 'none'
        }
    }
    
    if(codigos.value == ''){
        codigos.style.border = '2px solid red'
    }else{
        if(typeof Number(codigos.value) != 'number'){
            codigos.style.border = '2px solid red'
            alert('Hey!! En codigo postal solo puedes colocar numeros')
        }else{
            console.log()
            localStorage.setItem('codigo postal', codigos.value)
            codigos.style.border = 'none'
        }
    }

    if(!terminos.checked){
        alert('Debes aceptar los terminos y condiciones')
    }else{
        console.log(terminos.checked)
    }
}


//Zona de los eventos
btnRegistrar.addEventListener('click', (evento) => {
    evento.preventDefault()
    validarDatos()
})

btnReset.addEventListener('click', () => {
    usuario.value = ''
    correo.value = ''
    contraseña.value = ''
    repetirContraseña.value = ''
    codigos.value = ''
    terminos.checked = false
    localStorage.clear()
})