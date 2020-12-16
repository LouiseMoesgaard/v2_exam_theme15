import React from 'react';
import './OrderDisplay.scss';
import CircleButton from '../circleButton/CircleButton';

class OrderDisplay extends React.Component{

    constructor(props){
        super(props);
    }

    totalAmount = (order) => {
        if(order.length > 0){
            return order.map(item => item.amount).reduce((a,b)=> a+b)
        } 
        return 0;
    }

    totalPrice = (order) => {
        if(order.length > 0){
            return order.map(item => item.price).reduce((a,b)=> a+b)
        } 
        return 0;
    }

    render(){
        const { order } = this.props;
        return(
            <div className="OrderDisplay">
                <div className="OrderDisplayGrid">
                    <h2> {this.totalAmount(order)} items</h2>
                    <h2 className="Total"> Total: {this.totalPrice(order)} kr.</h2>
                </div>

                <ul>
                    {
                        order.map((value, index)=>{
                        return  <li key={index}>{value.amount} x {value.name} <span>{value.price} kr.</span></li> 
                        })
                    }
                </ul>

                <hr></hr>

                <div className="totalNrGrid">
                    <p className="listTotalSum">TOTAL</p>
                    <p>{this.totalPrice(order)} kr.</p>
                    
                </div>

                <div className="SubmitGrid">
                    <h2>Continue</h2>
                    <CircleButton link="/payment"></CircleButton>
                </div>
    
            </div>
        )
    }


}

export default OrderDisplay;