import React from 'react'
import { computadores } from './data/productos'
import { CardCarrito } from "./CardCarrito";

const Computadores = ({ agregarDatos, filtro }) => {
    const itemsComputadores = computadores
        .filter((cell) => cell.name.toLowerCase().includes(filtro.toLowerCase()))
        .map((cell, index) => {
            return <CardCarrito
                key={index}
                cell={cell}
                mostrarBoton={true}
                agregarDatos={agregarDatos}
                action={'pc'}
            />

        })

    return (
        <div className='product-list'>
            {itemsComputadores}
        </div>
    )
}
export default Computadores
