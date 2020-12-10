import React from 'react';
import NavigationDash from '../../components/navigationDash/NavigationDash';
import QueueBoxDash from '../../components/queueBoxDash/QueueBoxDash';
import SideNavDash from '../../components/sideNavDash/SideNavDash';

import './Dashboard.scss';

class Dashboard extends React.Component {
    render(){
        return (
            <div className="Dashboard">
            <div className="p1"></div>
            <div className="p2"></div>
            <div className="p3"></div>
            <div className="p4"></div>
            <div className="p5"></div>
            <div className="p6"></div>
            <NavigationDash />
            <SideNavDash />
            <QueueBoxDash />
            </div>
        );
        
    }
}
  
  export default Dashboard;