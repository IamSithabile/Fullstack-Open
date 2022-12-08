import React from "react";

const Statistics = ({ good, bad, neutral }) => {
  let all = good + bad + neutral;

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </>
    );
  }
  return (
    <>
      <h1>Statistics</h1>
      <p> Good : {good}</p>
      <p> Neutral : {neutral}</p>
      <p> Bad : {bad}</p>
      <p>All: {all} </p>
      <p>Average: {(good - bad) / all} </p>
      <p>Positive: {(good / all) * 100} %</p>
    </>
  );
};

export default Statistics;
