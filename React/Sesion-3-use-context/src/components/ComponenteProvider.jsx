import React from "react";
import MiContexto from './MiContexto'
import ComponenteConsumer from "./ComponenteConsumer";

const ComponenteProvider = () => {
    const texto = 'Hola soy un mensaje enviado desde el provider'
    return(
        <MiContexto.Provider value={texto}>
            <ComponenteConsumer />
        </MiContexto.Provider>
    )
}

export default ComponenteProvider