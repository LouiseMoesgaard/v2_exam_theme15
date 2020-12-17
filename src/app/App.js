import React from "react";
import Dashboard from './pages/dashboard/Dashboard';
import Statistics from './pages/dashboard/Statistics';
import Problems from './pages/dashboard/Problems';
import OrderForm from './pages/orderform/Orderform';
import Payment from './pages/orderform/Payment';
import Approved from './pages/orderform/Approved';
import Help from './pages/orderform/Help';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import BarData from './services/BarData';
import EventHandler from "./EventHandler";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; 
    EventHandler.subscribe("orderUp", (order)=>{
      this.setState({order})
    })

    BarData.getData().then(data => {
      this.setState({...data, order: null})
    })
  }

  interval = null;
  //sets up interval when app mounts
    componentDidMount () {
      this.interval = setInterval(() => {
        console.log(this.state)
        BarData.getData().then(data => {
          this.setState({...data});
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
            <Route path="/dashboard" render={()=>(
              this.state.queue?
              <Dashboard data={this.state}></Dashboard>:
              null
            )}/>
            <Route path="/stats" render={()=>(
              this.state.storage?
              <Statistics storage={this.state.storage}/> : 
              null
            )}/>
            <Route path="/problems" component={Problems}/>
            <Route path="/order" render={()=> (
              <div className="OrderWrapper">
                {
                  this.state.storage?
                  <OrderForm storage={this.state.storage}/> :
                  null
                }
              </div>
              )}/>
              <Route path="/payment" render={()=>(
                <Payment order={this.state.order}/>
                )}/>
              <Route path="/approved" render={()=>(
                <Approved order={this.state.order}/>
                )}/>
                <Route path="/help" render={()=>(
                <Help />
                )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
 