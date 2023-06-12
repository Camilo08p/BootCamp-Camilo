import React, { useEffect, useState } from 'react'
import ListaProductos from './components/ListaProductos'
import Carrito from './components/Carrito'
import './App.css'

const App = () => {
    const [itemsCarrito, setItemsCarrito] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
        }, [])

        const agregarAlCarrito = (productId) => {
        const productoAgregar = products.find((product) => product.id === productId)
        setItemsCarrito((prevItems) => [...prevItems, productoAgregar])
    }

    const removerDelCarrito = (productId) => {
        setItemsCarrito((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        )
    }

    return (
    <div className="app">
        <ListaProductos producto={products} agregarAlCarrito={agregarAlCarrito} />
        <Carrito itemsCarrito={itemsCarrito} removerDelCarrito={removerDelCarrito} />
    </div>
    )
}

export default App
