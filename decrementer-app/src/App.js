import React, { Component } from 'react';

import Decrement from "./Decrement";
import './App.css';

class App extends Component {
  render(){
    return (

      <>
      <Decrement start={5}/>
      <Decrement start={10}/>
      <Decrement start={15}/>
      </>  
     
    );

  };
}

export default App;
