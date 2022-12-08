import React from "react";
import { Fragment } from "react";

const Part = (props) => {
  return (
    <Fragment>
      <p>
        {props.part} {props.exercise}
      </p>
    </Fragment>
  );
};

export default Part;
