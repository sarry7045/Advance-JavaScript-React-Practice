import React from "react";
import UseeState from "./UseeState";
import UseeMemo from "./UseeMemo";
import UseeCallback from "./UseeCallback/UseeCallback";
import UseeEffect from "../ReactHooks/UseeEffect";

const ReactHooks = () => {
  return (
    <div>
      <UseeState />
      <UseeMemo />
      <UseeCallback />
      <UseeEffect />
    </div>
  );
};

export default ReactHooks;
