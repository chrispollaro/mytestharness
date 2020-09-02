import React from "react";

const Component1: React.FC<any> = ({ value }) => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Red {value}</h1>
      <input />
    </div>
  );
};

export default Component1;
