import React from 'react';
import BeerStorage from '../../components/beerStorage/BeerStorage';

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
                    <div className="beersColumn">
                        <h2>Beers</h2>
                        <BeerStorage />
                    </div>
                    <div className="cidersColumn">
                        <h2>Ciders</h2>
                        <p>Placeholder text</p>
                    </div>
                    <div className="snacksColumn">
                        <h2>Snacks</h2>
                        <p>Placeholder text</p>
                    </div>
             </div>
             </div>
        </div>
       );
    }
}

export default statsDash;    