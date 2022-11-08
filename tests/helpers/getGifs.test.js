import { getGifs } from "../../src/helpers/getGifs";

describe('Prueba para el getGifs', () => {
    test('Probar retorno de arreglo de gifs', async () => {
        const gifs = await getGifs('One Punch');
        //console.log(gifs);
        //que retorne un arreglo minimo de 1
        expect(gifs.length).toBeGreaterThan(0);
        //Evalua que el objeto este bien y que cada atributo tiene un String
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

    })

})