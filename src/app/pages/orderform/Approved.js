import React from 'react';
import NavigationOrder from '../../components/navigationOrder/NavigationOrder';
import Order from '../../services/Order';

import './Approved.scss';

class Approved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        Order.sendOrder(props.order).then(data=>{
            if(data.status === 200) {
                this.setState({orderNumber: data.id})
            }
        });
    }
    render(){
        return (
            <div className="ApprovedOrder">
                <NavigationOrder />
                <div className="p1"></div>
                <div className="p2"></div>
                <div className="p3"></div>
                <div className="p4"></div>
                <div className="p5"></div>
                <h1>Approved...</h1>
                <div className="approvalMessage">
                    <p>Thanks for placing an order! We will prepare your serving for you. Your order number is:</p>
                    <h3>Order Number {this.state.orderNumber}</h3>
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