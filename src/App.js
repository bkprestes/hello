import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyButton extends Component{
  render(){
    return <button>Click Me</button>
  }
}

class MyLabel extends Component{
  render(){
    return <p>Hello World from Component</p>
  }
}

class App extends Component {
  render() {
    return (
      <p>Teste Rebeca</p>
    );
  }
}

export default App;
