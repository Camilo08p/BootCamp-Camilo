import React from 'react'
import '../assets/css/Producto.css'

//también podemos pasar las propiedades así
const Producto = ({ producto, agregarAlCarrito }) => {
    const { id, title, price, image } = producto

    return (
        <div className="product">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>${price}</p>
            <button onClick={() => agregarAlCarrito(id)}>Añadir al carrito</button>
        </div>
    )
}

export default Producto