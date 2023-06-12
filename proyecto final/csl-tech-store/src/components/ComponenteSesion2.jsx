import React from 'react'
import './../assets/css/ComponenteSesion2.css'
import ofertaCelular from '../assets/img/celulares/celularPromocion.png'
import ofertaComputador from '../assets/img/computadores/computadorPromocion.png'
import ofertaTelevisor from '../assets/img/televisores/televisorPromocion.png'
import { NavLink } from 'react-router-dom';


const ComponenteSesion2 = () => {
    return (
        <div>
                <div className='contenedor-2'>
                <div className='animate__animated animate__rollIn'>
                    <h2 className='tituloC2' > Ofertas Destacadas</h2>
                </div>

            </div>
            <div className='contenedor-sesion2'>
                <div className='animate__animated animate__backInLeft'>
                    <NavLink to="/CartasCelulares"><img className='imagenPromocion' src={ofertaCelular}></img></NavLink>
                </div>
                <div className='animate__animated animate__backInLeft'>
                    <NavLink to="/CartasComputadores"><img className='imagenPromocion' src={ofertaComputador}></img></NavLink>
                </div>
                <div className='animate__animated animate__backInLeft'>
                    <NavLink to="/CartasTelevisores"><img className='imagenPromocion' src={ofertaTelevisor}></img></NavLink>
                </div>
            </div>
        </div>
    )
}

export default ComponenteSesion2