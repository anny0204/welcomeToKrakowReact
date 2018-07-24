import ReactDOM from "react-dom";
import React from "react";
import { App } from "./components/app/App.jsx";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
    <App />,
    document.getElementById("mountPoint")
);
