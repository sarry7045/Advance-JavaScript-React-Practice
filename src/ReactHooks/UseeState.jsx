import React, { useState } from "react";

const UseeState = () => {



  // Exmaple 1
  const [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1);
  };
  // Performance - isse kya hota hai ki state ki jo current value hai uske aage se wo continue krta hai
  const asyncIncrease = () => {
    setTimeout(() => {
      setNumber((prev) => prev + 1);
    }, 2000);
  };
    
    
    

  // Example 2
  //   const [user, setUser] = useState({
  //     name: "Suraj",
  //     email: "Suraj@gmail.com",
  //   });
  //   const [input, setInput] = useState("");

  //   const changeUser = () => {
  //     setUser((prev) => ({ ...prev, name: input }));
  //   };
  //     console.log("userr", user);
    
    
    

  // Example 3
  const [details, setDetails] = useState({ firstName: "", lastName: "" });

  const changeDetails = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
    console.log("detailss", details);
    


  return (
      <>
          {/* Example 1 */}
      <h4>useState Hook</h4>
      <button onClick={Increase}> Increase</button>
      <button onClick={asyncIncrease}> Async Increase</button>
      <p>{number}</p>

      {/* Example 2 */}
      {/* <div>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={changeUser}> Change User</button>
        <h4>{user}</h4>
      </div> */}

      {/* Example 3 */}
      <div>
        <input type="text" onChange={changeDetails} name="firstName" />
        <input type="text" onChange={changeDetails} name="lastName" />
      </div>
    </>
  );
};

export default UseeState;
