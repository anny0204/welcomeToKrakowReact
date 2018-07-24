import React from "react";
import "./Nav.scss";

export class Nav extends React.Component {
    render() {
        return <header>
            <nav className="menu_fixed navbar navbar-inverse" role="navigetion">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a href="index.html" class="navbar-brand">
                            <img src="../images/logo1.png" alt="Welcome to Krakow" id="wtkImg"/>
                        </a>  
                        <span class="phone_number"><i class="fas fa-mobile-alt"></i> +48 570 042 478</span>
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#topMenu">
                            <i class="fas fa-bars"></i>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="topMenu">
                    <ul class="menu" id="mainMenu">
                                <li><a href="/">About</a></li>
                                <li><a href="/">Tours</a></li>
                                <li><a href="/">Booking</a></li>
                                <li><a href="/">Photos</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                    </div>
                </div>
            </nav>
        </header>;
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