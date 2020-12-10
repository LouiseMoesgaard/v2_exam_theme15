import React from 'react';
import NavigationOrder from '../../components/navigationOrder/NavigationOrder';
import Product from '../../components/product/Product';
import OTHERPRODUCTS from '../../constants/OtherProducts';

import './OrderForm.scss';

class OrderForm extends React.Component {
    constructor(props){
        super(props);
    }

    getCount = (product, count)=>{
        console.log(product,count);
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
            </div>
        );
    }
}
  
  export default OrderForm;