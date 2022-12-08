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
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{(good - bad) / all}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{`${(good / all) * 100}%`}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
