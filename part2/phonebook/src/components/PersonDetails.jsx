import React from "react";

const PersonDetails = ({ person }) => {
  const { name, number } = person;
  return (
    <li>
      {name} {number}
    </li>
  );
};

export default PersonDetails;
