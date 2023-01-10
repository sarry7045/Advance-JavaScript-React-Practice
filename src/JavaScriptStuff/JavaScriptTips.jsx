import React from "react";

const JavaScriptTips = () => {


// Optional Chaining Object
  const user = {
    name: "Suraj",
    age: 22,
    address: {
      street: "St.Anthony",
      city: "City Mumbai",
      zip: 400058,
    },
    Bill: {
      company: "Adani",
    },
  };
  // console.log("Optional Chaining Object", user.address.area.road);
  console.log("Optional Chaining Object", user.address.area?.road);
  // Suppose hum koi aise value paas kr dete hai jo object me exist na karti hoo, soo uss time pe hum ? use karte hai taki wo erroe ki jagah undefined show kare
  // Optional Chaining Object



  // Optional Chaining Array
  const users = [
    {
      name: "Suraj",
      age: 22,
    },
    {
      name: "Allu",
      age: 18,
    },
    {
      name: "Neeraj",
      age: 20,
    },
  ];
  // users[3] hamare aaray me exist he nhi krta hai toh error throw kr dega uss condition me hum ? use krte hai tai wo error ki jagah undefined show kare
  // console.log("Optional Chaining Object", users[3].name);
  console.log("Optional Chaining Object", users[3]?.name);
  // Optional Chaining Array

  
  
  
  
  // Nulish
  const myValue = "";
  const myNumber = myValue || 10;
  const myNumber1 = myValue ?? 20;

  // if hum ?? ka use krte hai toh suppose agar myValue ka koi value define nhii kiya gaya hai toh wo wahi value ko prinmt karega jo empty bheja gaya hai but || me wo
  // if value empty hai toh dusra wala value print krr deta hai

  console.log("myNumber", myNumber);
  console.log("myNumber1", myNumber1);
  // Nulish



// Window.Open
  
  function windowOpenn() {
    window.open("https://surajyadav.vercel.app/","","widht=500px, height=200px")
  }



  // Location
  console.log("Locationn", window.location)
  
  

  // History
  console.log("Historyy", window.history.location)



  






  
  
  
  

  return (
    <div>
      <h6>JavaScriptTips</h6>
      <button onClick={windowOpenn}>New window Open</button>
    </div>
  );
};

export default JavaScriptTips;
