import React, { useState } from "react";
import './../assets/css/Registrate.css'


const Registrate = () => {
    const [nombres, setNombres] = useState("");
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [repetirContraseña, setRepetirContraseña] = useState("")
    const [terminos, setTerminos] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Nombre: ${nombres}\nCorreo electrónico: ${correoElectronico}\nContraseña: ${contraseña}\nRepetir Contraseña: ${repetirContraseña}`);
    };

    const handleReset = () => {
        setNombres('');
        setCorreoElectronico('');
        setContraseña('');
        setRepetirContraseña('');
        setTerminos(false);
    };

    const validarDatos = () => {
        if (nombres == '') {
        } else {
            localStorage.setItem('nombres')
        }
        if (correoElectronico == '') {
        } else {
            localStorage.setItem('correo')
            correoElectronico.style.border = 'none'
        }
        if (contraseña == '') {

        } else {
            localStorage.setItem('contraseña')
        }

        if (contraseña != repetirContraseña) {
            alert('Hey!! las contraseñas tienen que ser iguales')
        } else {
            if (repetirContraseña == '') {
            } else {
                localStorage.setItem('repetir contraseña')
            }
        }

    }

    return (
        <form className="form" onSubmit={handleSubmit}>

            <h3 className="formReg">Formulario de Registro</h3>

            <label className="labelsFormularios" >Nombre Completo:</label>
            <input required type="text" className="imputsFormulario" placeholder="Ingrese sus Nombres" value={nombres} onChange={(event) => setNombres(event.target.value)} />

            <label className="labelsFormularios" >Correo Electrónico:</label>
            <input required type="email" className="imputsFormulario" placeholder="Ingrese su E-mail" value={correoElectronico} onChange={(event) => setCorreoElectronico(event.target.value)} />

            <label className="labelsFormularios" >Contraseña:</label>
            <input required type="password" className="imputsFormulario" placeholder="Contraseña" value={contraseña} onChange={(event) => setContraseña(event.target.value)} />

            <label className="labelsFormularios" >Rep. Contraseña:</label>
            <input required type="password" className="imputsFormulario" placeholder="Repetir Contraseña" value={repetirContraseña} onChange={(event) => setRepetirContraseña(event.target.value)} />

            <div>
                <input required type="checkbox" checked={terminos} className="terminos" value={terminos} onChange={(event) => setTerminos(!terminos)} />Acepto los Terminos y Condiciones
            </div>

            <div className="botones">
                <input type="submit" className="boton" value="Registrar" />
                <button type="button" className="boton" onClick={handleReset}>Reiniciar</button>
            </div>

        </form>
    );
}

export default Registrate