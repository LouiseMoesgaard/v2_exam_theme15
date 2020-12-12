import React from 'react';

import './ProblemsDash.scss';

class ProblemsDash extends React.Component {
    render(){
        return(
            <div className="problemsBoxContainer">
            <div className="NeedsHelp">
                <h1>Needs help...</h1>
                <div className="problemsContainer">
                    <p>Placeholder text</p>
                <p>Placeholder text</p>
             </div>
             </div>
             <div className="DoubleOrder">
                <h1>Double order...</h1>
                <div className="problemsContainer">
                    <p>Placeholder text</p>
                <p>Placeholder text</p>
             </div>
             </div>
             <div className="FailedPayment">
                <h1>Failed...</h1>
                <div className="problemsContainer">
                    <p>Placeholder text</p>
                <p>Placeholder text</p>
             </div>
             </div>
            </div>
        );
    }
}

export default ProblemsDash;