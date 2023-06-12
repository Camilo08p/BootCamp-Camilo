import React from "react";
import ComponenteSesion1 from './ComponenteSesion1'


const Home = () => {

    return (
        <div className='App'>
            <nav className="justify-content-end">
                <nav className="left">
                    <select className="contenedor">
                        <option >celulares</option>
                        <option >computadores</option>
                        <option >televisores</option>
                    </select>
                    
                </nav>
            </nav>
            <div className='label'>
                <label>Muy pronto Black Friday del 26 de mayo al 2 de junio aprovecha las mejores hiperofertas</label>
            </div>
            <div>
                <ComponenteSesion1/>
            </div>
            <div>
                <ComponenteSesion2/>
            </div>
            <div>
                <ComponenteSesion3/>
            </div>
        </div>
    )
}

export default Home