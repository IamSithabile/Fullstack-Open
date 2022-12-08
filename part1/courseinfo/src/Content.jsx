import React, { Fragment } from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <Fragment>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </Fragment>
  );
};

export default Content;
