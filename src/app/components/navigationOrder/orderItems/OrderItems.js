import React from 'react';
import {Link} from "react-router-dom";

import './OrderItems.scss';

import logo from '../../../images/logo_right.svg'

class OrderItems extends React.Component {
    render(){
        return (
            <div className="OrderItems">
                <Link to="#">
                    <p>Help?</p>
                </Link>

                <Link to="#">
                    <img alt="logo" src={logo}></img>
                </Link>
            </div>
        );
        
    }
}
  
  export default OrderItems;