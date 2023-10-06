import { useEffect, useState } from "react"
import { Pelicula } from "./context/DataContext";

const APIEND = "https://omdbapi.com/?apikey=1d7a32f1"

export const useFetch = (params: string) => {
    
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false)
    const [data, setdata] = useState<Pelicula | null>(null)

    const fetchMovie = (url: string) => {
        setIsLoading(true);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                if (respuestaJson.Response === "True") {
                    setdata(respuestaJson.Search || respuestaJson);
                    setError(false);
                } else {
                    setError(true);
                }
                setIsLoading(false);
            }).catch(error => {console.log(error);})
    }

    useEffect(() => {
        fetchMovie(`${APIEND}${params}`)
    }, [params])
    
    return {isLoading, error, data}

}