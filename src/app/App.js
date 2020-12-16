import React from "react";
import Dashboard from './pages/dashboard/Dashboard';
import Statistics from './pages/dashboard/Statistics';
import Problems from './pages/dashboard/Problems';
import OrderForm from './pages/orderform/Orderform';
import Payment from './pages/orderform/Payment';
import Approved from './pages/orderform/Approved';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import BarData from './services/BarData';
import EventHandler from "./EventHandler";
import './App.scss';
import StorageList from "./components/storageList/StorageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null; 
    EventHandler.subscribe("orderUp", (order)=>{
      this.setState({order})
    })
  }

  interval = null;

    componentDidMount () {
      this.interval = setInterval(() => {
        BarData.getData().then(data => {
          this.setState({...data, order: null});
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
              this.state?
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
 