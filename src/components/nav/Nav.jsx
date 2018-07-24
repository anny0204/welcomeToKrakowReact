import React from "react";
import "./Nav.scss";

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
      <header>
        <nav className="navbar navbar-expand-md navbar-dark menu_fixed">
          <a className="navbar-brand" href="#">
              <img src="../images/logo1.png" alt="Welcome to Krakow" id="wtkImg"/>
          </a>
          <span className="phone_number"><i className="fas fa-mobile-alt"></i> +48 570 042 478</span>
          <button onClick={ this.changeCollapse } className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`navbar-collapse d-flex justify-content-end ${this.state.collapse && "collapse"}`} id="topMenu">
            <ul className="navbar-nav menu">
              <li className="nav-item active">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tours</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Booking</a>
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
      </header>
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