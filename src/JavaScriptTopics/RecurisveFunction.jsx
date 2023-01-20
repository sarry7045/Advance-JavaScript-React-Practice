import React from "react";

const RecurisveFunction = () => {
  let counter = 1;
  function demo(number) {
    if (counter > number) {
      return;
    }
    console.log("Hello Recursive", counter);
    counter++;
    demo(number);
  }
  demo(10);
  return <div></div>;
};

export default RecurisveFunction;
