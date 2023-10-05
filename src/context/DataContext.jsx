import { createContext, useState } from "react";
import { useFetch } from "../useFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [query, setQuery] = useState("avengers");
    const { error, data} = useFetch(`&s=${query}`);

    return (
        <DataContext.Provider value={{ setQuery, error, data }}>
            { children }
        </DataContext.Provider>
    )
}