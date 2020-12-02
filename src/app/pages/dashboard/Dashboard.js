import React from 'react';

class Dashboard extends React.Component {
    render(){
        if(this.props.show){
            return (
                <div className="Dashboard">
                DashiDash
                </div>
            );
        } else {
            return null;
        }
    }
}
  
  export default Dashboard;