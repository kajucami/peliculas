"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("react");
const DataContext_1 = require("../../context/DataContext");
const FormSearch = () => {
    const [title, setTitle] = (0, react_2.useState)(""); // Specify the type for title
    const { setQuery, error } = (0, react_1.useContext)(DataContext_1.DataContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(title);
    };
    const debounceRef = (0, react_1.useRef)(null); // Specify the type for debounceRef
    const onQueryChanged = (e) => {
        if (debounceRef.current !== null) // Check for null instead of undefined
            clearTimeout(debounceRef.current);
        debounceRef.current = window.setTimeout(() => {
            setTitle(e.target.value);
            setQuery(e.target.value);
        }, 700);
    };
    return (React.createElement("div", { className: "gridsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-400 rounded-md items-center" },
        React.createElement("h1", { className: "p-2 text-2xl font-black" }, "Buscador de Peliculas"),
        React.createElement("form", { className: "flex flex-col justify-center items-center ", onSubmit: handleSubmit },
            React.createElement("input", { className: "w-[60%] p-2 rounded-2xl mb-3 text-center text-stone-400", type: "text", placeholder: " Buscar peliculas por titulo", value: title, onChange: onQueryChanged }),
            React.createElement("button", { className: "bg-gray-200 p-4 w-[20%] mb-4 mt-2 text-slate-800 font-semibold hover:bg-slate-800 hover:text-gray-200", type: "submit" }, "Buscar")),
        React.createElement("div", { className: "flex flex-col justify-center items-center" }, error && React.createElement("p", { className: "text-orange-400 bg-black w-[60%] h-[40px] pt-2 mb-4 justify-center rounded-lg animate-pulse" }, "La pelicula no existe"))));
};
exports.default = FormSearch;
