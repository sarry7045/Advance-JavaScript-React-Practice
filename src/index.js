import React, { Suspense, Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

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
        <App />
      </Profiler>
    </Suspense>
  </React.StrictMode>
);

// npx unimported - command for know unsed files and packages
