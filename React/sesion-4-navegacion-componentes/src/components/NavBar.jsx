import React from "react";
import './../assets/Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        <nav>
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn"><i class="fas fa-bars"></i></label>
            <label class="logo">CSL STORE</label>
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/Registrate"><li>Registrate</li></NavLink>
                <NavLink to="/carrito"><li>Carrito</li></NavLink>                
            </ul>
        </nav>
    )
}

export default Navbar