import React from "react";
// import "../App.css";
const EventBublingCapturing = () => {
  
  // In case me kisi child div ko click krne k baad parent div ka event bhi call ho jata hai soo usse unessary calls ko rokne k liye 
  // event.stopPropagation   use krte hai

  document.querySelector("#grandparent");
  document.addEventListener(
    "click",
    () => {
      console.log("Gransparent Clicked");
    },
    true
  ); //capturing


  document.querySelector("#parent");
  document.addEventListener(
    "click",
    (e) => {
        console.log("Parent Clicked");
        e.stopPropagation()
    },
    false
  ); //bubbling


  document.querySelector("#child");
  document.addEventListener(
    "click",
    () => {
      console.log("Child Clicked");
    },
    true
  ); //capturing
  return (
    <>
      <div id="grandparent">
        <div id="parent">
          <div id="child">
            <h4>EventBublingCapturing</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventBublingCapturing;
