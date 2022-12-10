import React from "react";

const PersonForm = (props) => {
  const { formSubmitHandler, newName, nameHandler, newNumber, numberHandler } =
    props;
  return (
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
  );
};

export default PersonForm;
