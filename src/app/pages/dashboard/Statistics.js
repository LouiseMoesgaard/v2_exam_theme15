import React from 'react';
import NavigationDash from '../../components/navigationDash/NavigationDash';
import StatsDash from '../../components/statsDash/StatsDash';
import SideNavDash from '../../components/sideNavDash/SideNavDash';

import './Statistics.scss';

class Statistics extends React.Component {
    render(){
        return (
            <div className="Statistic">
            <div className="p1"></div>
            <div className="p2"></div>
            <div className="p3"></div>
            <div className="p4"></div>
            <div className="p5"></div>
            <div className="p6"></div>
            <NavigationDash />
            <SideNavDash />
            <StatsDash />
            </div>
        );
        
    }
}
  
  export default Statistics;