import React, { useState, useDeferredValue } from "react";

const UseeDeferred = () => {
  // with the use of useDeferredValue hook , we can improve our web performance

  // suppose hume ek he sath me multiple task krna hai - like if hume koi product search krna hai,
  //  soo wo background me search bhi hoote rahe and humm input me type bhi krte rahe

  // concluion - high priority task complete first

  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  return (
    <div>
      <label>
        Search albums:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>

      <input type="text" query={deferredQuery} />
    </div>
  );
};

export default UseeDeferred;
