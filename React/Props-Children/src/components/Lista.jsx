import React from "react";

const Lista = (props) => {
    //Zona de Javascript
    const demonSlayers = [
        {
            id: 0,
            name: 'Tanjiro Kamado',
            element: 'Agua'            
        },
        {
            id: 1,
            name: 'Inosuke',
            element: 'Bestia'
        },
        {
            id: 2,
            name: 'Zenitsu Agatsuma',
            element: 'Rayo'
        }
    ]

    const itemsLista = demonSlayers.map((personaje) => {
        if(props.mostrar){
            return <li key={personaje.id}>
                Cazador: { personaje.name }, Elemento: { personaje.element }
            </li>
        }
    })

    //Zona de HTML
    return(
        <ul>
            {itemsLista}
        </ul>
    )
}

export default Lista