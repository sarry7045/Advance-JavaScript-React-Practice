import React from "react";

const FunctionCurrying = () => {
  const sum = (a) => (b) => (c) => a + b + c;
  const add = sum(5)(10)(20);
  console.log("FunctionCurrrying", add);
  return <div></div>;
};

export default FunctionCurrying;
