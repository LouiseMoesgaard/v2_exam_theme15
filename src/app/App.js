import React from "react";
import Dashboard from './pages/dashboard/Dashboard';
import OrderForm from './pages/orderform/OrderForm';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import BarData from './services/BarData';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {appData: null}; 
  }

  interval = null;

    componentDidMount () {
      this.interval = setInterval(() => {
        BarData.getData().then(data => {
          this.setAppData(data);
        })
      }, 10000);
    }

    componentWillUnmount () {
      clearInterval(this.interval);
    }

    setAppData(json){
      this.appData = json;
    }

  
  render() { 
    return (
      
      <Router>
        <div className="App">
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>

            <Route path="/order" render={()=> (
              <div className="OrderWrapper">
                <OrderForm/>
              </div>
              )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
 