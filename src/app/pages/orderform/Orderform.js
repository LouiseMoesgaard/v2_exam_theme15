import React from 'react';
import NavigationOrder from '../../components/navigationOrder/NavigationOrder';
import Product from '../../components/product/Product';
import './OrderForm.scss';

class OrderForm extends React.Component {
    constructor(props){
        super(props);
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
                        return <Product product={value} key={index}></Product>
                    })
                }
            </div>
        );
    }
}
  
  export default OrderForm;