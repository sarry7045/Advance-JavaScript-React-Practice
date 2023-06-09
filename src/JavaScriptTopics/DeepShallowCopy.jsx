import React from "react";

const DeepShallowCopy = () => {

  // Techniqe of creating the copy of OBJ , but in shallow copy it does't affcet on nested obj thats y we use deep copy
  
  // Shallow Copy

  var ShallObj = {
    age: 1,
    gender: "Male",
    hobbies: ["Cricket, Football, Chess"],
  };

  var spreadShallObj = { ...ShallObj };
  spreadShallObj.age = "22";
  spreadShallObj.hobbies[0] = "Dancing";
  console.log("ShallObj,spreadShallObj", ShallObj, spreadShallObj);

  // Deep Copy

  var DeepObj = {
    age: 1,
    gender: "Male",
    hobbies: ["Cricket", "Footbal", "Chess"],
  };
  var DeepObj1 = JSON.parse(JSON.stringify(DeepObj));
  DeepObj1.age = "20";
  DeepObj1.hobbies[0] = "Codeing";
  console.log("DeepObj,DeepObj1", DeepObj, DeepObj1);

  // If kisi dynamic object ko change krna hai tabb or kisi dynamic object k key values k types ko change krne hai tab,
  // like koi value string me aa raha hai usko number me convert krr sakte hai.

  const deeepObj = {
    age: 1,
    gender: "male",
    hobbies: ["Cricket", "Footbal"],
    nickname: { funny: "Khur", good: "Sarry" },
  };

  const deeepObjStringify = JSON.parse(JSON.stringify(deeepObj));
  deeepObjStringify.age = 21;
  deeepObjStringify.hobbies[1] = "Vollyball";
  deeepObjStringify.nickname.funny = "Kullr";
  console.log("deeepObjStringify", deeepObjStringify);
  console.log("deeepObj", deeepObj);

  return <div></div>;
};

export default DeepShallowCopy;
