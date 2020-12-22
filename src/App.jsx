// Importacion

import React, { useState } from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'


// Generacion de la funcion flecha o Arrow function del componente

const App = () => {
    const arrayTextFuncionModificaTexto = useState("")

    // arrayTextoFuncionModificaTexto => ["hola", funcion]

    // 1er posicion: valor ( que inicialmente es el valor por defecto)
    const texto = arrayTextFuncionModificaTexto[0]
    // 2da posicion: funcion que me va permitir modificar el valor por defecto
    const funcionModificaTexto = arrayTextFuncionModificaTexto[1]
    // Lo que ejecuta la funcion
    console.log("Renderizacion de App")
    return (
    <main className='react-calculator'>
        <Result value={texto} />
        <Numbers onClickNumber={number => {
            console.log("Click en number", number)
            funcionModificaTexto(number)
        }} />
        <Functions 
            onContentClear={() =>
                console.log("Content Clear")}
            onDelete={() =>
                console.log("onDelete")}
        />
        <MathOperations 
            onClickOperation={operation => 
                console.log("Operation:", operation)
            }
            onClickEqual={equal =>
                console.log("Equal:", equal)
            }
        />
    </main>)
}

// Exportacion

export default App