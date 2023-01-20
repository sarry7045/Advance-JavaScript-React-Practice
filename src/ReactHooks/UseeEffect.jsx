import React, { useEffect, useState } from "react";

const UseeEffect = () => {
  const [wiidht, setWidhth] = useState(window.screen.width);
  const actualWidhth = () => {
    setWidhth(window.innerWidth);
    console.log("innerWidth", window.innerWidth);
  };
  useEffect(() => {
    console.log("Created");
    window.addEventListener("resize", actualWidhth);
    return () => {
      // useEffect me Return use krne se woh chizo ko phirse repeat krta hai - Supposee setTimeout ko ek baar chalne k baad usko clear karna ho toh
      console.log("Deleted");
      window.removeEventListener("resize", actualWidhth);
    };
  });

  return (
    <div>
      <h4>{wiidht}</h4>
    </div>
  );
};

export default UseeEffect;
