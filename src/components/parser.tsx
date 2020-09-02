import React from "react";
import Red from "./Component1";
import Green from "./Component2";
import Blue from "./Component3";
import Workflow from "./Workflow";
import WorkflowStep from "./WorkflowStep";

export function parser(wf: object, i: number, updateStep: Function) {
  const stepInfo = parseStep(wf, i);
  return <WorkflowStep info={stepInfo} nav={updateStep} />;
}

function parseStep(wf: any, i: number) {
  const listofsteps = wf.workflowSteps;

  return listofsteps[i - 1];
}
