import React, { useState } from "react";

interface Props {
  identifier: string;
  change: Function;
  label?: string;
}

const TextInput: React.FC<Props> = ({ identifier, change, label }) => {
  return (
    <div>
      <label htmlFor={identifier}> {label} </label>
      <input
        type="text"
        name={identifier}
        id={identifier}
        onChange={(e) => {
          change(e.target.value, identifier);
        }}
      />
    </div>
  );
};

export default TextInput;
