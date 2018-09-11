/* global WebAssembly */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    const importObject = { imports: { imported_func: arg => console.log(arg) } }
    WebAssembly.instantiateStreaming(fetch('number_adder.wasm', importObject)).then((obj) => {
      // console.log(obj)
      let addition = obj.instance.exports.add_numbers(2, 3)
      alert(addition)
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
