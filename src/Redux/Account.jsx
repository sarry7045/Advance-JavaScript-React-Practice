import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount ,fetchUserById} from "./Slices/AccountSlice";

const Account = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const amount = useSelector((state) => state.account.amount);

  return (
    <>
      <button onClick={() => dispatch(increment())}>Incremen</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      Ammount: {amount}
      <br />
      <input type="text" onChange={(e) => setValue(+e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(value))}>
        Increment by {value}
          </button>
          <button onClick={() => dispatch(fetchUserById(1))}>
        Get User
      </button>
    </>
  );
};

export default Account;
