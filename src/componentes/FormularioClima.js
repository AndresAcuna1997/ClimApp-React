import React, { useState } from 'react'

export const FormularioClima = ({setCiudad}) => {

    const [input, setInput] = useState('Type the name of the city');

    const handleChange= ( texto ) => {
        setInput(texto.target.value);
    }
    const vaciarCampo =()=> {
        setInput('');
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        setCiudad(input);
    }

    return (
        <div>
            <form>
                <input type='text' value={ input } onChange={ handleChange } onClick={vaciarCampo} />
                <br/>
                <button onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}
