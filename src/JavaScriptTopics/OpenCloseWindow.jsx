import React from "react";

const OpenCloseWindow = () => {
  var myWindow;
  function openWindow() {
    myWindow = window.open(
      "http://www.google.com",
      "",
      "width=500px, height=500px, left=200px, top=200px"
    );
  }
  function closeWindow() {
    myWindow.close();
  }
  return (
    <div>
      <h4>Open Close Window</h4>
      <button onClick={openWindow}>Open New Window</button>
      <button onClick={closeWindow}>Close New Window</button>
    </div>
  );
};

export default OpenCloseWindow;
