import React from 'react';

class OrderForm extends React.Component {
    render(){
        if(this.props.show){
            return (
                <div className="OrderForm">
                    OrdiLordi
                </div>
            );
        } else {
            return null;
        }
    }
}
  
  export default OrderForm;