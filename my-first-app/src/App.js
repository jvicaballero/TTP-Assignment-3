import React, { Component } from 'react';
import ContactCard from "./ContactCard";
import Decrement from "./Decrement";
import './App.css';

/*
class HelloWorld extends Component{
  render(){
    return <h1>Hello World!</h1>;
  }
}*/

/*
class HelloWorld extends Component {
  render(){
    return <h1>Hello World</h1>;
  }
}

class HelloFriend extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.name,
    };

    setTimeout(this.updateName.apply.bind(this),2000);

    }
  

  updateName(){
    this.setState({ name:"Jeff"});
  }

  render(){
    return <h1>Hello { this.state.name} </h1>
  }
}*/


class App extends Component {
  render(){
    return (/*
      <>
      <ContactCard name="John" mobile="1234561" work="8001231" email="hello@example.com"/>
      </>*/

      /*
      <>
      
      <Decrement start={5}/>
      <Decrement start={10}/>
      <Decrement start={15}/>
      </>*/

      <>
      <ContactCard name="John" mobile="123ds1234561" work="8001231" email="hello@example.com"/>
      <ContactCard name="Joey" mobile="1234ewqeqwe561" work="8001231" email="hello@example.com"/>
      <ContactCard name="JM" mobile="12343251561" work="8001231" email="hello@example.com"/>
      </>

      
     
    );

    /*
    return
    <div>
    <HelloWorld />
    <HelloFriend name="Tom" />
    </div>*/
  };
}

export default App;
