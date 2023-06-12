import React from 'react'
import '../assets/css/Producto.css'

//también podemos pasar las propiedades así
const Producto = ({ producto, agregarAlCarrito }) => {
    const { id, name, referencia, precio, image } = producto

    return (
        <div className="product">
            <img src={image} alt={name} />
            <h2>{referencia}</h2>
            <h3>{name}</h3>
            <p>${precio}</p>
            <button onClick={() => agregarAlCarrito(id)}>Añadir al carrito</button>
        </div>
    )
}

export default Producto