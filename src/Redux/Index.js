import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(logger.default));

// applyMiddleware - Dispatch krne se pehle or koi Action ko bhjene se pehle koi event karna hua so tab hum middleware use krte hai
// Redux thunk - Suppose hame dispatch krne se pehle api se koi data catch krna hai uss situation me hum miidleWare ( thunk ) use krte hai

function reducer(state = { amount: 1 }, action) {
  if (action.type === "Increment") {
    return { amount: state.amount + 1 };
  }
  if (action.type === "Decrement") {
    return { amount: state.amount - 1 };
  }
  if (action.type === "IncrementbyAmmount") {
    return { amount: state.amount + action.paylaod };
  }
  return state;
}

// console.log("Store1", store.getState());

// store.dispatch({ type: "Increment" });

// console.log("Store2", store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

// action Creators

function Increment() {
  return { type: "Increment" };
}

function Decrement() {
  return { type: "Decrement" };
}
function IncrementbyAmmount(value) {
  return { type: "IncrementbyAmmount", paylaod: value };
}

setInterval(() => {
  store.dispatch(IncrementbyAmmount(5));
}, 2000);
