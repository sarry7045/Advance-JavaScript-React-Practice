import React from "react";

const CallApplyBind = () => {
  // suppose kisi function me hamne 2 parameter paas kiya hai and ussi function me hame aur bhi 2 paramter chahiye jo dynamic aata ho
  // uske liye hum call appyy or bind use krr sakte hai.CallApplyBind

  const callApppBind = function (address, room) {
    console.log(
      `Hello my name is ${this.name} and my roll no is ${this.roll} and i live in ${address} room ${room}`
    );
  };

  const user = {
    name: "Suraj",
    roll: 21,
  };
  callApppBind.call(user, "Amboli", "20");
  return <div></div>;
};

export default CallApplyBind;
