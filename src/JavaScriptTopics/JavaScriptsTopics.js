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
import Debouncing from "./Debouncing";
import LocalStorage from "./LocalStorage";
import WindowProperties from "./WindowProperties";
import DocumentProperties from "./DocumentProperties";
import SpreadRestOperator from "./SpreadRestOperator";
import JavaScriptEvents from "./JavaScriptEvents";
import Prototype from "./Prototype";
import RecurisveFunction from "./RecurisveFunction";
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
      <Debouncing />
      <LocalStorage />
      <WindowProperties />
      <DocumentProperties />
      <SpreadRestOperator />
      <JavaScriptEvents />
      <Prototype />
      <RecurisveFunction />
      {/* <EventBublingCapturing /> */}
    </div>
  );
};

export default JavaScripts;
