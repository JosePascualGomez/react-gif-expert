import { useState } from 'react'
import { PropTypes } from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    //funcion que se ejecuta cuando estoy digitando en el input y al dar enter ejecutar algo
    const onInputChange = (event) => {
        //captura el dato del input y lo agrega al hook
        setInputValue(event.target.value);
    }

    //Se ejecuta cuando de enter del input
    const onSubmit = (event) => {
        //evitar que se refresque el navegador
        event.preventDefault();
        const valueReturn =inputValue.trim();
        if (valueReturn.length < 1) return;
        onNewCategory(valueReturn);
        setInputValue('');
    }

    return (
        //aria.label necesario para referenciarlo en la prueba por getByRole
        <form aria-label='form' onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}