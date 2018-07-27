import React from "react";
import { ConfirmationForm } from "../confirmation-form/ConfirmationForm.jsx";
import "../../../config/menuComponentStyle.scss";
import { TOURS as tours } from "../../../config/tours.jsx";
import "./Booking.scss";

export class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            errorNameDisplay: 'none',
            lastName: "",
            errorLastNameDisplay: 'none',
            placesCount: 1,
            selectedTour: tours[0].name,
            tripDate: "",
            errorTripDateDisplay: 'none',
            phoneNumber: "",
            errorPhoneNumberDisplay: "none",
            isConfirmationFormVisible: false
        }
    }

    onCloseButtonClick = () => {
        this.props.history.push('/');
    }

    inputNameChange(event) {
        const { value } = event.target;
        this.setState({
            name: value,
            errorNameDisplay: 'none'
        })
    }

    inputLastNameChange(event) {
        const { value } = event.target;
        
        this.setState({
            lastName: value,
            errorLastNameDisplay: 'none'
        })
    }

    inputPlacesCountChange(event) {
        let { value } = event.target;
        value = value.replace(/\D+/,"");
        this.setState({
            placesCount: value
        })
    }

    validateInputData = () => {
        let { name,
            errorNameDisplay,
            lastName,
            errorLastNameDisplay,
            placesCount,
            selectedTour,
            tripDate,
            errorTripDateDisplay,
            phoneNumber,
            errorPhoneNumberDisplay
        } = this.state;
        errorNameDisplay = name === "" ? 'block' : 'none';
        errorLastNameDisplay = lastName === "" ? 'block' : 'none';
        errorTripDateDisplay = tripDate === "" ? 'block' : 'none';
        errorPhoneNumberDisplay = phoneNumber === "" ? 'block' : 'none';
        this.setState({
            errorNameDisplay: errorNameDisplay,
            errorLastNameDisplay: errorLastNameDisplay,
            errorTripDateDisplay: errorTripDateDisplay,
            errorPhoneNumberDisplay: errorPhoneNumberDisplay
        })

        if (name === "" || lastName === "")
            return false;
        return true;
    }

    changeSelectedTour(event) {
        const { value } = event.target;
        this.setState({
            selectedTour: value
        })
    }

    onChangeTripDate(event) {
        const { value } = event.target;
        this.setState({
            tripDate: value,
            errorTripDateDisplay: 'none'
        })
    }

    onPhoneNumberChange() {
        const { value } = event.target;
        this.setState({
            phoneNumber: value,
            errorPhoneNumberDisplay: 'none'
        })
    }

    sendBooking(event) {
        event.preventDefault();
        const isFormValid = this.validateInputData();
        if (isFormValid) {
            this.setState({
                isConfirmationFormVisible: true
            });
        }
    }

    render() {
        const { 
            errorNameDisplay,
            name,
            errorLastNameDisplay,
            lastName,
            placesCount,
            selectedTour,
            errorTripDateDisplay,
            tripDate,
            phoneNumber,
            errorPhoneNumberDisplay,
            isConfirmationFormVisible
        } = this.state;
        if (isConfirmationFormVisible) {
            return (
                <ConfirmationForm name={name}
                lastName={lastName}
                placesCount={placesCount}
                selectedTour={selectedTour}
                tripDate={tripDate}
                phoneNumber={phoneNumber}/>
            )
        } else {
            return <div className="menu_component">
                <div className="menu_component_header">
                    <h3>Our tours</h3>
                    <div className="hide_component_btn" onClick={this.onCloseButtonClick}>
                        <i className="far fa-2x fa-window-close"></i>
                    </div>
                </div>
        
                <div className="menu_component_body">
                    <form className="form-horizontal booking_form" name="bookingForm">
                    <div className="container-fluid">
                        <div className="row form-group">
                            <label for="inputName" className="col-md-4">First name</label>
                            <div className="col-md-8">
                                <input type="text" 
                                    name="nameInput"
                                    className="form-control"
                                    value={name}
                                    required
                                    onChange={(e) => this.inputNameChange(e)}/>
                                <small className="error" style={{display:errorNameDisplay}}>Name cannot be empty</small>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputLastName" className="col-sm-4 control-label">Last name</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="lastName"
                                    className="form-control"
                                    value={lastName}
                                    required
                                    onChange={(e) => this.inputLastNameChange(e)} />
                                <small className="error" style={{display:errorLastNameDisplay}}>Last name cannot be empty</small>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="placesCount" className="col-sm-4 control-label">Count of places</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="placesCount"
                                    className="form-control"
                                    value = {placesCount}
                                    required
                                    onChange={(e) => this.inputPlacesCountChange(e)}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="phoneNumber" className="col-sm-4 control-label">Phone number</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    name="phoneNumber"
                                    className="form-control"
                                    required
                                    value={phoneNumber}
                                    onChange={(e) => this.onPhoneNumberChange(e)}/>
                                <small className="error" style={{display:errorPhoneNumberDisplay}}>Phone number cannot be empty</small>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="tour" className="col-sm-4 control-label">Choose a tour</label>
                            <div className="col-sm-8">
                                <select name="tour"
                                    className="form-control"
                                    required
                                    value={selectedTour}
                                    onChange={(e) => this.changeSelectedTour(e)}>
                                {
                                    tours.map(({ id, name }) => <option key={id}>{name}</option>)
                                }
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="dateTour" className="col-sm-4 control-label">Choose date</label>
                            <div className="col-sm-8">
                                <input type="date"
                                    name="dateTour"
                                    className="form-control"
                                    required
                                    value={tripDate}
                                    onChange={(e) => this.onChangeTripDate(e)}/>
                                <small className="error" style={{display:errorTripDateDisplay}}>Trip date cannot be empty</small>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-md-4 col-md-4">
                                <button type="submit"
                                    className="btn btn-primary btn_book"
                                    onClick={(e) => this.sendBooking(e)}>Book</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>;
        }
    }
}
