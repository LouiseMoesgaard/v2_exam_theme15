import React from 'react';
import './QueueBox.scss';

class QueueBox extends React.Component {
  
    render(){
        const {title, data, detailed} = this.props;
        return (
            <div className="QueueBox">
                <h1>{title}...</h1>
                <div className="orderContainer">
                    {
                        data.map((order, index)=><p key={index}>{order.id}</p>)
                    }
                </div>
             </div>
        );
    }
}

export default QueueBox;