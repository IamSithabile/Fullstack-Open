import React from "react";

const Total = ({ parts }) => {
  return (
    <>
      <p>
        <em>
          The total of exercises is :{" "}
          {parts.reduce((total, part) => {
            return total + part.exercises;
          }, 0)}
        </em>
      </p>
    </>
  );
};

export default Total;
