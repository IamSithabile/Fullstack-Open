import { useState } from "react";
import Feedback from "./Feedback";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandler = () => {
    setGood((prevState) => prevState + 1);
  };
  const neutralHandler = () => {
    setNeutral((prevState) => prevState + 1);
  };
  const badHandler = () => {
    setBad((prevState) => prevState + 1);
  };

  return (
    <>
      <Feedback good={goodHandler} neutral={neutralHandler} bad={badHandler} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
