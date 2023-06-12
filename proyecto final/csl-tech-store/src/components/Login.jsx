import React from 'react'
import './../assets/css/Login.css'


const Login = () => {
    return (
        <>
        <form className="formIniciar">
            <h3 className="formReg">Iniciar Sesion</h3>

            <label className="labelsFormularios" >Correo Electrónico:</label>
            <input required type="email" className="imputsFormulario" placeholder="Ingrese su E-mail"/>

            <label className="labelsFormularios" >Contraseña:</label>
            <input required type="password" className="imputsFormulario" placeholder="Contraseña" />

            <div className="botones">
            <button type="submit" className="boton" >Ingresar</button>
            </div>
        </form>
        </>
    )
}

export default Login