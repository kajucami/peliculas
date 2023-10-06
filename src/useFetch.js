"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFetch = void 0;
const react_1 = require("react");
const APIEND = "https://omdbapi.com/?apikey=1d7a32f1";
const useFetch = params => {
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(false);
    const [data, setdata] = (0, react_1.useState)(null);
    const fetchMovie = url => {
        setIsLoading(true);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
            if (respuestaJson.Response === "True") {
                setdata(respuestaJson.Search || respuestaJson);
                setError(false);
            }
            else {
                setError(true);
            }
            setIsLoading(false);
        }).catch(error => { console.log(error); });
    };
    (0, react_1.useEffect)(() => {
        fetchMovie(`${APIEND}${params}`);
    }, [params]);
    return { isLoading, error, data };
};
exports.useFetch = useFetch;
