import React from "react";

const DecoratorFunction = () => {
    
  // It's a design pattern in which you modify the functionality of a function by covering it inside a wrapper.
    
  function heavy(x) {
    console.log(x + ":heavy");
    return x + ":heavy";
  }

  function memoized(fx) {
    let map = new Map();

    return function (x) {
      // wrapper
      if (map.has(x)) {
        return map.get(x);
      } else {
        let memoValue = fx(x);
        map.set(x, memoValue);
        return memoValue;
      }
    };
  }

  let memoizedHeavy = memoized(heavy);
  memoizedHeavy(2);
  memoizedHeavy(2); // take from cache
  return <div></div>;
};

export default DecoratorFunction;
