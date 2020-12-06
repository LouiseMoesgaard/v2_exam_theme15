import React from "react";
import Dashboard from './pages/dashboard/Dashboard';
import OrderForm from './pages/orderform/Orderform';
import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
// import React, {useState, useEffect} from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: 1}; 
  }
  interval = null;
    componentDidMount () {
        this.interval = setInterval(() => {fetch("https://examspacebar.herokuapp.com/").then(r=>r.json()).then(data=>console.log(data))}, 10000);
    }
    componentWillUnmount () {
        clearInterval(this.interval);
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
 