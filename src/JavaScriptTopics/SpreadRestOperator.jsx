import React from "react";

const SpreadRestOperator = () => {
  // Spread Opearator
  const arr = [1, 2, 3, 4, 5];
  const updatedArrayy = [...arr, 6, 7, 8];
  console.log("updatedArrayy", updatedArrayy);

  // Rest Operator
  // We can paas parameter like spread soo we can give the multiple arguments to summ and calculate the total.

  const sum = (...numbers) => {
    let total = 0;
    numbers.forEach((n) => {
      total += n;
    });
    console.log("total", total);
  };

  sum(10, 67, 43);

  return <div></div>;
};

export default SpreadRestOperator;
