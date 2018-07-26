import React from "react";
import { Link } from "react-router-dom";
import "../../../config/buttons.scss";
import "./BackgroundHeader.scss";

export class BackgroundHeader extends React.Component {
    render() {
        return <div className="container-fluid background_header">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 title_block">
                    <h1>Find and book your trip</h1>
                    <p>You have to visit Auschwitz!</p>
                    <p>You have to see the Salt Mine in Wieliczka!</p>
                    <Link to="/booking" class="booking_button">Book now</Link>
                </div>
            </div>
        </div>
    }
}
