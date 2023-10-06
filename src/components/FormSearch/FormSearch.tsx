import {useState, useContext, useRef, ChangeEvent, FormEvent } from "react";
import { DataContext } from "../../context/DataContext.tsx";

const FormSearch: React.FC = () => {
    const [title, setTitle] = useState<string>(""); 
    const { setQuery, error } = useContext(DataContext);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        setQuery(title);
    }

    const debounceRef = useRef<number | null>(null); 

    const onQueryChanged = (e: ChangeEvent<HTMLInputElement>) => { 
        if (debounceRef.current !== null) 
            clearTimeout(debounceRef.current);

        debounceRef.current = window.setTimeout(() => { 
            setTitle(e.target.value);
            setQuery(e.target.value);
        }, 700);
    }

    return (
        <div className="gridsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-400 rounded-md items-center">
            <h1 className="p-2 text-2xl font-black">Buscador de Peliculas</h1>
            <form className="flex flex-col justify-center items-center " onSubmit={handleSubmit}>
                <input className="w-[60%] p-2 rounded-2xl mb-3 text-center text-stone-400" type="text" placeholder=" Buscar peliculas por titulo"
                    value={title} 
                    onChange={onQueryChanged} />
                <button className="bg-gray-200 p-4 w-[20%] mb-4 mt-2 text-slate-800 font-semibold hover:bg-slate-800 hover:text-gray-200" type="submit">Buscar</button>
            </form>
            <div className="flex flex-col justify-center items-center">
                {error && <p className="text-orange-400 bg-black w-[60%] h-[40px] pt-2 mb-4 justify-center rounded-lg animate-pulse">La pelicula no existe</p>}
            </div>
        </div>
    );
}

export default FormSearch;