import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseeCallback = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  const someFunction = useCallback(() => {
    //   Some Operation
  }, []);

  // Suppose hume kisi specific state change pe ye function chalana hai uss case me hum ek dependency daal sakte hai

  return (
    <div>
      <Child someFunction={someFunction} count={count} />
      {/* If hum child Component ko memo me rap krde toh baar baar click pe wo render nhi hooga but
          jese he hum child Component ko kuch props paas karenge wese he phirse wo re rendeer hona chalu ho jayga */}
      {/* usss case k liye hum useCallback use krte hai */}
      <h4> useCallback</h4>
      <button onClick={() => setAdd(add + 1)}> Increment</button>
      <p> {add}</p>
      <br />
      <button onClick={() => setCount(count + 1)}> Count</button>
      <p> {count}</p>
    </div>
  );
};

export default UseeCallback;
