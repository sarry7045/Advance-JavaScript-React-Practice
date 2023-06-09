import React from "react";
import childPage from "./childPage";
import { finalComp } from "./childPage";

const MainPage = () => {
  return (
    <div>
      <h4>Main Page</h4>
      <childPage />
      <finalComp />
    </div>
  );
};

export default MainPage;
