import React, { Suspense, Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Redux/Slices/AccountSlice";
import bonusReducer from "./Redux/Slices/BonusSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
  });
}

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
  },
});
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div>
          <h4> Loading...</h4>
        </div>
      }
    >
      <Profiler id="React Functionality" onRender={onRender}>
        <Provider store={store}>
          <App />
        </Provider>
      </Profiler>
    </Suspense>
  </React.StrictMode>
);

// npx unimported - command for know unsed files and packages
