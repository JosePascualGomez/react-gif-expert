import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";

describe('Prueba del componente <GifExpertApp/>', () => { 
    
    test('agregar nueva categoria', () => { 
        render( <GifExpertApp /> );
        
        
        screen.debug();

     })
 })