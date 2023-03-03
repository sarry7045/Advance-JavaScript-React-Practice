import React, { useId } from "react";

const UseeID = () => {
  // Basicallly useId hook generate unique id  , soo we can use in any labels or input for identify

  // Do not call useId to generate keys in a list.
  const uniqueID = useId();
  return (
    <div>
      <form>
        <label htmlFor={uniqueID + "-firstName"}>First Name:</label>
        <input id={uniqueID + "-firstName"} type="text" />
        <hr />
        <label htmlFor={uniqueID + "-lastName"}>Last Name:</label>
        <input id={uniqueID + "-lastName"} type="text" />
      </form>
    </div>
  );
};

export default UseeID;
