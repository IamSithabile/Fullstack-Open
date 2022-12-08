import React, { Fragment } from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <Fragment>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </Fragment>
  );
};

export default Content;
