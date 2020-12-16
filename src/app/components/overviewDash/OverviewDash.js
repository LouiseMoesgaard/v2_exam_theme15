import React from 'react';

import './OverviewDash.scss';
import QueueBox from './queueBox/QueueBox';

class OverviewDash extends React.Component {
    render() {
        return (
        <div className="OverviewDash">      
            <QueueBox title="Queue" data={this.props.data.queue} detailed={false}></QueueBox>   
            <QueueBox title="Proccesing" data={this.props.data.serving} detailed={false}></QueueBox>
        </div>
       );
    }
}

export default OverviewDash;    
