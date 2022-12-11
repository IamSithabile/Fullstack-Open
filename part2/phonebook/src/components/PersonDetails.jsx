import React from "react";

const PersonDetails = ({ person, removePerson, setNotification }) => {
  const { name, number, id } = person;

  const handleClick = () => {
    const confirmResult = window.confirm("Are you sure you want to do this?");

    if (confirmResult) {
      removePerson(id)
        .then((response) => {
          console.log("The response for axios.delete", response);

          setNotification({
            message: "Successfully deleted the entry",
            className: "success",
          });

          setTimeout(() => {
            setNotification(null);
          }, 3000);
        })
        .catch((error) => {
          console.log("The response for a failed axios.delete", error);

          setNotification({
            message: "Error could not find the entry to delete",
            className: "error",
          });

          setTimeout(() => {
            setNotification(null);
          }, 3000);
        });
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
