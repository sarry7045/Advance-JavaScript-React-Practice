import React from "react";

const HigherOrderFunction = () => {
  // Aise function jo kisi dusre function ko as a argument accept karte ho - Higher Order Function
  // Aise function jo kisi dusre function k undar as a argument paas hote ho - CallBack Fucntion

  // Example 1

  const summ = (a, b) => {
    return a + b;
  };
  // This is callBack function

  function combinee(num1, num2, logical) {
    return logical(num1, num2);
  }
  // This is higher orderFunction

  console.log("HigherOrderFunction", combinee(10, 15, summ));

  // Example 2

  const multiply = (a, b) => {
    return a * b;
  };

  function mulLogic(num1, num2, Operator) {
    return Operator(num1, num2);
  }

  console.log("HigherOrderFunction2", mulLogic(10, 10, multiply));
  return <div></div>;
};

export default HigherOrderFunction;
