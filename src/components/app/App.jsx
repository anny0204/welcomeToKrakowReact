import React from "react";
import "./App.scss";
import { Header } from "../header/Header.jsx";
import { Sections } from "../sections/Sections.jsx";
import { Footer } from "../footer/Footer.jsx";

export class App extends React.Component {
    render() {
        return <div>
            <Header />
            <Sections />
            <Footer />
        </div>;
    }
}
