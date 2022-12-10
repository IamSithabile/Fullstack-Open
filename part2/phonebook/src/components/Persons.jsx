import React from "react";
import PersonDetails from "./PersonDetails";

const Persons = (props) => {
  const { filteredList } = props;

  return (
    <ul>
      {filteredList.map((person) => (
        <PersonDetails key={person.name} person={person} />
      ))}
    </ul>
  );
};

export default Persons;
