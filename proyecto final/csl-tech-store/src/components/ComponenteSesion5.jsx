import React from 'react'
import './../assets/css/ComponenteSesion5.css'
import imagen1Session6 from './../assets/img/sesion-5-1.png'

const ComponenteSesion5 = () => {
    return (
        <div>
            <div className='contenedorSesion5'>
                <h4 className='cuadro'>+ de 20 marcas que comercializamos</h4>
                <h4 className='cuadro'>+ de 100 proveedores aliados con los que trabajamos</h4>
                <h4 className='cuadro'>2.4 millones de usuarios activos mensuales*</h4>
            </div>
            <div className='generalComponente-6'>
                <img src={imagen1Session6} />
            </div>
        </div>
    )
}
export default ComponenteSesion5