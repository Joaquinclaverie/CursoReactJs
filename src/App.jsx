// Importacion

import React from 'react'
import Result from './components/Result'
import Button from './components/Button'
import './App.css'


// Generacion de la funcion flecha o Arrow function del componente

const App = () => {

    const clickHandlerFunction = text => {
        console.log("Button.clickHandler", text)
    }
    
    // Lo que ejecuta la funcion
    console.log("Renderizacion de App")
    return (
    <main className='react-calculator'>
        <Result value={undefined} />
        <div className="numbers">
            <Button text="1" clickHandler={clickHandlerFunction}/>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>
                clear
            </button>
            <button>
                remove
            </button>
        </div>
        <div className="math-operations">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <button>=</button>
        </div>
    </main>)
}

// Exportacion

export default App