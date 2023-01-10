import React from "react";

const HigherOrderFunction = () => {
  // Suppose 2 functions hai and seccond function me 1st function ko as a Argument paaas krna hai
  //     1st Function me main logic rahaega and seccond me usko as a parameter leke 2 num  k paramtere paas kareneg and
  //     then jaha calll krna hoga so main function ko usme wo logic wala function and rela number paas kar denge as a parameter

  // Example 1

  const summ = (a, b) => {
    return a + b;
  };

  function combinee(num1, num2, logical) {
    return logical(num1, num2);
  }

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
