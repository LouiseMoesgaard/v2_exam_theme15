import React from 'react';
import NavigationOrder from '../../components/navigationOrder/NavigationOrder';
import OrderDisplay from '../../components/orderDisplay/OrderDisplay';

import './Approved.scss';

class Approved extends React.Component {
    render(){
        return (
            <div className="ApprovedOrder">
                <NavigationOrder />
                <h1>Approved...</h1>
                <div className="approvalMessage">
                    <p>Thanks for placing an order! We will prepare your serving for you. Your order number is:</p>
                    <h3>NUMBER</h3>
                    <p>Keep an eye on the screen, and come get your order when your number pops up on the screen!</p>
                </div>
                <div className="statusBar">
                    <div className="barEmpty"></div>
                    <div className="barFull"></div>
                </div>
                <h3 className="cheers">Cheers!</h3>
                <div className="spacer"></div>
            </div>
        );
        
    }
}
  
  export default Approved;