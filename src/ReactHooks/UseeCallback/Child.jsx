import React, { memo } from "react";

const Child = ({someFunction, count}) => {
  console.log("Child Components");
  return <div></div>;
};

export default memo(Child);
