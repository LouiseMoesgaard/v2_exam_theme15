import React from 'react';
import './Payment.scss';
import NavigationOrder from '../../components/navigationOrder/NavigationOrder';

class Payment extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Payment">
                <NavigationOrder></NavigationOrder>
                <h1> Card...</h1>
                <PaymentDetail></PaymentDetail>
            </div>
            
        );

    }


}

export default Payment;