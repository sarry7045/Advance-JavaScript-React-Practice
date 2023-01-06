import React from "react";

const ArgumentObject = () => {
  // Create a function jo hame multiple numbers add krke dede at that time we can use ArgumentObject
  // Hum kisi function me paramter se bhi add karwa sakte hai but , jitna number of parameter paas karenge utna he quanitity add karr payenge

  function addtion(a, b) {
    return a + b;
  }
  console.log("Addition", addtion(10 + 10));

  // Solution

  function multipleAddition() {
    if (arguments.length === 0) {
      console.log("No Arguments");
    } else {
      let sum = 0;
      for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
      }
      console.log(sum);
    }
  }
  multipleAddition(10, 10, 40);

  return (
    <div>
      <h4>ArgumentObject</h4>
    </div>
  );
};

export default ArgumentObject;
