import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div class="App">
      <header>
        <form id="todoform">
          <input type="text" placeholder="Enter Subject" />
          <input type="submit" value="Add" />
        </form>
      </header>
      </div>
    );
  }
}

export default App;
