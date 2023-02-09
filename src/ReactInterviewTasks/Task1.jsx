import React, { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "England",
    value: "ENG",
    cities: ["London", "Ireland"],
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dhaka", "Chittagong"],
  },
];

const Task1 = () => {
  const [valueCountry, setValueCountry] = useState({
    name: "",
    value: "",
    cities: [],
  });

  return (
    // When user's select any country then we need wo show that country capital in second dropdown
    <>
      <div>
        <select
          value={valueCountry}
          onChange={(e) => {
            console.log(e.target.value);
            setValueCountry(e.target.value);
          }}
        >
          {countries.map((item, index) => {
            return <option value={index}>{item.name}</option>;
          })}
        </select>
      </div>

      <div>
        <select value={valueCountry}>
          {countries[valueCountry].cities.map((item, index) => {
            return <option value={index}>{item}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default Task1;
