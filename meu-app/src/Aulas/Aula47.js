import React, { Component } from "react";
import Person from "../Person/Person";

export default class Aula46 extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  changedNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Maximilliam", age: 23 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>Hi, I'm React App</h1>
          <h1>This is really working!</h1>
          <button
            onClick={() => {
              this.switchNameHandler("Maximilliam");
            }}
          >
            Switch Name
          </button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          >
            My Hobbies: Teaching
          </Person>
          <Person
            click={this.switchNameHandler.bind(this, "Max")}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.changedNameHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          >
            My Hobbies: Ciclism
          </Person>
        </div>
      </>
    );
  }
}
