
import type { Datum } from "../interfaces/GifData";



export const getGifs = async(category: string):Promise<Datum[]> => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=z2lDIbIgFCp1Fw1pllHdtKOoRJibxf5k&q=${category}&limit=5`;
    const resp = await fetch(url)
    const {data}  = await resp.json();
    

    const gifs: Datum[] = data.map((img: Datum) => ({
      ...img
        // id: img.id,
        // title: img.title,
        // url: img.images.downsized_medium.url

    }))

  return gifs;
    
  
}
