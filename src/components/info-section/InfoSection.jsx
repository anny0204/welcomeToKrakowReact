import React from "react";
import "./InfoSection.scss";

export class InfoSection extends React.Component {
    render() {
        return <section className="container">
            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div className="param_block">
                        <i className="fas fa-bus fa-5x"></i>
                        <h3>Wide range of tours available</h3>
                        <p>We organise regular and private tours, for small and large groups</p>
                    </div>
                </div>

                <div className="col-md-12 col-lg-4">
                    <div className="param_block">
                        <i class="far fa-thumbs-up fa-5x"></i>
                        <h3>Experienced staff</h3>
                        <p>We cooperate only with qualified and experienced tour leaders and guides</p>
                    </div>
                </div>

                <div className="col-md-12 col-lg-4">
                    <div className="param_block">
                        <i class="fas fa-star fa-5x"></i>
                        <h3>Best responses</h3>
                        <p>We are a new company among tour operators. But we have already had a lot of good responses</p>
                    </div>
                </div>
            </div>
        </section>;
    }
}
