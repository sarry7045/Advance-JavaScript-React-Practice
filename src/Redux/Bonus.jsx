import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./Slices/BonusSlice";

const Bonus = () => {
  const bonus = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch(increment())}>Increment Bonus</button>
        {bonus}
      </div>
    </>
  );
};

export default Bonus;
