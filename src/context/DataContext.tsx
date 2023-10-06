import React, { createContext, ReactNode, useState } from "react";
import { useFetch } from "../useFetch.ts";

export interface Pelicula {
    title: string;
    year: string;
    poster: string;
  }
interface DataContextProps {
  setQuery: (query: string) => void;
  error: boolean ;
  data: Pelicula[] | null; 
}

export const DataContext = createContext<DataContextProps | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [query, setQuery] = useState("avengers");
  const {  data } = useFetch(`&s=${query}`);
  const [error,setError] = useState<boolean>(false)

  return (
    <DataContext.Provider value={{ setQuery, error, data }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;