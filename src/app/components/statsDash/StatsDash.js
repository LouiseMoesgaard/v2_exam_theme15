import React from 'react';
import StorageList from '../../components/storageList/StorageList';
import './StatsDash.scss';

class StatsDash extends React.Component {

    render() {
        return (
        <div className="statisticsDash">            
            <div className="WeekSales">
                <h1>Weekly sales...</h1>

                <div className="SalesContainer">
                    <div className="salesDay">
                        <h2>Monday</h2>
                        <p>4675,70 kr.</p>
                    </div>
                    <div className="salesDay">
                        <h2>Tuesday</h2>
                        <p>4955,00 kr.</p>
                    </div>
                    <div className="salesDay">
                        <h2>Wednesday</h2>
                        <p>3995,00 kr.</p>
                    </div>
                    <div className="salesDay">
                        <h2>Thursday</h2>
                        <p>6870,50 kr.</p>
                    </div>
                    <div className="salesDay">
                        <h2>Friday</h2>
                        <p>10.595,50 kr.</p>
                    </div>
                    <div className="salesDay">
                        <h2>Saturday</h2>
                        <p>1000,00 kr.</p>
                    </div>
                    <div className="salesDay">
                        <h2>Sunday</h2>
                        <p>0,00 kr.</p>
                    </div>
                </div>
             </div>

             <div className="Storage">
                <h1>Stock...</h1>

                <div className="StorageContainer">
                    <StorageList type="beer" storage={this.props.storage.filter((product)=> product.type === "beer")}></StorageList>
                    <StorageList type="cider" storage={this.props.storage.filter((product)=> product.type === "cider")}></StorageList>
                    <StorageList type="shots" storage={this.props.storage.filter((product)=> product.type === "shots")}></StorageList>
                    <StorageList type="snacks" storage={this.props.storage.filter((product)=> product.type === "snacks")}></StorageList>
                </div>
            </div>
        </div>
       );
    }
}

export default StatsDash;    