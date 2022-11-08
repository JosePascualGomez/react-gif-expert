
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

const title = 'MiTitulo';
const url ='https://pagina/foto.jpg'


describe('Pruebas del Git Item', () => { 
    test('Hacer match con SnapShop', () => { 
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
     });

     test('mostrar la imagen con el URL y el ALT indicado', () => { 
        render(<GifItem title={title} url={url} />);
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);    
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
      })

      test('Debe mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
      })

 })
