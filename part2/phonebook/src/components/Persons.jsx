import React from "react";
import PersonDetails from "./PersonDetails";

const Persons = (props) => {
  const { filteredList, removePerson, setNotification, setPersons, persons } =
    props;

  return (
    <ul>
      {filteredList.map((person) => (
        <PersonDetails
          key={person.name}
          person={person}
          removePerson={removePerson}
          setNotification={setNotification}
          setPersons={setPersons}
          persons={persons}
        />
      ))}
    </ul>
  );
};

export default Persons;
