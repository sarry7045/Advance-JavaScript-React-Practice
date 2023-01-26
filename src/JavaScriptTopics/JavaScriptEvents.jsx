import React from "react";

const JavaScriptEvents = () => {
  // PreventDefault - It's Changed the Default Behaviour.

  const foocuss = () => {
    document.getElementById("heading").style.backgroundColor = "#e2e2e2";
  };

  const updateText = () => {
    document.getElementById("text");
    let data = document.getElementById("heading").value;
    document.getElementById("text").innerHTML = data;
  };

  // let img = document.getElementById("image1")

  window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Tree Created");
  });
  // If apne page parr koi heavy content hota hai so pehle ye DOMContentLoaded event load hota hai then Load event fire hota haiu
  window.addEventListener("load", function () {
    console.log("DOM Fully Loaded");
  });

  return (
    <div>
      <h4>JavaScriptEvents</h4>
      <input type="text" onFocus={foocuss} id="heading" onKeyUp={updateText} />
      <p id="text"> Dummy Text</p>

      {/* <img
        width="500"
        id="image1"
        src="https://images.pexels.com/photos/13072621/pexels-photo-13072621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      /> */}
    </div>
  );
};

export default JavaScriptEvents;
