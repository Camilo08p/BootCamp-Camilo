import { NavLink } from 'react-router-dom';
import './../assets/css/Navbar.css'
import Logo from './../assets/img/Logo.png'
import React, { useState } from "react";
import imagenCarrito from '../assets/img/carrito2.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="barraNavegacion">
            <nav className="navbar">
                <img className="logo-1" src={Logo} alt="Logo" />
                <ul>
                    <NavLink exact={true.toString()} to="/" className="active">
                        <li>Home</li>
                    </NavLink>
                    {/* <NavLink to="/Login" className="active">
                        <li>Login</li>
                    </NavLink> */}
                    <NavLink to="/Registrate" className="active">
                        <li>Registrate</li>
                    </NavLink>
                    <NavLink to="/MiCarro" className="active">
                        <li><img className='imagenCarrito' src={imagenCarrito} alt="Carrito" /></li>
                    </NavLink>
                    <li className={`dropdown ${isOpen ? 'open' : ''}`}>
                        <a className="dropdown-toggle" onClick={toggleMenu}>
                            Categorías
                        </a>
                        <ul className="dropdown-menu">
                            <NavLink to="/CartasCelulares" onClick={closeMenu}>
                                <li>Celulares</li>
                            </NavLink>
                            <NavLink to="/CartasComputadores" onClick={closeMenu}>
                                <li>Computadores</li>
                            </NavLink>
                            <NavLink to="/CartasTelevisores" onClick={closeMenu}>
                                <li>Televisores</li>
                            </NavLink>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;


