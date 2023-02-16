import React, { useState } from "react";
const tasks = ["Play Cricket", "Play Video Game", "Read Book"];

const Task3 = () => {
  const [arrayCopy, setarryCopy] = useState(tasks);
  const [isEnabled, setisEnabled] = useState(false);
  const [currIndex, setcurrIndex] = useState();

  const handleDelete = (itemIndex) => {
    const newArr = arrayCopy;
    const filteredArray = newArr.filter((el, i) => {
      return i !== itemIndex;
    });
    setarryCopy(filteredArray);
  };

  const handleCheck = (indexItem) => {
    setisEnabled(true);
    setcurrIndex(indexItem);
  };
    
  return (
    // Print all with map method , then if user click on check box then we need to show the delethe button , also delete functionality for each
    <>
      <ul>
        {arrayCopy.map((item, index) => (
          <li>
            <input
              type="checkbox"
              onChange={() => {
                handleCheck(index);
                console.log(index);
              }}
            />
            {item}
            {isEnabled && currIndex === index ? (
              <button onClick={() => handleDelete(index)}>Delete Item</button>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Task3;
