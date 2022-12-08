import React from "react";
import StatisticsLine from "./StatisticsLine";

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
      <StatisticsLine text="Good" value={good} />
      <StatisticsLine text="Neutral" value={neutral} />
      <StatisticsLine text="Bad" value={bad} />
      <StatisticsLine text="All" value={(good - bad) / all} />
      <StatisticsLine text="Average" value={all} />
      <StatisticsLine text="Positive" value={`${(good / all) * 100}%`} />
    </>
  );
};

export default Statistics;
