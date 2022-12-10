import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [query, setQuery] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
    };

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
      <div>
        Filter the list : <input value={query} onChange={filterListHandler} />
      </div>
      <form onSubmit={formSubmitHandler}>
        <div>
          Name: <input value={newName} onChange={nameHandler} />
          <br />
          Number: <input value={newNumber} onChange={numberHandler} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredList.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
