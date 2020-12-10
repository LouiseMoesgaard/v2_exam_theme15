import React from 'react';
import {Link} from "react-router-dom";

import './SideNavDash.scss';

class SideNavDash extends React.Component {
    render() {
        return (
        <div className="SideNavItems">
            <div className="linksContainer">
            <Link to="#">
                <p>Overview</p>
            </Link>
            <Link to="#">
                <p>Statistics</p>
            </Link>
            <Link to="#">
                <p>Problems</p>
            </Link>
            </div>
        </div>
       );
    }
}

export default SideNavDash;    
