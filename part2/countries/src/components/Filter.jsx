import React from "react";

const Filter = (props) => {
  const { query, filterHandler } = props;
  return (
    <>
      <div>
        Find countries : <input value={query} onChange={filterHandler} />
      </div>
    </>
  );
};

export default Filter;
