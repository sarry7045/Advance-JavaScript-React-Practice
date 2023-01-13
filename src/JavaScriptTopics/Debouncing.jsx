import React from "react";

const Debouncing = () => {
  // suppose koi user kisi button pe 1 second pe multiple times click karta hai and ussi button pe multiple times api calls hore hai, then ussi chiz ko kamm
  // krne k liye hum debouncing use krte hai
  // hum ek condition laga dete hai ki user button kitne baar bhi click kare but api call after every 3 seocond baad he hoga

  let counter = 0;

  const getData = () => {
    console.log("API Calling", counter++);
  };

  const doSomeLogic = (func, delay) => {
    let timerr;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timerr);
      timerr = setTimeout(() => {
        getData.apply(context, args);
      }, delay);
    };
  };

  const betterFunction = doSomeLogic(getData, 300);
  return (
    <div>
      <h4>Debouncing</h4>
      <input type="text" onKeyUp={betterFunction} />
    </div>
  );
};

export default Debouncing;
