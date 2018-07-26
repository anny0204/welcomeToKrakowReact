import React from "react";
import "./App.scss";
import { Header } from "../header/Header.jsx";
import { Sections } from "../sections/Sections.jsx";
import { Footer } from "../footer/Footer.jsx";
// import { About } from "../about/About.jsx";
// import { Tours } from "../tours/Tours.jsx";
// import { Booking } from "../booking/Booking.jsx";
// import { BackgroundHeader } from "../background-header/BackgroundHeader.jsx";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export class App extends React.Component {
    render() {
        return <div>              
            <Header/>
            <Sections />
            <Footer/>
        </div>;                
    }
}
