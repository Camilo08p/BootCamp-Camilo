import React, { useEffect, useState } from "react";
import './../assets/css/Personajes.css'

const Personajes = () => {
    const [personajes, setPersonajes] = useState([])
    const [paginaActual, setPaginaActual] = useState(1)
    const [tienePaginaSiguiente, setTienePaginaSiguiente] = useState(true)   

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}`)
            .then(respuesta => respuesta.json())
            .then(datos => {
                setPersonajes(datos.results)
                setTienePaginaSiguiente(!!datos.info.next)
            })
            .catch(error => console.log(error))
    }, [paginaActual])

    const manejarSiguiente = () => {
        setPaginaActual(pagina => pagina + 1) 
    }

    const manejarAnterior = () => {
        if(paginaActual > 1){
            setPaginaActual(pagina => pagina - 1)
        }
        
    }

    return(
        <>
            <div className="navigation-buttons">
                <button onClick={manejarAnterior} disabled={paginaActual === 1}>Anterior</button>
                <button onClick={manejarSiguiente} disabled={!tienePaginaSiguiente} >siguiente</button>
            </div>
            <div className="character-list">
                {
                    personajes.map((personaje) => {
                        {
                            return <div key={personaje.id} className="character-card">
                                <img src={personaje.image} alt={personaje.name} />
                                <h3>{personaje.name}</h3>
                                <p>Status: {personaje.status}</p>
                                <p>Specie: {personaje.species}</p>
                            </div>
                        }
                    })
                }
            </div>
        </>
    )
}

export default Personajes