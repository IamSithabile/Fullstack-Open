import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import {
  getAll,
  addPerson,
  removePerson,
  updateNumber,
} from "./services/backend";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [query, setQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    getAll().then((phonebook) => {
      setPersons(phonebook);
    });
  }, []);

  const sendToServer = (personObj) => {
    addPerson(personObj).then((response) => console.log(response));
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
      const confirmResult = window.confirm(
        `${newName} is already in the phonebook. Do you want to add them again?`
      );

      // If the user clicks "Cancel", do not add the person to the phonebook
      if (!confirmResult) {
        return;
      }

      if (confirmResult) {
        const newObj = { ...alreadyExists, number: newNumber };

        updateNumber(alreadyExists.id, newObj).then((serverObj) =>
          console.log(serverObj)
        );
        return;
      }
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
        persons={persons}
      />

      <h3>Numbers</h3>
      <Persons filteredList={filteredList} removePerson={removePerson} />
    </div>
  );
};

export default App;
