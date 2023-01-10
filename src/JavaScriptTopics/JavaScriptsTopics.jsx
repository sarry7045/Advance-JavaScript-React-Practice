import React from "react";
import ArgumentObject from "./ArgumentObject";
import ArrayMethods from "./ArrayMethods";
import CallApplyBind from "./CallApplyBind";
import CallBackFunction from "./CallBackFunction";
import Closure from "./Closure";
import DeepShallowCopy from "./DeepShallowCopy";
import FunctionCurrying from "./FunctionCurrying";
import HigherOrderFunction from "./HigherOrderFunction";

const JavaScripts = () => {
  return (
    <div>
      <ArgumentObject />
      <ArrayMethods />
      <CallApplyBind />
      <CallBackFunction />
      <Closure />
      <DeepShallowCopy />
      <FunctionCurrying />
      <HigherOrderFunction />
    </div>
  );
};

export default JavaScripts;
