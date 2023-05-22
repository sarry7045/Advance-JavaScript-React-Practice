import React from "react";

const MapSet = () => {


  //    1)  Map

  // new Map is advance object with new features and better performance'

  let obj = {
    name: "Suraj",
    10: "This is mumber",
    true: "This is boolean",
    // In this object true is not taken like boolean its taken like normal key
  };

    //   let newObj = new Map([
    //   ["name", "Suraj"],
    //   [10, "This is numbe"],
    //   [(true, "This is Boolean")],
    //   ]);

  // console.log("obj", obj.10)
  // We can't access number like this in normal object
  // console.log("obj", obj.keys())
    
    
    // newObj.set("name", "Sarry"); // Overwrites previous quantity
    // console.log("newObj", newObj.get(10));
    // console.log("newObj", newObj.size); //3
    



    // 2) Set

    // set is collection of unique values

    let setdata = new Set([1, 2, 3, 3])  //1,2,3
    // we can't access setdata like this - setdata[1]
    setdata.add("Hii")
    setdata.add({ name: "Suraj" })
    setdata.delete("Hii") 
    console.log("setdataaa", setdata.size) //4

    
    let array = [1,2,3,3] //1,2,3,3
    

  return <div></div>;
};

export default MapSet;
