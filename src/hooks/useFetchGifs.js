import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [qty, setQty] = useState(0)

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
        setQty(newImages.length);
    }

    useEffect( () => {
        getImages();

    }, [  ])

    return {
        images,
        isLoading,
        qty
    }

}

export default useFetchGifs