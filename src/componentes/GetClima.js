import PropTypes from 'prop-types'

export const  GetClima = async(ciudad='Berlin') => { //porque no lleva {}?


    //console.log(ciudad);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(ciudad)}&appid=0cb6b457eef0c824c9356d1dc37731bc`;
    
    const respuesta = await fetch( url );
    const { main:{temp:temperatura}, weather:{0:{main:estadoClima ,description} } }= await respuesta.json();


    const dataCiudad ={
        nombreCiudad:ciudad,
        temperaturaCiudad:temperatura,
        estadoCiudad:estadoClima,
        descripcionCiudad:description
    }
    return dataCiudad;
    console.log(dataCiudad);
}

GetClima.PropTypes = {
    ciudad:PropTypes.string.isRequired
}
