import React from "react";

const PersonDetails = ({ person, removePerson }) => {
  const { name, number, id } = person;

  const handleClick = () => {
    const confirmResult = window.confirm("Are you sure you want to do this?");

    if (confirmResult) {
      removePerson(id);
    }
  };
  return (
    <li>
      {name} {number}
      <button onClick={handleClick}> Remove Entry</button>
    </li>
  );
};

export default PersonDetails;
