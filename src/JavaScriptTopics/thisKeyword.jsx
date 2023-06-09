import React from "react";

const thisKeyword = () => {


    // this keyword refers to the context in which a function is executed

  let counter = createCounter();

  function createCounter() {
    return {
      count: 0,
      increment: function () {
        counter.count++;
      },
    };
  }

  counter.increment(); //1
  counter.increment(); //2
  counter.increment(); //3
    counter.increment(); //4
    



  // But suppose we have create the copy of createCounter

  let counter1 = createCounter();

  counter1.increment(); //0
  counter1.increment(); //0
  counter1.increment(); //0
  counter1.increment(); //0

  // Solution
  // this keyboard is refer the perticular object jo filal hum use karr rahe hai

  function createCounter() {
    return {
      count: 0,
      increment: function () {
        this.count++;
      },
    };
  }

  return <div></div>;
};

export default thisKeyword;
