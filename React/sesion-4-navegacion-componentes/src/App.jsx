import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Carrito from './components/Carrito'
import Navbar from "./components/Navbar"
import Registrate from "./components/Registrate";


const App = () => {
  
  return(
    <div>
          <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/Registrate" element={ <Registrate/> }/>
          <Route path="/carrito" element={ <Carrito/> }/>
        </Routes>
      </Router>
    </div>
    
    </div>

  )
}

export default App
