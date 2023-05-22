import React from "react";

const Debouncing = () => {
  // Suppose koi user kisi button pe 1 second me multiple times click karta hai and ussi button pe multiple times API bhi calls hore hai, then ussi chiz ko stop
  // krne k liye hum debouncing use krte hai
  // condition apply  -    ki user button kitne baar bhi click kare but api call after every harr 3 seocond baad he hoga

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
        func.apply(context, args);
      }, delay);
    };
  };

  const betterFunction = doSomeLogic(getData, 1000);

  const array = [1, 2, 3];

  return (
    <div>
      <h4>Debouncing</h4>
      <input type="text" onKeyUp={betterFunction} />
      <div>
        {array.map((element, index) => {
          console.log("index",index)
          const isFirstElement = index === 0;
          const isLastElement = index === array.length - 1;
          const classNames = [""];
          if (isFirstElement) {
            classNames.push("first");
          }
          if (isLastElement) {
            classNames.push("last");
          }

          return (
            <div key={index} className={classNames.join("")}>
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Debouncing;
