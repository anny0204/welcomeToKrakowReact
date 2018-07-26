import React from "react";
import "./App.scss";
import { Header } from "../header/Header.jsx";
import { Sections } from "../sections/Sections.jsx";
import { Footer } from "../footer/Footer.jsx";
import { About } from "../about/About.jsx";
import { Tours } from "../tours/Tours.jsx";
import { Nav } from "../nav/Nav.jsx";
import { Booking } from "../booking/Booking.jsx";
import { BackgroundHeader } from "../background-header/BackgroundHeader.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export class App extends React.Component {
    render() {
        return <Router>  
                <div>              
                    <Header/>
                    <Sections />
                    <Footer/>
                    <Switch>
                        <Route exact path="/" component={BackgroundHeader} />
                        <Route exact path="/about" component={About} />  
                        <Route exact path="/tours" component={Tours} />
                        <Route exact path="/booking" component={Booking} />    
                    </Switch>
                </div>                
            </Router>;                  
    }
}
