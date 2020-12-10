import React, {Component} from 'react';

class Timer extends Component {
    state = {
        date: new Date()
    };
    callMe() {
        setInterval(() => {
            this.setState({date: new Date()});
        }, 1000);
    }
    render() {
        return(
            <div className="Timer">
                <p>{this.state.date.toLocaleTimeString()}</p>
                {this.callMe()}
            </div>
        );
    }
}

export default Timer;