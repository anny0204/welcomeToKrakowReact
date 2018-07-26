import React from "react";
import "../../../config/menuComponentStyle.scss";

export class Tours extends React.Component {
    onCloseButtonClick = () => {
        this.props.history.push('/');
    }

    render() {
        return <div className="menu_component">
            <div className="menu_component_header">
                <h3>Our tours</h3>
                <div className="hide_component_btn" onClick={this.onCloseButtonClick}>
                    <i className="far fa-2x fa-window-close"></i>
                </div>
            </div>
            <div class="menu_component_body">

                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="../../../images/bochnia_carusel0.jpg" alt="Krakow-Bochnia"/>
                            <div className="carousel-caption"><h3>Krakow-Bochnia</h3></div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../../../images/velichka_carusel1.jpg" alt="Krakow-Wielichka"/>
                            <div className="carousel-caption"><h3>Krakow-Wielichka</h3></div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../../../images/aushvitz_carusel2.jpg" alt="Krakow-Aushwich"/>
                            <div className="carousel-caption"><h3>Krakow-Aushwic</h3></div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../../../images/zakopane_carusel3.jpg" alt="Krakow-Zakopane"/>
                            <div className="carousel-caption"><h3>Krakow-Zakopane</h3></div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../../../images/terma_carusel4.jpg" alt="Krakow-Bialka Tatrzanska"/>
                            <div className="carousel-caption"><h3>Krakow-Bialka Tatrzanska</h3></div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../../../images/airport_carusel5.jpg" alt="Krakow-Airport"/>
                            <div className="carousel-caption"><h3>Krakow-Airport</h3></div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            
                {/* <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators"> 
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="5"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="../../../images/bochnia_carusel0.jpg" />
                            <div className="carousel-caption">
                                <h3>Krakow-Bochnia</h3>
                            </div>
                        </div>
                        <div className="item">
                            <img src="../../../images/velichka_carusel1.jpg" />
                            <div className="carousel-caption">
                                <h3>Krakow-Wielichka</h3>
                            </div>
                        </div>
                        <div className="item">
                            <img src="../../../images/aushvitz_carusel2.jpg" />
                            <div className="carousel-caption">
                                <h3>Krakow-Aushwich</h3>
                            </div>
                        </div>
                        <div className="item">
                            <img src="../../../images/zakopane_carusel3.jpg" />
                            <div className="carousel-caption">
                                <h3>Krakow-Zakopane</h3>
                            </div>
                        </div>
                        <div className="item">
                            <img src="../../../images/terma_carusel4.jpg" />
                            <div className="carousel-caption">
                                <h3>Krakow-Bialka Tatrzanska</h3>
                            </div>
                        </div>
                        <div className="item">
                            <img src="../../../images/airport_carusel5.jpg" />
                            <div className="carousel-caption">
                                <h3>Krakow-Airport</h3>
                            </div>
                        </div>
                    </div>

                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                    </a>

                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </a>

                </div> */}
            </div>
        </div>
    }
}
