import React from 'react';
import NavigationDash from '../../components/navigationDash/NavigationDash';

import './Dashboard.scss';

class Dashboard extends React.Component {
    render(){
        return (
            <div className="Dashboard">
            <NavigationDash />
            </div>
        );
        
    }
}
  
  export default Dashboard;