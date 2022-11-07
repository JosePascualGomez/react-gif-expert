import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState ([]);
    const [isLoading, setIsLoading] = useState(true);
    //hook de useEffect
    //El último parámetro se deja vacio para que se ejecute solo la primera vez que se renderiza el componente
    /* useEffect(() => {
        getGifs(category)
            .then(newImages => setImages(newImages));
    }, []); */

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, [])


    return {
        images: images,
        isLoading
    }
}
