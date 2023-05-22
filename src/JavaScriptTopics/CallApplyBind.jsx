import React from "react";

const CallApplyBind = () => {
  // suppose kisi function me hamne 2 parameter paas kiya hai , and ussi function me hame aur bhi 2 paramter chahiye jo dynamic aata ho
  // uske liye hum call apply or bind use krr sakte hai
  

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
  callApppBind.apply(user, ["Amboli", "20"]);
  // apply k case me bass extra values ko aaray me send krna hoota hai
  const pirntValues = callApppBind.bind(user, ["Amboli", "20"]);
  console.log("pirntValues", pirntValues);
  pirntValues();




  // Coder Dost Example
  const person = {
    name: "Sueaj",
    location: "Andheri",
  };
  function checkName() {
    return !!this.name;
  }
  console.log(checkName());

  const fx = checkName.bind(person);
  console.log(fx);

  return (
    <div>
      <h4>CallApplyBind</h4>
    </div>
  );
};

export default CallApplyBind;
