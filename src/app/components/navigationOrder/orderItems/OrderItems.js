import React from 'react';
import {Link} from "react-router-dom";
import './OrderItems.scss';

import logo from '../../../images/logo_right.svg'

class OrderItems extends React.Component {
    render(){
        return(
          window.location.pathname == "/help"?
            <div className="OrderItems">
                <Link to="/order">
                    <p>Back (x)</p>
                </Link>

                <Link to="/order">
                    <img alt="logo" src={logo}></img>
                </Link>
            </div>: <div className="OrderItems">
                        <Link to="/help">
                            <p>Help?</p>
                        </Link>

                        <Link to="/order">
                            <img alt="logo" src={logo}></img>
                        </Link>
                    </div>
        );
    }
}
  
  export default OrderItems;