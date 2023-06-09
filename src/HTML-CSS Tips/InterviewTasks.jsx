import React from "react";
import "./CSSTricks.css"

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
    </>
  );
};

export default InterviewTasks;
