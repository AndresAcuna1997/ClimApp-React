import React, { useEffect, useState } from 'react'
import { GetClima } from './GetClima'
import ImprimirDatos from './ImprimirDatos'
import PropTypes from 'prop-types'

const DatosClimaCiudad = ({ciudad}) => {

    const [infociudad, setInfociudad] = useState([])

    useEffect(() => {
        GetClima(ciudad).then((datosCiudades =>{setInfociudad(datosCiudades); }), (err)=>window.alert(`Ciudad '${ciudad}' no se ha encontrado, vuelva a intentarlo`));
    }, [ciudad])

    return (
        <div>
            <ImprimirDatos nombreciudad={infociudad.nombreCiudad} temperaturaCiudad={infociudad.temperaturaCiudad} estadoCiudad={infociudad.estadoCiudad} descripcionCiudad={infociudad.descripcionCiudad} />
        </div>
    )
}

DatosClimaCiudad.propTypes = {
    ciudad:PropTypes.string.isRequired
}

export default DatosClimaCiudad
