import React, { Component } from "react";
import Person from "../Person/Person";


export default class Aula42 extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  };

  switchNameHandler = () => {
    // console.log('Was clicked')
    this.setState({
      persons: [
        { name: "Maximiliam", age: 23 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  render() {
    return (
      <>
        {console.log(this.state)}
        <div className="App">
          <h1>Hi, I'm React App</h1>
          <h1>This is really working!</h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          >
            My Hobbies: Teaching
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
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
