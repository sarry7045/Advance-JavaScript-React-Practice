import React, { Suspense, Profiler} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import accountReducer from "./Redux/Slices/AccountSlice";
// import bonusReducer from "./Redux/Slices/BonusSlice";
// import { adminApi } from "./Redux/Slices/AdminSlice";
import { store } from "./Redux/RealProjectStructure/Store";

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

// const store = configureStore({
//   reducer: {
//     account: accountReducer,
//     bonus: bonusReducer,
//     [adminApi.reducerPath]: adminApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(adminApi.middleware),
// });

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
        {/* <Provider store={store}> */}
        <Provider store={store}>
          <App />
        </Provider>
        {/* </Provider> */}
      </Profiler>
    </Suspense>
  </React.StrictMode>
);

// npx unimported - command for know unsed files and packages

// Trending Softwares for Frontend Dev in 2023-24:

// TypeScript       -    Good for Optimization
// ReactJs with Vite or NextJs -    UI Library
// ReduxToolKit     -    State Management (In Easy Way)
// SCSS             -    Better
// Material UI      -    Best for UI Components
// Axios            -    Best Features
// Formik           -    Best for Form Validation
// Framer-Motion and React-Spring   -    Best for Animations
// Jest or RTL      -    Good for Testing

// React-Query      -    Data Management
// React-Virtualised -    Data Listing


// React Optimization

// ReactLazy - Suspense
// useMemo
// useCallback
// React virtualized for data listing
// try Catch
// async await 
// ===
// Destructure array and object
// Object Chaining - .?
// Nullishing - ??


// Social Media App
// E - Commerce App
// Booking App
// Messaging App
// Video Streaming
 

