import React from "react";

const Closure = () => {

  function variableFunc() {
    let name = "Suraj";
    function variableFun() {
      let name = "Neeraj";
      console.log("variableFunc1", name);
    }
    console.log("variableFunc", name);
    variableFun();
  }
  variableFunc();
  
  return <div></div>;
};

export default Closure;
