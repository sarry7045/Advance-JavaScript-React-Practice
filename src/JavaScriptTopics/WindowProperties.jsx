import React from "react";

const WindowProperties = () => {
  //   Window Location
  console.log("location", window.location);

  //   Window Navigator
  console.log("Navigator", navigator);
  // Using Navigator we can access multiple things like = Browser details , Network Details , Some PC Details

  //   Window Screen
  console.log("screeen", window.screen);

  //   Window History
  console.log("history", window.history);
  function goBack() {
    window.history.back();
  }

  function goForward() {
    window.history.forward();
  }

  // var queryString = window.location.search
  // var urlParam = new URLSearchParams(window.location.search)

  return (
    <div>
      <h4>Window Properties</h4>
      <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button>
    </div>
  );
};

export default WindowProperties;
