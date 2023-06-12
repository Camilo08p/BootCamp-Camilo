import React, { useEffect, useState } from 'react'
import '../assets/css/Carrito.css'

const Carrito = ({ itemsCarrito, removerDelCarrito }) => {
    const [precioTotal, setPrecioTotal] = useState(0)

    useEffect(() => {
        const calcularPrecioTotal = () => {
            const total = itemsCarrito.reduce((accumulator, item) => {
            return accumulator + item.precio
            }, 0);
            setPrecioTotal(total)
    };

    calcularPrecioTotal()
    }, [itemsCarrito])

    return (
        <div className="shopping-cart">
            <h2>Carrito de compras</h2>
            <ul>
            {itemsCarrito.map((item) => (
                <li key={item.id}>
                {item.title} (${item.precio})
                <button onClick={() => removerDelCarrito(item.id)}>Eliminar</button>
                </li>
            ))}
            </ul>
            <p>Total: ${precioTotal}</p>
        </div>
    );
};

export default Carrito