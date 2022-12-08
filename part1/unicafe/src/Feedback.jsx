import React from "react";

const Feedback = ({ good, bad, neutral }) => {
  return (
    <>
      <h1>Give Feedback</h1>
      <div>
        <button onClick={good}>Good</button>
        <button onClick={neutral}>Neutral</button>
        <button onClick={bad}>Bad</button>
      </div>
    </>
  );
};

export default Feedback;
