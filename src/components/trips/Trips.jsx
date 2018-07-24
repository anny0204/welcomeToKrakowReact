import React from "react";
import "./Trips.scss";
import { Trip } from "../trip/Trip.jsx";

export class Trips extends React.Component {
    render() {
        const { trips } = this.props;
        return <section className="trip">
            <div className="panel-heading text-center">
                <h3>Read more about places of interest in Cracow...</h3>
                <div className="container-fluid">
                    <div className="row">
                        {
                            trips.map(({ id, title, description, imgsrc, text }) => <Trip key={id}
                                title={title} description={description} imgsrc={imgsrc} text={text}/>)
                        }
                    </div>
                </div>
            </div>
        </section>;
    }
}
