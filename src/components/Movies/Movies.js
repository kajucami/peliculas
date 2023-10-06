"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const DataContext_1 = require("../../context/DataContext");
const IteMovies_1 = __importDefault(require("../IteMovies/IteMovies"));
const Movies = () => {
    const { data } = (0, react_1.useContext)(DataContext_1.DataContext);
    return (React.createElement("div", { className: "w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-slate-800 rounded-2xl gap-2 pt-6" }, data &&
        data.map((item) => (React.createElement(IteMovies_1.default, { key: item.imdbID, title: item.Title, year: item.Year, poster: item.Poster })))));
};
exports.default = Movies;
