import React, { useState, useEffect } from 'react'
import Producto from './Producto'
import '../assets/css/ListaProductos.css'


const ListaProductos = ({ agregarAlCarrito }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProductos(data))
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