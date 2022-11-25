import React, { useState } from 'react'

const AddCategories = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState([])
    const onInputChange = ({target}) => { // siempre recibo el evento, por eso solo desestructuro el método que me interesa para no escribir event.target
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(inputValue)

        if( inputValue.trim() <= 1 ) return; // Validar que la nueva categoría no exista ya en el listado de categorías 
        
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text" 
                placeholder="Explore Gifts..."
                value={inputValue}
                onChange={onInputChange /* No es necesario indicar el evento en realidad, se envía por defecto */}
            />
            <button type="submit">Buscar</button>
        </form>

    )
}

export default AddCategories