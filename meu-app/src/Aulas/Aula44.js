import React, { useState } from "react";
import Person from "../Person/Person";

const Aula44 = () => {
  const [person, setPerson] = useState([
    { name: "Max", age: 28 },
    { name: "Manu", age: 29 },
    { name: "Stephanie", age: 26 },
  ]);

  const switchNameHandler = () => {
    setPerson([
      { name: "Maximilliam", age: 23 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 25 },
    ]);
  };

  return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <h1>This is really working!</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person
          name={person[0].name}
          age={person[0].age}
        >
          My Hobbies: Teaching
        </Person>
        <Person
          name={person[1].name}
          age={person[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={person[2].name}
          age={person[2].age}
        >
          My Hobbies: Ciclism
        </Person>
      </div>
  );
};

export default Aula44;
