import React from 'react';
import NavigationDash from '../../components/navigationDash/NavigationDash';
import QueueBoxDash from '../../components/queueBoxDash/QueueBoxDash';
import SideNavDash from '../../components/sideNavDash/SideNavDash';

class Dashboard extends React.Component {
    render(){
        return (
            <div className="Dashboard">
            <NavigationDash />
            <SideNavDash />
            <QueueBoxDash />
            </div>
        );
        
    }
}
  
  export default Dashboard;