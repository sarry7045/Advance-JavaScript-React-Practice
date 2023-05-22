import React, { useState } from "react";

const GeneratorFunction = () => {

  // Ye aise functions hote hai jisko hum pause or resume kar paate hai
  // Suppose we have one function jiske under 50 lines hai , soo isme hum 10 line chala k then pause karke thenn phirse 10 line chala pause kara sakte hai

  function* simpleGenerator() {
    let x = 10;
    yield "First Step";

    yield x;

    let y = "Second Step";
    yield y;

    console.log("Function Called");
  }

  let funcc = simpleGenerator();
  console.log(funcc.next());
  console.log(funcc.next());
  console.log(funcc.next());



  // Genetrate Random Number Using Generator Function

  const [value, setValue] = useState();

  function* newId() {
    let i = 100;
    while (true) {
      i++;
      yield i;
    }
  }

  let sgg = newId();

  const uniqeId = () => {
    setValue(sgg.next().value);
  };


  return (
    <div>
      <h1>{value}</h1>
      <button onClick={uniqeId}>Clickk </button>
    </div>
  );
};

export default GeneratorFunction;
