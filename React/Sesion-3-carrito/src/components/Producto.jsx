import React from "react";
import './../assets/css/Producto.css'

const Producto = ({ producto, agregarAlCarrito }) => {
    const { id, titulo, precio, imagen } = producto

    return(
        <div className="product">
            <img src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <p>${precio}</p>
            <button onClick={() => { agregarAlCarrito(id) }}>Añadir al carrito</button>
        </div>
    )
}

export default Producto