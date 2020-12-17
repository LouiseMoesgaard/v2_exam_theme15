import React from 'react';
import './QueueBox.scss';

class QueueBox extends React.Component {


    detailedOrder = (orderArray) => {
        let returnValue = [];
        orderArray.forEach(element => {
            let current = this.props.storage[this.props.storage.findIndex(item => item.name === element)];
            let alreadyExist = returnValue.findIndex(product=>product.name === element)
            if(alreadyExist !== -1) {
                returnValue[alreadyExist].amount += 1;
            } else {
                current.amount = 1;
                returnValue.push(current);
            }
        });
        return returnValue;
    }

    orderTotal = (order) =>{
        let total =
            order.order.map(product => {
                const index = this.props.storage.findIndex(item => item.name === product);
                return this.props.storage[index].price
            })
            .reduce((a,b)=>a+b);
        return total;
    }

  
    render(){
        const {title, data, detailed} = this.props;
        return (
            <div className="QueueBox">
                <h1>{title}...</h1>
                <div className="orderContainer">
                    {
                        data.map((order, index)=>{
                        return (
                            <div key={index}>
                                <h4>Order {order.id}</h4>
                                {
                                    detailed?
                                    this.detailedOrder(order.order).map((product, i) =>{
                                            return (
                                                <div key={i}>
                                                    <p> {product.amount}x {product.name}</p>
                                                </div>
                                            )
                                        }): null   
                                }
                                {
                                this.props.storage?
                                <h5>Approved: {this.orderTotal(order)} kr.</h5>: null
                                }
                            </div>
                        )})
                    }
                </div>
             </div>
        );
    }
}

export default QueueBox;