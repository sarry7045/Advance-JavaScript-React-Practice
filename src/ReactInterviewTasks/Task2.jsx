import React, { useState } from "react";

const options = ["cricket", "footbal", "hockey"];
const days = ["weekdays", "weekends"];

const Task2 = () => {
  const [radioValue, setradioValue] = useState();
  const [dayss, setdayss] = useState();
  return (
    // Select one Sport and one Days and print in one line
    <>
      <h4>Select Sport</h4>
      {options.map((item) => (
        <>
          <input
            type="radio"
            name="options"
            value={item}
            onChange={(e) => setradioValue(e.target.value)}
          />
          <label> {item}</label>
        </>
      ))}
      <div>
        <h4>Select Days</h4>
        {days.map((item) => (
          <>
            <input
              type="radio"
              name="days"
              value={item}
              onChange={(e) => setdayss(e.target.value)}
            />
            <label> {item}</label>
          </>
        ))}

        <h5>
          {radioValue} on {dayss}
        </h5>
      </div>
    </>
  );
};

export default Task2;
