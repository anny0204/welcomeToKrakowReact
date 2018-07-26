import React from "react";
// import { Link } from "react-router-dom";
import "./Nav.scss";

import { About } from "../about/About.jsx";
import { Tours } from "../tours/Tours.jsx";
import { Booking } from "../booking/Booking.jsx";
import { BackgroundHeader } from "../background-header/BackgroundHeader.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapse: true
    };
  }
  changeCollapse = () => {
    const {collapse} = this.state;
    this.setState({
      collapse: !collapse
    })
  }
  render() {
    return (
      <Router>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark menu_fixed">
          <a className="navbar-brand" href="#">
              <img src="../images/logo1.png" alt="Welcome to Krakow" id="wtkImg"/>
          </a>
          <span className="phone_number"><i className="fas fa-mobile-alt"></i> +48 570 042 478</span>
          <button onClick={ this.changeCollapse } className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`navbar-collapse d-flex justify-content-end ${this.state.collapse && "collapsed"}`} id="topMenu">
            <ul className="navbar-nav menu">
              <li className="nav-item active">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/tours" className="nav-link">Tours</Link>
              </li>
              <li className="nav-item">
                <Link to="/booking" className="nav-link" href="#">Booking</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Photos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={BackgroundHeader} />
          <Route exact path="/about" component={About} />  
          <Route exact path="/tours" component={Tours} />
          <Route exact path="/booking" component={Booking} />    
      </Switch>

      </header>
      </Router>
    );
  }
}


{/* <div className="container">
                    <div className="row">
                        <div class="navbar-header">
                            <button class="navbar-toggle collapsed menu_btn" data-toggle="collapse" data-target="#topMenu">
                                <span>            
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </span>
                            </button>
                            <a href="index.html" class="navbar-brand">
                                <img src="../images/logo1.png" alt="Welcome to Krakow" id="wtkImg"/>
                            </a>                           
                            <span class="phone_number"><i class="glyphicon glyphicon-phone"></i> +48 570 042 478</span>
                        </div>
                        <div class="collapse navbar-collapse navbar-right" id="topMenu">
                            <ul class="menu" id="mainMenu">
                                <li><a href="/">About</a></li>
                                <li><a href="/">Tours</a></li>
                                <li><a href="/">Booking</a></li>
                                <li><a href="/">Photos</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div> */}