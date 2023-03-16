import React, { useEffect } from "react";

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
  console.log("Optional Chaining Object", user.address.area?.road); //Optional Chaining
  // Suppose hum koi aise value paas kr dete hai jo object me exist na karti hoo, soo uss time pe hum ? use karte hai taki wo error ki jagah undefined show kare
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
  console.log("Optional Chaining Object", users[3]?.name); //Optional Chaining  
  // Optional Chaining Array

  
  
  
  // Nulish
  const myValue = "";
  const myNumber = myValue || 10;
  const myNumber1 = myValue ?? 20; //null coalescing operator

  // if hum ?? ka use krte hai toh suppose agar myValue ka koi value define nhii kiya gaya hai toh wo wahi value ko prinmt karega jo empty bheja gaya hai but || me wo
  // if value empty hai toh dusra wala value print krr deta hai

  console.log("myNumber", myNumber);
  console.log("myNumber1", myNumber1);

  let height = 0;
  console.log(height || 100); // 100
  console.log(height ?? 100); // 0
  // Nulish



// Window.Open
  
  function windowOpenn() {
    window.open("https://surajyadav.vercel.app/","","widht=500px, height=200px")
  }



  // Location
  console.log("Locationn", window.location)

  

  // History
  console.log("Historyy", window.history.location)


  
  // Convert String to Number and Number to String
  const theString = "12345"
  console.log("theString", +theString)

  

  
  // Get Location
  const getLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        console.log("latitude, longitude",latitude, longitude)
      })
    } catch (error) {
      console.log(error)
    }
  }
  console.log("window Location", window.navigator.ge)

  useEffect(() => {
    getLocation()
  })



  // console in better format
  const dataa = [{ "City": "Mumbai"}, {"City":"Banglore"},{"City":"Hyderabad"}]
  console.table(dataa)




  // Faster API Request
  // When we call multiple API at a time -  All 3 API's calling in same time because of Promise.all
  //   const parentFunction = async () => {
  //   const categoriers = await fetch("").then((response) => response.json())
    
  //   const proudct = await fetch("").then((response) => response.json())
    
  //   const users = await fetch("").then((response) => response.json())

  //   return Promise.all([categoriers, proudct, users])
  // }
  // parentFunction.then((data) => console.log(data))



  
  // Object Trick
  const person = { name: "Suraj", age: 22 }
  console.log("ObjectKeys",Object.keys((person)))
  console.log("ObjectKeys",Object.values((person)))
  



  // Sorting
  const arryy = [1, 3, 4, 2, 1]
  arryy.sort((a,b) => {
    return a -b
  })
  console.log("arryy", arryy)
  // Letters
  const stringArr = ["adc", "aaa", "acb"]
  stringArr.sort((a,b) => {
    return (a>b) - (a<b)
  })




  // OTP
  const OTP = Math.random()
  console.log("OTP", OTP)
  const ReaLOTP = Math.round(OTP * 90000 + 1000)
  console.log("ReaLOTP", ReaLOTP)




  // Object Distrucring - Nested
  const personn = { name: "Suraj", age: 22, roll: { ID: 100 } }
  const { name, age, roll: { ID: UniqueID } } = personn
  console.log("Object Distrucring", name, age, UniqueID)
  // But in case of aaray sequence is matter


  
  
  // Always use these way for dynamic Parameter.
  function abcd(from){
  console.log(from ?? "Text Not Givenn")
  }
  abcd()



  // check isDate Valid or Not
  const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf())
  console.log(isDateValid("December 17, 1999 03:24:00"))




  // Clear all Cookies
  const clearALlCookies = document.cookie.split(';').forEach((cookie) => {
    document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`)
  })  
  console.log("Remoove Cookie", clearALlCookies)




  
  // Convert Array to Object
  const arrayData = [['a', 1], ['b', 2], ['c', 3], ['d', 4]]
  const ArrayData = (arr) => {
    return Object.fromEntries(arr)
  }
  console.log("ArrayData(arrayData)", ArrayData(arrayData))



  
  
  // Suppose we need to remove null and undefined values form our object
  const obj = {
    a: 1,
    b: null,
    c: "hello",
    d: undefined
  }
  const newObj = Object.fromEntries(Object.entries(obj).filter((_, val) => val != null))
  console.log("newObj", newObj)
  



  // Console Types
  const namee = "Suraj"
  const SurName = "Yadav"
  const ID = "470545"
  const userss = {
    namee, SurName, ID
  }
  console.log({ namee, SurName, ID })
  console.table(userss)
  try {
  if (namee === "Surr") {
    return true
    }
  } catch (error) {
  console.error(error)
  }


  return (
    <div>
      <h6>JavaScriptTips</h6>
      <button onClick={windowOpenn}>New window Open</button>
      <button onClick={getLocation()}>Location Permission</button>
    </div>
  );
};

export default JavaScriptTips;
