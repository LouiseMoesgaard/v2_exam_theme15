import React, {Component} from 'react';
import MenuItems from "./MenuItems";


class NavigationOrder extends Component {
    render(){
        return(
            <nav className="NavigationItems">
               <MenuItems></MenuItems>
            </nav>
        )
    }
}


export default NavigationOrder;