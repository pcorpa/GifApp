import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs'
import type { Datum } from '../interfaces';

interface UseFetchApiReturnProps{
    gifs: Datum[];
    isLoading: boolean;
}



export const useFetchApi = (title: string ):UseFetchApiReturnProps => {
     const [gifs, setGifs] = useState<Datum[]>([]);
     const [isLoading, setIsLoading] = useState<boolean>(true)
    
    
      useEffect(() => {
        getGifs(title).then((newImages) => {setGifs(newImages); setIsLoading(false)});
      }, []);

  return {gifs, isLoading}
}
