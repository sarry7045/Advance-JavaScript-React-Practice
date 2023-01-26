import React from "react";

const Notification = () => {
  // const title = "Notification";
  // const description = "Hii i am first notification";

  function callNotification() {
    if (window.Notification) {
      if (window.Notification === "granted") {
        // let noti = new Notification(title, {
        //   icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/2048px-Speaker_Icon.svg.png",
        //   body: description,
        // });
      } else {
        window.Notification.requestPermission((prem) => {
          if (prem === "granted") {
            // let noti = new Notification(title, {
            //   icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/2048px-Speaker_Icon.svg.png",
            //   body: description,
            // });
          } else {
            alert("Please Allow Notification");
          }
        });
      }
    } else {
      console.warn("Your Browser Doesn't Support Notification");
    }
  }
  
  return (
    <div>
      <h4> Notification</h4>

      <button onClick={callNotification}> Get Notification</button>
    </div>
  );
};

export default Notification;
