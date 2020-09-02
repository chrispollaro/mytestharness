import React from "react";

const Component2: React.FC<any> = ({ value }) => {
  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>Green {value}</h1>
      <input type="radio" name="box" />
    </div>
  );
};

export default Component2;
