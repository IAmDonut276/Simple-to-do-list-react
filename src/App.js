import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    this.form.clear();
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="todoform" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter Subject"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <input type="submit" value="Add" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
