import React from "react";
import './../assets/css/CartaProductos.css'
import { televisores } from '../components/data/productos'
import { CardCarrito } from "./CardCarrito";


const Televisores = ({ agregarDatos, filtro }) => {
    const itemsTelevisores = televisores
        .filter((cell) => cell.name.toLowerCase().includes(filtro.toLowerCase()))
        .map((cell, index) => {

            return <CardCarrito
                key={index}
                cell={cell}
                mostrarBoton={true}
                agregarDatos={agregarDatos}
                action={'tv'}
            />

        })

    return (
        <div className='product-list'>
            {itemsTelevisores}
        </div>
    )
}

export default Televisores