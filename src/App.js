import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <header>
        <form id="todoform">
          <input type="text" placeholder="Enter Subject" />
          <input type="submit" value="Add" />
        </form>
      </header>
    );
  }
}

export default App;
