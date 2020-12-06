import React from 'react';
import {Link} from "react-router-dom";

class MenuItems extends React.Component {
    render(){
        return (
            <div>
                <Link to="#">
                    <p>Help?</p>
                </Link>

                <Link to="#">
                    <img alt="logo"></img>
                </Link>
            </div>
        );
        
    }
}
  
  export default MenuItems;