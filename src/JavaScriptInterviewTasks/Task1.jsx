import React from "react";

const Task1 = () => {


    
  // Task 1
  const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
  const input2 = { a: 2, b: 12, c: 6, d: 10 };

  // Output we need = { d: 10, e:12 }

  function func(inp1, inp2) {
    const obj = {};
    for (let i in inp1) {
      console.log(i);
      if (inp1[i] === inp2[i]) {
        obj[1] = inp1[i];
      }
    }
    return obj;
  }

    console.log(func(input1, input2));
    


  // Task 2

  const str = "This is Javscript Code";
  const spil = str.split(" ");
  console.log(spil);

  const revereseAray = spil
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
    console.log(revereseAray);

    


  // Task 3

  const inputt = [1, 2, -2, 7, 11, 1];

  function secondHighest(inp) {
    let arr = [...new Set(inp)].sort((a, b) => a - b);
    return arr[arr.length - 2];
  }

    console.log(secondHighest(inputt));
    


  return (
    <div>
      <h4> Task 1</h4>
    </div>
  );
};

export default Task1;
