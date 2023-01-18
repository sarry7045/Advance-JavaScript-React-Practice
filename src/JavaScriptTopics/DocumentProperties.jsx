import React from "react";

const DocumentProperties = () => {
  // document.getElementById  only for cathing ID
  // document.querySelector
  // document.addEventListener   Catching Events
  // document.dispatchEvent
  // document.createElement

  // querySelector sirf first Element ko he acces karega and changes karega
  // querySelectorAll se hum saare ek he name k class ko access krr sakte hai

  document.addEventListener("");

  // document Body k under jitne bhi content hai usko access krr sakta hai and saare changes bhi kar sakta hai
  // but out of document access krne k liye hum BOM (Window) use krte hai
  return <div></div>;
};

export default DocumentProperties;
