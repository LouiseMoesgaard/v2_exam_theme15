import React from "react";
import Dashboard from './pages/dashboard/Dashboard';
import OrderForm from './pages/orderform/Orderform';
import Statistics from './pages/dashboard/Statistics';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import BarData from './services/BarData';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  }

  interval = null;

    componentDidMount () {
      this.interval = setInterval(() => {
        BarData.getData().then(data => {
          this.setState(data);
          console.log(this.state)
        })
      }, 10000);
    }

    componentWillUnmount () {
      clearInterval(this.interval);
    }

  
  render() { 
    return (
      
      <Router>
        <div className="App">
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/stats" component={Statistics}/>

            <Route path="/order" render={()=> (
              <div className="OrderWrapper">
                {
                  this.state.storage?
                  <OrderForm storage={this.state.storage}/> :
                  null
                }
              </div>
              )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
 