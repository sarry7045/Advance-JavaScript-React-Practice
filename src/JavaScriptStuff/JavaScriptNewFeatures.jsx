import React from "react";

const JavaScriptNewFeatures = () => {
    
  const num = 1_000_000;
  console.log(num); // Output: 1000000

  // Optional Chaining
  const user = {
    name: "John",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
    },
  };
  console.log(user.address?.state); // "CA"
  console.log(user.address?.country?.name); // undefined

  // Nulish
  const foo = null ?? "default value";
  console.log(foo); // "default value"
  const bar = 0 ?? "default value";
  console.log(bar); // 0

  return (
    <div>
      <h4>JavaScriptNewFeatures</h4>
    </div>
  );
};

export default JavaScriptNewFeatures;
