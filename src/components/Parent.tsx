import React, { useState } from "react";
import { parser } from "./parser";

const Parent = () => {
  const [i, setI] = useState(0);
  const displayedCompoennt = 1;

  return (
    <div>
      {displayedCompoennt}
      <div>
        <button onClick={() => setI(i + 1)}>Increment i</button>
      </div>
    </div>
  );
};

export default Parent;
