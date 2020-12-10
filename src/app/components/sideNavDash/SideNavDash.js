import React from 'react';
import {Link} from "react-router-dom";

import './SideNavDash.scss';

class SideNavDash extends React.Component {
    render() {
        return (
        <div className="SideNavItems">
            <div className="linksContainer">
            <Link to="/dashboard">
                <p>Orders</p>
            </Link>
            <Link to="/stats">
                <p>Overview</p>
            </Link>
            <Link to="#">
                <p>Problems</p>
            </Link>
            </div>
            <div className="markup"></div>
        </div>
       );
    }
}

export default SideNavDash;    
