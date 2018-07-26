import React from "react";
import "../../../config/menuComponentStyle.scss";

export class About extends React.Component {
    onCloseButtonClick = () => {
        this.props.history.push('/');
    }

    render() {
        return <div className="menu_component">
            <div className="menu_component_header">
                <h3>More about "WelcomeToKrakow"</h3>
                <div className="hide_component_btn" onClick={this.onCloseButtonClick}>
                    <i className="far fa-2x fa-window-close"></i>
                </div>
            </div>
            <div className="menu_comp_body">
                <p>Transport company “WelcomeToCracow" was founded in 2015 and its main goal is providing services in the area of passenger transportation and of organising local excursions for foreign tourists. Thanks to the innovative approach in logistics and management – we have taken a strong leading position among competitors and a reputation as a reliable carrier and partner for thousands of our customers.</p>
                <p>Everyday we offer our comfortable cars and buses for your excursions to the different places of interest.</p>
                <p>A distinctive feature of these routes is the high level of service that we are providing.</p>
            </div>
        </div>
    }
}
