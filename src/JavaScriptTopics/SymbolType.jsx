import React from "react";

const SymbolType = () => {
  // With the use of Symbol - We can create the unique value with same data

  var a = Symbol("Hi");
  var b = Symbol("Hi");
  console.log(a === b); //false
  console.log(typeof a); //symbol

  // and when we have to access Symbol data we can't access like (user.name), in sybmbol case we can access like this (user[name])

  return <div></div>;
};

export default SymbolType;
