import { useEffect, useState } from 'react'
import type { GifData } from '../interfaces'
import { getGifs } from '../helpers/GetGifs'

interface UseFetchApiReturnProps{
    gifs: GifData[];
    isLoading: boolean;
}



export const useFetchApi = (title: string ):UseFetchApiReturnProps => {
     const [gifs, setGifs] = useState<GifData[]>([]);
     const [isLoading, setIsLoading] = useState<boolean>(true)
    
    
      useEffect(() => {
        getGifs(title).then((newImages) => {setGifs(newImages); setIsLoading(false)});
      }, []);

  return {gifs, isLoading}
}
