import { useState } from "react";
import AddCategories from "./components/AddCategories";
import GifGrid from "./components/GifGrid";

const GifExploreApp = () => {

    const [categories, setCategories] = useState([]);
    // categories se guarda en el estado "One Punch, Dragon Ball".
    // setCategories nos permite modificar el estado "categories".
    // Podemos crear más estados para almacenar por ejemplo el texto que el usuario va tipeando en el buscador de Categorías (PD: Puedes ver este estado en <AddCategorie/> con la misma estructura de useState)

    const onAddCategory = (newCategory) => {
        //categories.push('something'); //No uses push, eso es para mutar el estado, evitémoslo por ahora
        
        if(categories.includes(newCategory)) return;
        
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>  
            {/* title */}
            <h1>Gif Explore App</h1>

            {/* Input */}
            <AddCategories 
                onNewCategory={event => onAddCategory(event)}
            />

            {/* PD: Lo que hago es lo siguiente
                    - Mandar la función onNewCategory como una función al componente hijo AddCategories
                    - El componente hijo toma esa función y la devuelve con el valor (en este caso seía "evento", pero puedes llamarlo como sea)
                    - El valor entonces se envía como argumento de la función onAddCategory para agregarla al estado
                    - En resumen, enviamos una función que espera un argumento (evento) que será usado como callback para ejecutar la función de agregar una categoría en este componente padre
            */}
            
            {/* Gifs grid */}
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                         
                    )) 
                }
                
            </ol>
                {/* Gif item */}

        </>
    )
}

export default GifExploreApp