import React, {Component} from 'react';
import './NavigationDash.scss';
import DashItems from './dashItems/DashItems';

class NavigationDash extends Component {
    render() {    
        return (
            <nav className="NavigationDash">
               <DashItems></DashItems>
            </nav>
        )
    }
    
}

export default NavigationDash;