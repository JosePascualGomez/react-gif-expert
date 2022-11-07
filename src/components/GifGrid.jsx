
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

    // useEffect(() => {
    //   getGifs(category)
    //   .then(newImages => setImages(newImages));
    // }, [])
    
    //Se realiza a traves de un hook con el fin de que no se ejecute cada vez que se renderice
    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            
            
            {
                isLoading 
                ?(<h2>Cargando...</h2>)
                :null
            }

{
                isLoading && (<h2>Cargando...</h2>)
            }
            

            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifItem key={img.id}
                            //esparce las properties del img con spread
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
