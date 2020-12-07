import React, {Component} from 'react';
import OrderItems from "./orderItems/OrderItems";
import './NavigationOrder.scss';


class NavigationOrder extends Component {
    render(){
        return(
            <nav className="NavigationOrder">
               <OrderItems></OrderItems>
            </nav>
        )
    }
}


export default NavigationOrder;