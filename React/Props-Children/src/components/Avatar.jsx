import React from "react"

const Avatar = (props) => {
    let imagen = props.imagen
    let tamaño = props.tamaño
    return(
        <img
            height={ tamaño }
            width={ tamaño }
            src={ imagen }
        />
    )
}

export default Avatar