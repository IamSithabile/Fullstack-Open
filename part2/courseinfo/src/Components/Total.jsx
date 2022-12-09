import React from "react";

const Total = ({ parts }) => {
  return (
    <>
      <p>
        The total of exercises is :{" "}
        {parts.reduce((total, part) => {
          return total + part.exercises;
        }, 0)}
      </p>
    </>
  );
};

export default Total;
