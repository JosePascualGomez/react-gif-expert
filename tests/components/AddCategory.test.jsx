import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en <AddCategory/>', () => { 
    test('debe cambiar el valor de la caja de texto ', () => { 
        //Sujeto de Pruebas
        render(<AddCategory onNewCategory={ ()=>{} } />);
        const input = screen.getByRole('textbox');

        //Se simula el onChange cambiando el valor a Saitama
        fireEvent.input(input, { target: { value : 'Saitama' } });
        expect(input.value).toBe('Saitama');
        //screen.debug();
     })

    test('debe llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue='Saitama';

        //Simulación; mocks jest
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value : inputValue } });
        //Se lanza el submit del formulario
        fireEvent.submit(form);
        //screen.debug();

        expect(input.value).toBe('');
        //evalua que la función fue llamada
        expect(onNewCategory).toHaveBeenCalled();
        //evalua que la funicón se llamara 1 vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //evalua que la función haya sido llamada con el valor de la caja de texto
        expect(onNewCategory).toHaveBeenLastCalledWith(inputValue);
     })

     
     test('no debe llamara el onNewCategory si el input está vacio', () => { 
        const onNewCategory = jest.fn();
        render (<AddCategory onNewCategory={onNewCategory} /> );
        const form = screen.getByRole('form');

        fireEvent.submit(form);
        //evaluar que no hay sido llamada la función 
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

     })
 })