import React from "react";

const Filter = (props) => {
  const { query, filterListHandler } = props;
  return (
    <div>
      Filter the list : <input value={query} onChange={filterListHandler} />
    </div>
  );
};

export default Filter;
