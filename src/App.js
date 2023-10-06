"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FormSearch_1 = __importDefault(require("./components/FormSearch/FormSearch"));
require("./App.css");
const Movies_1 = __importDefault(require("./components/Movies/Movies"));
require("bulma/css/bulma.min.css");
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(FormSearch_1.default, null),
        React.createElement(Movies_1.default, null)));
}
exports.default = App;
