import React, { Component } from 'react';
import './App.css';

class Divisor extends Component{
  render(){
    return(
      <div>
        <h4>Rebeca Andrade</h4>
        <label>Seu nome?</label>
        <input type="text"></input>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Divisor/>
    );
  }
}

export default App;
