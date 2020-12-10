import React from 'react';
import NavigationDash from '../../components/navigationDash/NavigationDash';
import SideNavDash from '../../components/sideNavDash/SideNavDash';

import './Problems.scss';

class Problems extends React.Component {
render() {
    return (
        <div className="Problems">
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

export default Problems;