import React, { useState } from "react";
import WorkflowStep from "./WorkflowStep";
import { parser } from "./parser";
import { default as wf } from "../workflow.json";

const Workflow = () => {
  const [step, setStep] = useState(1);
  const updateStep = (step: number) => setStep(step);
  const displayedComponent = parser(wf, step, updateStep);

  return (
    <div>
      <h1>Workflow</h1>
      {displayedComponent}
    </div>
  );
};

export default Workflow;
