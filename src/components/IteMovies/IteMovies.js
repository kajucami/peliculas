"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const icono_pelicula_png_1 = __importDefault(require("../../assets/icono_pelicula.png"));
const IteMovies = ({ title, year, poster }) => {
    const imagen = poster === 'N/A' ? icono_pelicula_png_1.default : poster;
    return (react_1.default.createElement("div", { className: 'bg-slate-800 sw-[300px] gap-6 rounded-xl shadow-sm shadow-slate-100 hover:scale-105 flex flex-col justify-center items-center' },
        react_1.default.createElement("p", { className: 'text-xl text-slate-200 font-bold mt-4 p-2' }, title),
        react_1.default.createElement("img", { className: 'w-[300px] h-[400px]', src: imagen, alt: title }),
        react_1.default.createElement("p", { className: 'font-semibold text-stone-400 mb-4' }, year)));
};
exports.default = IteMovies;
