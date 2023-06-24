import React from "react";

const Observable = () => {
  // In simple words - If hum promise use krte hai and then jab woh prmoise resolve ho jata hai toh wo apne aap chal jata hai

  // But Observable k case me jab tak hum usko subscribe nhi karenge tab tak woh nhi chalega and after some time hum usko unsubscribe bhi kar sakte hai 
  // and isko hum multiple baar bhi chala sakte hai

  const obs = new Observable((obss) => {
    console.log("Obs Done");
    setTimeout(() => {
      obss.next("Yss Obs");
    }, 2000);
  });

  return <div></div>;
};

export default Observable;
