import React, { Component } from 'react';
import './App.css';

class Divisor extends Component{
  render(){
    return(
      <div>
        Estou testando o react 22:41
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
