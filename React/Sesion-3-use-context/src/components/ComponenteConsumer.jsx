import React, { useContext } from "react";
import MiContexto from './MiContexto'

const ComponenteConsumer = () => {
    return(
        <MiContexto.Consumer>
            {value => <div>{value}</div>}
        </MiContexto.Consumer>
    )
}

export default ComponenteConsumer