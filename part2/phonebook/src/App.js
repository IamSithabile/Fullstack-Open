import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [query, setQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      const data = response.data;

      setPersons(data);
    });
  }, []);

  const sendToServer = (personObj) => {
    axios
      .post("http://localhost:3001/persons", personObj)
      .then((response) => console.log(response.data));
  };

  const numberHandler = (e) => {
    setNewNumber(e.target.value);
  };

  const nameHandler = (e) => {
    setNewName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const alreadyExists = persons.find((person) => person.name === newName);

    if (alreadyExists) {
      return alert(`${newName} is already added to phonebook`);
    }
    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    sendToServer(personObj);

    setPersons(persons.concat(personObj));
    setNewName("");
  };

  const filterListHandler = (e) => {
    setQuery(e.target.value);
  };

  const filteredList = persons.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter query={query} filterListHandler={filterListHandler} />

      <h3>Add a new</h3>

      <PersonForm
        formSubmitHandler={formSubmitHandler}
        newName={newName}
        nameHandler={nameHandler}
        newNumber={newNumber}
        numberHandler={numberHandler}
      />

      <h3>Numbers</h3>
      <Persons filteredList={filteredList} />
    </div>
  );
};

export default App;
