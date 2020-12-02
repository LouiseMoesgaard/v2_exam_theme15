import React from 'react';
import Dashboard from './pages/dashboard/Dashboard';
import OrderForm from './pages/orderform/Orderform';
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
      <div className="App">
        <ul>
          <li onClick={()=>this.setState({page:0})}>hulubulop</li>
          <li onClick={()=>this.setState({page:1})}>hej</li>
        </ul>
        <Dashboard show={this.state.page===0}></Dashboard>
        <OrderForm show={this.state.page===1}></OrderForm>
      </div>
    );
  }
}

export default App;
