import React, { useState } from 'react'
import DatosClimaCiudad from './DatosClimaCiudad';
//import PropTypes from 'prop-types'
import { FormularioClima } from './FormularioClima';

const ClimApp = () => {

    const [ciudad, setCiudad] = useState('London');
    return (
        <>
        <div className='contenido'>
            <h2>Weather search</h2>
            <p>Here you can search the weather of any city in the world!</p>
                <div className='formulario'>
                    <FormularioClima ciudad={ciudad} setCiudad={setCiudad}/> 
                </div>
                <div className='datos_ciudad'>
                    <DatosClimaCiudad ciudad={ciudad} />
                </div>
        </div>
        </>
    )
}

export default ClimApp
