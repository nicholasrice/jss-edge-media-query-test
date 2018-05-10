import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { create } from "jss";
import nested from "jss-nested";

const styles = {
    // foo: {
    //     "&:before": {
    //          background: () => "red"
    //     }
    // }
    "@media screen and (-ms-high-contrast: active)": {
        foo: {
            background: () => "red"
        }
    }
};

const JSS = create({plugins: [nested()]});

let stylesheet = JSS.createStyleSheet(styles, { link: true }).attach().update();

console.log(stylesheet);


class App extends Component {
  render() {
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
