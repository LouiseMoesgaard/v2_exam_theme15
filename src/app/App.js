import React from 'react';
import Dashboard from './pages/dashboard/Dashboard';
import OrderForm from './pages/orderform/OrderForm';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 1};
    
  }
  
  setPage(number){
    this.page = number;

  }
  
  render() { 
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>

            <Route path="/order" component={OrderForm}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
 