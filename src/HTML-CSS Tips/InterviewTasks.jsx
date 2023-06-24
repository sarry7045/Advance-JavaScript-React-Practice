import React from "react";
import "./CSSTricks.css";

const InterviewTasks = () => {
  // FlipKart Basic Skeleton
  return (
    <>
      <form>
        <label for="username">Username:</label>
        <input name="username" type="text" value="" />

        <label for="username">Username:</label>
        <input name="username" type="text" value="" />

        <input type="submit" value="submit" />
      </form>

      {/* Center the dicv */}
      <div className="parent">
        <div className="child"></div>
      </div>

      {/* Inline Block Inline Block */}

      <div className="containerr">
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
      </div>

      {/* Responisve Div */}

      <div className="maindiv">
        <div className="mainchild"></div>
        <div className="mainchild"></div>
        <div className="mainchild"></div>
        <div className="mainchild"></div>
        <div className="mainchild"></div>
      </div>
    </>
  );
};

export default InterviewTasks;
