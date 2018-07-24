import React from "react";
import { Nav } from "../nav/Nav.jsx";
import { HeaderBackground } from "../header-background/HeaderBackground.jsx";

export class Header extends React.Component {
    render() {
        return <div>
            <Nav />
            <HeaderBackground />
        </div>;
    }
}
