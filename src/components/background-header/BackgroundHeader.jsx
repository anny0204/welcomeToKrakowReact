import React from "react";
import "./BackgroundHeader.scss";

export class BackgroundHeader extends React.Component {
    render() {
        return <div className="container background_header">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div class="title_block" id="titleBlock">
                        <h1>Find and book your trip</h1>
                        <p>You have to visit Auschwitz!</p>
                        <p>You have to see the Salt Mine in Wieliczka!</p>
                        {/* <Link href="/booking" class="my_btn btn_md btn" ng-click="showHideTitleBlock()">Book now</Link> */}
                    </div>
                </div>
            </div>
        </div>
    }
}
