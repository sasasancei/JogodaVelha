import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quadradinho from './Quadradinho';

class App extends Component {
  render() {
    return (
      <section>
      <section className = "grande">
      <Quadradinho valor=""/>
      <Quadradinho/>
      <Quadradinho/>         
      </section>
      <section className = "grande">
      <Quadradinho/>
      <Quadradinho/>
      <Quadradinho/>         
      </section>
      <section className = "grande">
      <Quadradinho/>
      <Quadradinho/>
      <Quadradinho/>         
      </section>     
      </section>
      
    );
  }
}

export default App;
