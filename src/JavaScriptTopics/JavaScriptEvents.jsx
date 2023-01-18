import React from "react";

const JavaScriptEvents = () => {
  const foocuss = () => {
    document.getElementById("heading").style.backgroundColor = "#e2e2e2";
  };

  const updateText = () => {
    document.getElementById("text");
    let data = document.getElementById("heading").value;
    document.getElementById("text").innerHTML = data;
  };

  return (
    <div>
      <h4>JavaScriptEvents</h4>
      <input type="text" onFocus={foocuss} id="heading" onKeyUp={updateText} />
      <p id="text"> Dummy Text</p>
    </div>
  );
};

export default JavaScriptEvents;
