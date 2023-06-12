import React from "react";
import { NavLink } from 'react-router-dom';
import './../assets/css/Navbar.css'
import Logo from './../assets/img/Logo.png'

const Navbar = () => {

    return (
        <div className="barraNavegacion">
            <nav className="navbar">
                <img className="logo-1" src={Logo} />
                <ul >
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/MiCarro"><li>Mi Carro</li></NavLink>
                    <NavLink to="/Login"><li>Login</li></NavLink>
                    <NavLink to="/Registrate"><li>Registrate</li></NavLink>
                </ul>
                <ul > 
                        <NavLink to="/CartasCelulares"><li>Celulares</li></NavLink>
                        <NavLink to="/CartasComputadores"><li >Computadores</li></NavLink>
                        <NavLink to="/CartasTelevisores"><li>Televisores</li></NavLink>
                </ul>
            </nav>
        </div>

    )
}

export default Navbar
