import React from "react";

const CallBackFunction = () => {
  // wo function jisme hum kiss ek function me dusre function ko as a argument pass krte hai

  // Example 1
  function showw(number) {
    return number + 10;
  }

  function displayy(calblBack) {
    return calblBack(50);
  }
  console.log("callBack", displayy(showw));

  // Example 2
  const arrayy = [3, 2, 4, 1, 5];
  function sortArray(array, logicc) {
    array.sort((a, b) => a - b);
    logicc();
  }

  function logicc() {
    console.log(arrayy);
  }

  sortArray(arrayy, logicc);
  return <div></div>;
};

export default CallBackFunction;
