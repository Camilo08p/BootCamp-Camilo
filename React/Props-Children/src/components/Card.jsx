import { React, Children } from "react"
import './../assets/css/Card.css'

const Card = ({ children }) => {
    
    return(
        <div className="Card">
            {
                Children.map(children,(child) => (
                    <div className="row">
                        { child }
                    </div>
                ))
            }
        </div>
    )
}

export default Card