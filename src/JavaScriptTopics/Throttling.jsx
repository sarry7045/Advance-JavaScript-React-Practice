import React from "react";

const Throttling = () => {
  const normalDiv = document.querySelector("nCount");
  const throttleDiv = document.querySelector("tCount");

  let count = 0;
  let tCount = 0;
  let isScrolling = true;

  const normalCount = () => {
    count++;
    normalDiv.innerHTML = `${count}`;
  };

  const throttleCount = () => {
    if (isScrolling === true) {
      tCount++;
      throttleDiv.innerHTML = `${count}`;
      isScrolling = false;

      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    }
  };
  const showCount = () => {
    normalCount();
    throttleCount();
  };

  return (
    <div>
      <h1 id="nCount">Throttling</h1>
    </div>
  );
};

export default Throttling;
