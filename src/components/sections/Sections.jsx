import React from "react";
import { InfoSection } from "../info-section/InfoSection.jsx";
import { WorkSection } from "../work-section/WorkSection.jsx";
import { Trips } from "../trips/Trips.jsx";
import { TRIPS as trips } from "../../../config/trips.jsx";

import { Tours } from "../tours/Tours.jsx";

export class Sections extends React.Component {
    render() {
        return <div>
            {/* <Tours /> */}
            <InfoSection />
            <WorkSection />
            <Trips trips={trips}/>
        </div>;
    }
}
