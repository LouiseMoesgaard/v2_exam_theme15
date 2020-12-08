import React from 'react';
import NavigationDash from '../../components/navigationDash/NavigationDash';
import SideNavDash from '../../components/sideNavDash/SideNavDash';

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