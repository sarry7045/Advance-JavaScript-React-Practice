import React from "react";

const EventDelegation = () => {
  // Event Delegation is a pattern based upon the concept of Event Bubbling.It is an event - handling pattern that allows
  // you to handle events at a higher level in the DOM tree other than the level where the event was first received.

  document.querySelector("#category");
  document.addEventListener("click", (e) =>
    console.log("Categoty Cliccked", e.target)
  );

  document.querySelector("#form");
  document.addEventListener("keyup", (e) => {
    console.log(e);
    if (e.target.dataset.uppercase !== undefined) {
      e.target.value = e.target.value.toUpperCase();
    }
  });

  return (
    <>
      <ul id="catergory">
        <li id="shoes">Shoes</li>
        <li id="laptop">Laptop</li>
        <li id="bags">Bags</li>
      </ul>
      <div id="form">
        <input type="text" id="name" data-uppercase></input>
      </div>
    </>
  );
};

export default EventDelegation;
