import React from 'react';
import Timer from '../timer/Timer';
import {Link} from "react-router-dom";

import './DashItems.scss';

import logo from '../../../images/logo_right.svg'

class DashItems extends React.Component {
    render() {
        return (
        <div className="DashItems">
             <Link to="#">
                <img alt="logo" src={logo}></img>
            </Link>
            <p>Today's sales: 1000 kr.| <Timer /></p>   
       </div>
       );
    }
}

export default DashItems;    
