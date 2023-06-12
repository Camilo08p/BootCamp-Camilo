import React, { useEffect } from 'react'
import './../assets/css/Home.css'
import ComponenteSesion1 from './ComponenteSesion1'
import ComponenteSesion2 from './ComponenteSesion2'
import ComponenteSesion4 from './ComponenteSesion4'
import ComponenteSesion5 from './ComponenteSesion5'
import 'animate.css';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const mostrarAlerta = () => {
            swal({
                title: 'Bienvenido',
                text: '¿Quieres recibir las últimas novedades y las ofertas más ardientes?',
                icon: 'warning',
                buttons: ['No', 'Sí']
            }).then(respuesta => {
                console.log(respuesta)
                if (respuesta) {
                    navigate('/Registrate')
                }   
            })
        }
        mostrarAlerta()
    }, [])

    return (
        <div>

            <div className='app'>
                {/* <span onClick={mostrarAlerta()}></span> */}
            </div>

            <div>
                <ComponenteSesion1 />
            </div>

            <div className='contenedorLabel'>
                <div className='animate__animated animate__slideInLeft' id='label' >
                    <label> <b>Black Friday del 26 de mayo al 2 de junio aprovecha las mejores hiperofertas </b> </label>
                </div>
            </div>

            <div>
                <ComponenteSesion2 />
            </div>

            <div>
                <ComponenteSesion4 />
            </div>

            <div>
                <ComponenteSesion5 />
            </div>

        </div>
    )
}

export default Home
