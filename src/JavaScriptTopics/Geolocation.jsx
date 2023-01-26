import React from "react";

const Geolocationn = () => {
  console.log(navigator);

  function gettLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation Not Supported ");
    }
  }

  function showPosition(position) {
    console.log("Postion", position);
    console.log("Latitude", position.coords.latitude);
    console.log("Longitude", position.coords.longitude);
  }
  return (
    <div>
      <h5>Geolocation</h5>
      <button onClick={() => gettLocation()}>Get Location</button>
    </div>
  );
};

export default Geolocationn;
