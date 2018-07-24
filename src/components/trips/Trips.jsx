import React from "react";
import "./Trips.scss";

export class Trips extends React.Component {
    render() {
        const { trips } = this.props;
        return <section className="trip">
            <div className="panel-heading text-center">
                <h3>Read more about places of interest in Cracow...</h3>
                <div className="container-fluid">
                </div>
            </div>
        </section>;
    }
}
