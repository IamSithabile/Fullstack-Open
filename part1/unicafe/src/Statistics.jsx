import React from "react";

const Statistics = ({ good, bad, neutral }) => {
  let all = good + bad + neutral;
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
