import React from 'react'
import imagen1Sesion4 from './../assets/img/sesion-4.jpg'
import imagen2Sesion4 from './../assets/img/sesion-4-1.jpg'
import './../assets/css/ComponenteSesion4.css'

const ComponenteSesion4 = () => {
    return (
        <div>
            <h3 className='titulosesion-4'>Transformando Juntos las Oportunidades de Crecimiento</h3>
            <div className='textoImagen'>
                <p className='textoSesion4'>La cadena colombiana de almacenes CSL Store ha impulsado la transformación del comercio electrónico en el país con varios proyectos.
                    Su innovación y trabajo constante ha permitido que CSL STORE sea reconocida recientemente en los premios Tecnology del Futuro 2023 de BIT que los cataloga como una empresa pionera en el negocio de ventas online en Colombia.
                    Son más de 4 años en los que Alkosto ha sido partner estratégico en el proceso de transformación digital de la cadena colombiana de almacenes, la cual ha tenido retos como el fortalecimiento de la omnicanalidad soportado por la tecnología de la información como eje transversal de la compañía.
                    Para la empresa líder en la comercialización de productos de tecnología, CSL Store entró a ser un actor principal en este proceso con grandes desafíos.
                    El principal desafío que tenía la compañía era fortalecer su canal e-commerce, ya que con el paso del tiempo y la evolución del mercado hacia lo digital, las necesidades de este fueron creciendo y requiriendo la ayuda de expertos.</p>
                <div className='imagenDiagonal'>
                    <img className='tamañoImagen1' src={imagen1Sesion4} />
                    <span />
                    <span />
                    <img className='tamañoImagen2' src={imagen2Sesion4} />
                </div>
            </div>
        </div>
    )
}
export default ComponenteSesion4