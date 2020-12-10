import React from 'react';
import NavigationDash from '../../components/navigationDash/NavigationDash';
import SideNavDash from '../../components/sideNavDash/SideNavDash';

import './Dashboard.scss';

class Dashboard extends React.Component {
    render(){
        return (
            <div className="Dashboard">
            <NavigationDash />
            <SideNavDash />
            </div>
        );
        
    }
}
  
  export default Dashboard;