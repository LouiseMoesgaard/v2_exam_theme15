import React from 'react';
import NavigationDash from '../../components/navigationDash/NavigationDash';
import SideNavDash from '../../components/sideNavDash/SideNavDash';
import ProblemsDash from '../../components/problemsDash/ProblemsDash';

import './Problems.scss';

class Problems extends React.Component {
render() {
    return (
        <div className="Problems">
            <div className="p1"></div>
            <div className="p2"></div>
            <div className="p3"></div>
            <div className="p4"></div>
            <div className="p5"></div>
            <div className="p6"></div>
            <NavigationDash />
            <SideNavDash />
            <ProblemsDash />
        </div>
        );
    }
}

export default Problems;