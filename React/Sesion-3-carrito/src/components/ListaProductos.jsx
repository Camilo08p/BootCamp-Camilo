import React, { useState, useEffect } from 'react'
import Producto from './Producto'
import '../assets/css/ListaProductos.css'


const ListaProductos = ({ agregarAlCarrito }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
    fetch('./productos.json')
        .then((response) => response.json())
        .then((json) => setProductos(json))
    }, [])

    return (
        <div className="product-list">
            {productos.map((product) => (
            <Producto key={product.id} producto={product} agregarAlCarrito={agregarAlCarrito} />
            ))}
        </div>
    )
}

export default ListaProductos