import React from 'react';
import './Product.scss';
import PRODUCTIMG from '../../constants/ProductImg';

class Product extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            readMoreOpen: false,
            count: 0
        }
    }

    decrement(state, props){
        let newCount = state.count-1;

        if(newCount < 0){
            newCount = 0;
        }
        props.onCountChange(props.product, newCount);
        return{
            count: newCount
        }
    }

    increment(state, amount, props){
        let newCount = state.count+1;

        if(newCount > amount){
            newCount = amount;
        }

        props.onCountChange(props.product, newCount);
        return{
            count: newCount
        }
    }

    render(){
        const { product } = this.props;
        return (
            <div className={`Product ${this.state.readMoreOpen ? "desc" : ""}`}>
                <img alt="The product" src={PRODUCTIMG[product.name]}/>
                <h3> {product.name} </h3>
                <div className="ReadMore">
                    <p onClick={()=> (this.setState((state)=> ({readMoreOpen:!state.readMoreOpen})))}>
                        {this.state.readMoreOpen? "Read less": "Read more"}...
                    </p> 

                    {
                        this.state.readMoreOpen?
                        <div className="descText">
                        <p>{product.desc}</p>
                        </div>: null
                    }
                </div>

                <div className="Count">
                    <button onClick={()=> (this.setState((state,props)=> (this.decrement(state, props))))}>-</button>
                    <span>{this.state.count}</span>
                    <button onClick={()=> (this.setState((state, props)=> (this.increment(state, product.amount, props))))}>+</button>
                </div>
            </div>


        );  
    }
}
  
  export default Product;