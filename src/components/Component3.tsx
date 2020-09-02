import React from "react";

const Component3: React.FC<any> = ({ value }) => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <h1>Blue {value}</h1>
      <textarea></textarea>
    </div>
  );
};

export default Component3;
