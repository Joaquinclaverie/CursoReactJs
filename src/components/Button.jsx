// Importar React

import React from 'react'
import PropTypes from 'prop-types'

// Componente Funcional

const Button = ({type, text, clickHandler}) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

// Validacion con PropTypes

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

// Exportacion

export default Button