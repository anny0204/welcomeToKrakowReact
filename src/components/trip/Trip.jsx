import React from "react";
import "./Trip.scss";

export class Trip extends React.Component {
    render() {
        const { title, imgsrc, description, text } = this.props;
        return <div className="col-lg-3 col-md-6 trip_item">
            <img src={imgsrc} className="img-responsive" alt={title} />
            <h4>{title}</h4>
            <span>{description}</span>
            <p>{text}</p>
            <div class="read_btn">
                <a class="btn btn_blue"><i class="fa fa-info"> Read more</i></a>
            </div>
        </div>;
    }
}
