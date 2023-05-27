import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Productos from './components/Productos'
import Carrito from './components/Carrito'
import Navbar from "./components/Navbar"

const App = () => {
  
  return(
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/productos" element={ <Productos/> }/>
          <Route path="/carrito" element={ <Carrito/> }/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
