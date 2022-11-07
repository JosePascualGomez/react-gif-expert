import { useState } from 'react'
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (value) => {
        // setCategories([...categories, 'Valorant'] );
        setCategories(cat => [value, ...cat]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory setCategories={setCategories} />
            {/* Listado de gif */}
            <ol>
                {
                    categories.map(categoria => {
                        return (

                            <li key={categoria}>{categoria}</li>
                        )
                    })
                }
            </ol>

            {/* gif Item */}

        </>

    )
}
