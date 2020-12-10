import React from 'react';

import './StatsDash.scss';

class statsDash extends React.Component {
    render() {
        return (
        <div className="statisticsDash">            
            <div className="WeekSales">
                <h1>Weekly sales...</h1>
                <div className="salesContainer">
                    <p>Placeholder text</p>
                <p>Placeholder text</p>
             </div>
             </div>
             <div className="BeerStorage">
                <h1>In stock...</h1>
                <div className="storageContainer">
                    <p>Placeholder text</p>
                <p>Placeholder text</p>
             </div>
             </div>
        </div>
       );
    }
}

export default statsDash;    