import React from 'react';

import './QueueBoxDash.scss';

class QueueBoxDash extends React.Component {
    render() {
        return (
        <div className="overviewDash">      
            <div className="QueueBoxDash">
                <h1>Orders...</h1>
                <div className="orderContainer">
                    <p>Placeholder text</p>
                <p>Placeholder text</p>
             </div>
             </div>
             <div className="ProcessBoxDash">
                <h1>Processing...</h1>
                <div className="orderContainer">
                    <p>Placeholder text</p>
                <p>Placeholder text</p>
             </div>
             </div>
             <div className="ReadyBoxDash">
                <h1>Ready...</h1>
                <div className="orderContainer">
                    <p>Placeholder text</p>
                <p>Placeholder text</p>
             </div>
             </div>
            </div>
       );
    }
}

export default QueueBoxDash;    
