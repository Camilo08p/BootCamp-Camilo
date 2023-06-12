import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import alert from 'sweetalert'
import swal from 'sweetalert'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import MiCarro from './components/MiCarro'
import Registrate from './components/Registrate'
import Login from  './components/Login'
import CartasCelulares from './components/CartasCelulares'
import CartasComputadores from './components/CartasComputadores'
import CartasTelevisores from './components/CartasTelevisores'
import ComponenteSesion3 from './../src/components/ComponenteSesion3'
import wa from './assets/img/wa.png'
import './assets/css/CartaProductos.css'


const App = () => {

  const [carrito, setCarrito] = useState([])

  const carritoDeCompras = (datosCarrito) => {
    setCarrito([
      datosCarrito,
      ...carrito
    ])
    console.log({ carrito });
  }

  return (
    <div >
      <div >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Registrate" element={<Registrate />} />
            {/* <Route path="/Login" element={<Login/>} /> */}
            <Route path="/MiCarro" element={<MiCarro carrito={carrito} />} />
            <Route path="/CartasCelulares" element={<CartasCelulares agregarDatos={carritoDeCompras} />} />
            <Route path="/CartasComputadores" element={<CartasComputadores agregarDatos={carritoDeCompras} />} />
            <Route path="/CartasTelevisores" element={<CartasTelevisores agregarDatos={carritoDeCompras} />} />
          </Routes>
        </Router>

      </div>
      <div>
      <a target="_blank" href="https://api.whatsapp.com/send/?phone=573017808328&text&type=phone_number&app_absent=0" ><img className='logoWa' src={wa}></img></a>
        <ComponenteSesion3 />
      </div>

    </div>



  )
}

export default App
