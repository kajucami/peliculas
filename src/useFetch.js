import { useEffect, useState } from "react"

const APIEND = "https://omdbapi.com/?apikey=1d7a32f1"

export const useFetch = params => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false)
    const [data, setdata] = useState(null)

    const fetchMovie = url => {
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