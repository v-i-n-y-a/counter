import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(App);
    this.state = {
      value: 0
    }
  }

  render() {
    let {value} = this.state;
    return (
      <div className="App">
        <button onClick={() => {this.setState({value: value +1})}}>+</button>
        <div>
          Value: {value}
        </div>
        <button onClick={() => {this.setState({value: value -1})}}>-</button>
      </div>
    );
  }
}

export default App;
