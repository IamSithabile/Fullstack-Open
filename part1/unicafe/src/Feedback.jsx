import React from "react";
import Button from "./Button";

const Feedback = ({ good, bad, neutral }) => {
  return (
    <>
      <h1>Give Feedback</h1>
      <div>
        <Button onClick={good} buttonText="Good" />
        <Button onClick={neutral} buttonText="Neutral" />
        <Button onClick={bad} buttonText="Bad" />
      </div>
    </>
  );
};

export default Feedback;
