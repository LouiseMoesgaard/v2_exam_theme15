import React from 'react';
import NavigationOrder from '../../components/navigationOrder/NavigationOrder';
import CircleButton from '../../components/circleButton/CircleButton';
import arrowpurple from '../../images/arrowpurple.svg';
import OrderDisplay from '../../components/orderDisplay/OrderDisplay';

import './Payment.scss';

class Payment extends React.Component {
    render(){
        return (
            <div className="PaymentForm">
                <NavigationOrder />
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