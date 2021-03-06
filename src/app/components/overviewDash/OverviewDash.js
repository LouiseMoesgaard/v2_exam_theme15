import React from 'react';

import './OverviewDash.scss';
import QueueBox from './queueBox/QueueBox';

class OverviewDash extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            completeArray: []
        }
    }

    componentDidUpdate(prevProps) {
        //stringify objects to be able to compare them
        let cur_orders = JSON.stringify(this.props.data.serving);
        let prev_orders = JSON.stringify(prevProps.data.serving);
        if (cur_orders !== prev_orders) {
            //checks if product from old props is not existing in new prop and adds it to doneOrders
          let doneOrders = prevProps.data.serving.filter(x=>this.props.data.serving.findIndex(y=>y.id===x.id)===-1);
          this.setState({completeArray: doneOrders});
        }
      }


    render() {
        return (
        <div className="OverviewDash">      
            <QueueBox title="Queue" data={this.props.data.queue} detailed={false}></QueueBox>   
            <QueueBox title="Proccesing" data={this.props.data.serving} detailed={true} storage={this.props.data.storage}></QueueBox>
            <QueueBox title="Done" data={this.state.completeArray} detailed={false}></QueueBox>
        </div>
       );
    }
}

export default OverviewDash;   
