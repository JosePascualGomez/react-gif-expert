import { useState } from 'react'
//como se creo el archivo index.js o archivo barril se puede comentar y en una sola linea sería la importación
//import { AddCategory } from "./components/AddCategory";
//import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid} from "./components/"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (NewCategory) => {

        if (categories.includes(NewCategory)) return;

        // setCategories([...categories, NewCategory] );
        setCategories(cat => [NewCategory, ...cat]);
    }

    return (
        <>
            {/* titulo */}

            {/* const Button = require('@andes/button');
            const { ButtonText } = Button; */}

            <h1>GifExpertApp</h1>
            {/* Input */}
            {/* <AddCategory onNewCategory ={onAddCategory} /> */}
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map(category => {
                    return <GifGrid key={category} category={category} />

                })
            }
        </>

    )
}
