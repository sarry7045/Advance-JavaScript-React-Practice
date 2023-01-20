import React from "react";
import UseeState from "./UseeState";
import UseeMemo from "./UseeMemo";
import UseeCallback from "./UseeCallback/UseeCallback";
import UseeEffect from "../ReactHooks/UseeEffect";
import UseeContext from "./UseeContext";
import UseeReducer from "./UseeReducer";
import UseeRef from "./UseeRef";

const ReactHooks = () => {
  return (
    <div>
      <UseeState />
      <UseeMemo />
      <UseeCallback />
      <UseeEffect />
      <UseeContext />
      <UseeReducer />
      <UseeRef />
    </div>
  );
};

export default ReactHooks;
