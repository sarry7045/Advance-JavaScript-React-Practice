import React from "react";
import ArgumentObject from "./ArgumentObject";
import ArrayMethods from "./ArrayMethods";
import CallApplyBind from "./CallApplyBind";
import CallBackFunction from "./CallBackFunction";
import Closure from "./Closure";
import DeepShallowCopy from "./DeepShallowCopy";
import FunctionCurrying from "./FunctionCurrying";
import HigherOrderFunction from "./HigherOrderFunction";
import EventDelegation from "./EventDelegation";
// import EventBublingCapturing from "./EventBublingCapturing";

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
      <EventDelegation />
      {/* <EventBublingCapturing /> */}
    </div>
  );
};

export default JavaScripts;
