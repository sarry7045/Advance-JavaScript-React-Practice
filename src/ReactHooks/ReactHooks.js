import React from "react";
import UseeState from "./UseeState";
import UseeMemo from "./UseeMemo";
import UseeCallback from "./UseeCallback/UseeCallback";
import UseeEffect from "./UseeEffect";
import UseeContext from "./UseeContext";
import UseeReducer from "./UseeReducer";
import UseeRef from "./UseeRef";
import UseeDeferred from "./UseeDeferred";
import UseeID from "./UseeID";

const ReactHooks = () => {
  return (
    <div>
      <h4>React Hooks</h4>
      <UseeState />
      <UseeMemo />
      <UseeCallback />
      <UseeEffect />
      <UseeContext />
      <UseeReducer />
      <UseeRef />
      <UseeDeferred />
      <UseeID />
    </div>
  );
};

export default ReactHooks;
