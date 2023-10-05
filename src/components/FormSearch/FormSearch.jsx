import { useContext, useRef } from "react";
import { useState } from "react";
import { DataContext } from "../../context/DataContext";

const FormSearch = () => {
    const [title, setTitle] = useState("")
    const { setQuery, error } = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(title);
    }

    const debounceRef = useRef()

    const onQueryChanged = (e) => {
        if (debounceRef.current)
            clearTimeout(debounceRef.current)

        debounceRef.current = setTimeout(() => {
            setTitle(e.target.value) 
            setQuery(e.target.value)

        }, 700)
    }

    return (
        <div className=" gridsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-400 rounded-md items-center">
            <h1 className="p-2 text-2xl font-black">Buscador de Peliculas</h1>
            <form className="flex flex-col justify-center items-center " onSubmit={handleSubmit}>
                <input className="w-[60%] p-2 rounded-2xl mb-3 text-center text-stone-400" type="text" placeholder=" Buscar peliculas por titulo"
                    onChange={onQueryChanged} />
                <button className="bg-gray-200 p-4 w-[20%] mb-4 mt-2  text-slate-800 font-semibold hover:bg-slate-800 hover:text-gray-200" type="submit" >Buscar</button>
            </form>
            <div className="flex flex-col justify-center items-center">
                {error && <p className="text-orange-400 bg-black w-[60%] h-[40px] 
                 pt-2 mb-4 justify-center rounded-lg animate-pulse">La pelicula no existe </p>}
            </div>
        </div>
    );
}

export default FormSearch;