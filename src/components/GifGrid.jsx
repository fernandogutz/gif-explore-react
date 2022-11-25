import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';


const GifGrid = ({category}) => {
    
    const {images, isLoading, qty} = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            {
                qty == 0 ? (<p>No se han encontrado Gifs, prueba con otra búsqueda</p>) : null
            }

            <div className='card-grid'>

                {
                    images.map(image => (
                        <GifItem 
                            key={image.id}
                            { ...image }
                        />
                    ))
                    
                }
            </div>
        
        </>
    )
}
export default GifGrid