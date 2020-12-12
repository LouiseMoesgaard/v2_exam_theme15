import React from 'react';
import NavigationOrder from '../../components/navigationOrder/NavigationOrder';
import Product from '../../components/product/Product';
import OTHERPRODUCTS from '../../constants/OtherProducts';
import OrderDisplay from '../../components/orderDisplay/OrderDisplay';
import './OrderForm.scss';

class OrderForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            order: []
        }
    }

    getCount = (product, count)=>{
        let orderCopy = [...this.state.order]
        
        let isProduct = orderCopy.findIndex(item => item.name === product.name);
        
        if(isProduct !== -1){
            orderCopy[isProduct].amount = count;
            if(orderCopy[isProduct].amount === 0){
                orderCopy.splice(isProduct, 1);
            }
            
        } else{
            if(count > 0){
                orderCopy.push({
                    name: product.name,
                    amount: count,
                    price: product.price
                })
            }
        }
        this.setState({
            order: orderCopy
        })
    }

    render(){
        const { storage } = this.props;
        return (
            <div className="OrderForm">
                <NavigationOrder></NavigationOrder>

                <h1>Beers...</h1>
                <h2>30 kr.</h2>
                {
                    storage.map((value, index)=>{
                        return <Product product={value} onCountChange={this.getCount} key={index}></Product>
                    })
                }

                <h1>Ciders...</h1>
                <h2>40 kr.</h2>

                {
                    OTHERPRODUCTS.filter((product)=> product.type == "cider").map((value, index)=>{
                        return <Product product={value} onCountChange={this.getCount} key={index}></Product>
                    })
                }

                <h1>Shots...</h1>
                <h2>15 kr.</h2>

                {
                    OTHERPRODUCTS.filter((product)=> product.type == "shots").map((value, index)=>{
                        return <Product product={value} onCountChange={this.getCount} key={index}></Product>
                    })
                }

                
                <h1>Snacks...</h1>
                <h2>25 kr.</h2>

                {
                    OTHERPRODUCTS.filter((product)=> product.type == "snacks").map((value, index)=>{
                        return <Product product={value} onCountChange={this.getCount} key={index}></Product>
                    })
                }

                <OrderDisplay order={this.state.order}></OrderDisplay>
            </div>
        );
    }
}
  
  export default OrderForm;