import './App.css'
import React, { useState } from 'react'
import Avatar from './components/Avatar'
import Card from './components/Card'
import Lista from './components/Lista'
import Tanjiro from './assets/img/tanjiro.png'
import Inosuke from './assets/img/inosuke.png'
import Zenitsu from './assets/img/zenitsu.png'

const App = () => {
    const [mostrar, setMostrar] = useState(false)
    console.log(mostrar)

    return(
        <div className='container'>
            <Card>
                <Avatar 
                    imagen={Tanjiro}
                    tamaño={100}
                />
                <Avatar 
                    imagen={Inosuke}
                    tamaño={100}
                />
                <Avatar 
                    imagen={Zenitsu}
                    tamaño={100}
                />
            </Card>

            <Lista mostrar={mostrar} />

            <button onClick={() => { setMostrar(true) }}>Mostrar</button>
            <button onClick={() => { setMostrar(false) }}>Esconder</button>
        </div>
    )
}

export default App
