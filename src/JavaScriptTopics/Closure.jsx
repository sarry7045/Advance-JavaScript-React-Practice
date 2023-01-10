import React from "react";

const Closure = () => {
  // agar hume kisi variable ka use sirf ek specific function k liye krna hai so wo variable hum ussi function ne bana k use kr sakte hai
  // then wo var ousite of that function hum use nhi kr sakte.

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
