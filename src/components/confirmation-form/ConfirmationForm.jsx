import React from "react";
import "../../../config/menuComponentStyle.scss";

export class ConfirmationForm extends React.Component {
    onCloseButtonClick = () => {
        this.props.history.push('/');
    }

    render() {
        const {
            id,
            name,
            lastName,
            placesCount,
            selectedTour,
            tripDate,
            phoneNumber} = this.props;
        return <div className="menu_component">
            <div className="menu_component_header">
                <h3>Confirm your trip...</h3>
                <div className="hide_component_btn" onClick={this.onCloseButtonClick}>
                    <i className="far fa-2x fa-window-close"></i>
                </div>
            </div>
            <div className="menu_comp_body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="offset-md-2 col-md-4">Your trip:</div>
                        <div className="col-md-4">{selectedTour}</div>
                    </div>
                    <div className="row">
                        <div className="offset-md-2 col-md-4">First and last name:</div>
                        <div className="col-md-4">{name} {lastName}</div>
                    </div>
                    <div className="row">
                        <div className="offset-md-2 col-md-4">Phone number:</div>
                        <div className="col-md-4">{phoneNumber}</div>
                    </div>
                </div>
            </div>
        </div>
    }
}
