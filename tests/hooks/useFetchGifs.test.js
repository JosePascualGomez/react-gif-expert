import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => { 
   test('debe regresar el estado inicial', () => { 
        const {result} =renderHook(() => useFetchGifs('One Punch'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    //Prueba asyncrona de un hook
    test('debe retornar un arreglo de imagenes y isLoading en false', async () => { 
        const {result} =renderHook(() => useFetchGifs('One Punch'));
        //Espera hasta que se ejecuta lo que estapor dentro
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });
});