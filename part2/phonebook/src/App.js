import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
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
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    getAll().then((phonebook) => {
      setPersons(phonebook);
    });
  }, []);

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
          setNotification({
            message: `Succesfully change the number for ${serverObj.name} `,
            className: "success",
          })
        );

        setTimeout(() => {
          setNotification(null);
        }, 3000);

        return;
      }
    }
    const personObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    addPerson(personObj).then((response) => {
      setNotification({
        message: `Succesfully added ${response.name} to the phonebook `,
        className: "success",
      });

      setTimeout(() => {
        setNotification(null);
      }, 3000);
    });

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
      {notification && (
        <Notification
          message={notification.message}
          className={notification.className}
        />
      )}
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
      <Persons
        filteredList={filteredList}
        removePerson={removePerson}
        setNotification={setNotification}
      />
    </div>
  );
};

export default App;
