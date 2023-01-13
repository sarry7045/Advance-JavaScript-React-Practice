import React from "react";

const LocalStorage = () => {
  const users = { Name: "Suraj", Roll: 12 };

  localStorage.setItem("Users", JSON.stringify(users));
  console.log("Userss", users);
  return (
    <div>
      <h4>LocalStorage</h4>
    </div>
  );
};

export default LocalStorage;
