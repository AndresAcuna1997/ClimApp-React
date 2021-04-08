import React from 'react'
import PropTypes from 'prop-types'
import Nubleado from '../imgs/Nubleado.jpg'
import Soleado from '../imgs/Soleado.jpg'
import Lloviendo from '../imgs/Lloviendo.jpg'

const ImprimirDatos = ({nombreciudad, temperaturaCiudad, estadoCiudad, descripcionCiudad}) => {

    
    const imagen = (estadoCiudad ==='Clouds') ? Nubleado: (estadoCiudad ==='Clear') ? Soleado : (estadoCiudad ==='Rain') ? Lloviendo.jpg : 'defaultf'; 
    return (
            <ul>
                <li >{nombreciudad}</li>
                <li >{temperaturaCiudad} ° K</li>
                <li><img src={imagen} alt={estadoCiudad} /></li>
                <li >{descripcionCiudad}</li>
            </ul>
    )
}

ImprimirDatos.propTypes = {

}

export default ImprimirDatos
