import React, { useContext } from "react";
import globalContext from "./ReactHooks/UseeContext";

const Home = () => {
  const contextValue = useContext(globalContext);
  return (
    <div>
      <h4>Advance-JS-{contextValue}</h4>
      <progress value={null} />
    </div>
  );
};

export default Home;
