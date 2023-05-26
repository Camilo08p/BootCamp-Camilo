import React, { useEffect, useState } from "react";
import Producto from "./Producto";
import './../assets/css/ListaProductos.css'

const ListaProductos = ({ agregarAlCarrito }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                console.log(datos)
                setProductos(datos)
            })
    }, [])

    return(
        <div className="product-list">
            {
                productos.map((producto) => {
                    <Producto key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
                })
            }
        </div>
    )
}

export default ListaProductos