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
                    <p>Placeholder text</p>
                <p>Placeholder text</p>
                </div>
             </div>

             <div className="Storage">
                <h1>In stock...</h1>

                <div className="StorageContainer">
                    <StorageList type="beer" storage={this.props.storage.filter((product)=> product.type == "beer")}></StorageList>
                    <StorageList type="cider" storage={this.props.storage.filter((product)=> product.type == "cider")}></StorageList>
                    <StorageList type="shots" storage={this.props.storage.filter((product)=> product.type == "shots")}></StorageList>
                    <StorageList type="snacks" storage={this.props.storage.filter((product)=> product.type == "snacks")}></StorageList>
                </div>
            </div>
        </div>
       );
    }
}

export default StatsDash;    