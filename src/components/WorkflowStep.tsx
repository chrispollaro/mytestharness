import React, { useState } from "react";
import TextInput from "./TextInput";

interface Props {
  info: any;
  nav: any;
}

const componentBuilder = (c: any, stateCallback: any) => {
  const fields = c.map((e: any) => {
    if (e.type === "textInput")
      return (
        <TextInput
          change={stateCallback}
          identifier={e.id}
          label={e.label}
          key={e.id}
        />
      );
  });
  return fields;
};

// Render
const WorkflowStep = (props: Props) => {
  const [state, setState]: [any, any] = useState({});

  const stateChange = (stateUpdate: any, identifier: string) => {
    const newState: any = { ...state };
    newState[identifier] = stateUpdate;
    setState(newState);
  };

  const components = componentBuilder(props.info.components, stateChange);
  return (
    <div>
      {components}
      <div>Name: {state.name}</div>
      <div>Color: {state.color}</div>
      <div>Number: {state.number}</div>
      <button
        onClick={() => {
          props.nav(2);
        }}
      >
        Goto Step 2
      </button>
    </div>
  );
};

export default WorkflowStep;
