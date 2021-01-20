import React from 'react';
import NavigationOrder from '../../components/navigationOrder/NavigationOrder';
import Product from '../../components/product/Product';
import OrderDisplay from '../../components/orderDisplay/OrderDisplay';
import EventHandler from "../../EventHandler";
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
        if(orderCopy.length === 0){
            if(count > 0){
                orderCopy.push({
                    name: product.name,
                    amount: count,
                    price: product.price,
                    type: product.type
                })
            }
        }
        else if(isProduct !== -1){
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
        EventHandler.dispatch("orderUp", orderCopy);
    }

    beerOnTap = (beer) => {
        return !this.props.taps.some(tap =>{
            return tap.beer === beer;
        })
    }

    render(){
        const { storage } = this.props;
        return (
            <div className="OrderForm">
                <NavigationOrder></NavigationOrder>

                <div className="p1"></div>
                <div className="p2"></div>
                <div className="p3"></div>
                <div className="p4"></div>
                <div className="p5"></div>
                <div className="p6"></div>
                <div className="p7"></div>
                <div className="p8"></div>
                <div className="p9"></div>

                <h1>Beers...</h1>
                <h2>30 kr.</h2>

                {
                    storage.filter((product)=> product.type === "beer").map((value, index)=>{
                        return <Product product={value} onCountChange={this.getCount} key={index} onTap={this.beerOnTap(value.name)}></Product>
                    })
                }

                <h1>Ciders...</h1>
                <h2>40 kr.</h2>

                {
                    storage.filter((product)=> product.type === "cider").map((value, index)=>{
                        return <Product product={value} onCountChange={this.getCount} key={index}></Product>
                    })
                }

                <h1>Shots...</h1>
                <h2>15 kr.</h2>

                {
                    storage.filter((product)=> product.type === "shots").map((value, index)=>{
                        return <Product product={value} onCountChange={this.getCount} key={index}></Product>
                    })
                }

                
                <h1>Snacks...</h1>
                <h2>25 kr.</h2>

                {
                    storage.filter((product)=> product.type === "snacks").map((value, index)=>{
                        return <Product product={value} onCountChange={this.getCount} key={index}></Product>
                    })
                }

                {
                 this.state.order?   
                <OrderDisplay order={this.state.order}></OrderDisplay>: null
                }
            </div>
        );
    }
}
  
  export default OrderForm;