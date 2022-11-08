import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

//HAce un mock completo de esa path
jest.mock('../../src/hooks/useFetchGifs');

describe('Prueba de <GifGRid/>', () => {
    const category = 'One Punch';

    test('debe de mostrar el loading ', () => {
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        });

        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        //screen.debug();
    });

    test('debe mostrar item cuando se cargan las imagenes con el uso del useFetchGifs', () => {
        
        const gifs = [
            {
            id: 'ABC',
            title: 'Saitama',
            url : 'https://example/saitama.jpg'
        },
        {
            id: '123',
            title: 'Goku',
            url : 'https://example/goku.jpg'
        }
    ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category} />);
        //evalua que se muestren dos imagenes pues en el mock hay dos items
        expect(screen.getAllByRole('img').length).toBe(2);
        //screen.debug();
    });

})