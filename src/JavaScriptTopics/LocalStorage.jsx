import React from "react";

const LocalStorage = () => {
  const users = { Name: "Suraj", Roll: 12 };

  localStorage.setItem("Users", JSON.stringify(users));
  console.log("Userss", users);

  let key = prompt("Enter Key you want to set");
  let value = prompt("Enter Value you want to set");

  localStorage.setItem(key, value);

  console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

  if (key === "red" || key === "orange") {
    localStorage.removeItem(key);
  }

  if (key === 0) {
    localStorage.clear();
  }
  return (
    <div>
      <h4>LocalStorage</h4>
    </div>
  );
};

export default LocalStorage;
