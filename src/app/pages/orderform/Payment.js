import React from 'react';
import NavigationOrder from '../../components/navigationOrder/NavigationOrder';
import CircleButton from '../../components/circleButton/CircleButton';

import './Payment.scss';

class Payment extends React.Component {
    //get the summed price of entire order
    totalPrice = () => {
        if(this.props.order.length > 0){
            return this.props.order.map(item => item.price*item.amount).reduce((a,b)=> a+b)
        } 
        return 0;
    }
    //get total number of items in order
    totalAmount = () => {
        if(this.props.order.length > 0){
            return this.props.order.map(item => item.amount).reduce((a,b)=> a+b)
        } 
        return 0;
    }

    render(){
        return (
            <div className="PaymentForm">
                <NavigationOrder />
                <h1>CHART...</h1>
                <div>
                    <span>{this.totalAmount()} items</span>
                    <span>Total: {this.totalPrice()} kr,-</span>
                </div>
                <div className="p1"></div>
                <div className="p2"></div>
                <div className="p3"></div>
                <div className="p4"></div>
                <div className="mp">
                    <div className="payImg"></div>
                    <div className="payLeft">
                        <p>Mobilepay</p>
                        <input type="numbers" placeholder="Phone number" className="phonenumber"></input>
                    </div>
                    <div className="payRight">
                        <CircleButton link="/approved"></CircleButton>
                    </div>
                </div>
                <div className="ap">
                    <div className="payImg"></div>
                    <div className="payLeft">
                        <p>Apple pay</p>
                    </div>
                    <div className="payRight">
                        <CircleButton link="/approved"></CircleButton>
                    </div>
                </div>
                <div className="gp">
                    <div className="payImg"></div>
                    <div className="payLeft">
                        <p>Google pay</p>
                    </div>
                    <div className="payRight">
                        <CircleButton link="/approved"></CircleButton>
                    </div>
                </div>
                <div className="ccp">
                    <div className="payImg"></div>
                    <div className="payLeft">
                        <p>Card</p>
                        <input type="numbers" placeholder="Card number" className="cardnumber"></input>
                        <input type="numbers" placeholder="Expiration date" className="expdate"></input>
                        <input type="numbers" placeholder="CVC" className="cvcnumber"></input>
                    </div>
                    <div className="payRight">
                        <CircleButton link="/approved"></CircleButton>
                    </div>
                </div>
            </div>
        );
        
    }
}
  
  export default Payment;