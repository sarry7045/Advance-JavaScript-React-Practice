import React, { useMemo, useState } from "react";

const UseeMemo = () => {
  // Suppose hum kisi ek page me multipe functions likh rahe hai and 2nd function ka 4th function se koi connection nhi hai but phir bhi woh
  // function call hota hai because wo same page me hai.

  // For Stopping that unnecessary Calls we use - useMemo

  // dependncy me wo value rahega jiss value k change pe wo function call karna hai

  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);

  const multiply = useMemo(() => {
    console.log("Multiplyy is calling..");
    return add * 10;
  }, [add]);
  return (
    <div>
      <h4>Use Memo Hook</h4>
      {multiply}
      <br />
      <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <p>{add}</p>
      <br />
      <button onClick={() => setSub(sub - 1)}>Subsctraction</button>
      <p>{sub}</p>
    </div>
  );
};

export default UseeMemo;
