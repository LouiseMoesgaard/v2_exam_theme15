import React from 'react';

import './ProblemsDash.scss';

class ProblemsDash extends React.Component {
    render(){
        return(
            <div className="problemsBoxContainer">
            <div className="NeedsHelp">
                <h1>Needs help...</h1>
                <div className="problemsContainer">
                    <p>Table 1</p>
                    <p>Table 7</p>
             </div>
             </div>
             <div className="DoubleOrder">
                <h1>Double order...</h1>
                <div className="problemsContainer">
                    <p>Order 201</p>
                    <p>Order 213</p>
             </div>
             </div>
            </div>
        );
    }
}

export default ProblemsDash;