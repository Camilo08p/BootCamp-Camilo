import { useState } from 'react'
import { CardCarrito } from "./CardCarrito";
import './../assets/css/MiCarro.css'

const MiCarro = ({ carrito }) => {

    const [data, setData] = useState(carrito)

    let datosCarrito = data
    let totalCompra = 0

    datosCarrito.map(item => {
        totalCompra += Number(item.precio)
    })

    const eliminarItemCarrito = (id) => {
        datosCarrito = datosCarrito.filter(item => item.id !== id)
        setData(datosCarrito)
    }

    return (
        <>
            <div className='product-list-miCarro'>
            {
                data.map((item, index) => (
                    <CardCarrito key={index} cell={item} mostrarBoton={false} eliminarItemCarrito={ eliminarItemCarrito } />
                ))
            }
            </div>
            <h1 className='totalCompra'>Total: $ {totalCompra}</h1>

        </>
    )
}
export default MiCarro 
