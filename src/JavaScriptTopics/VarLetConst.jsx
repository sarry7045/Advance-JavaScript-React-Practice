import React from "react";

const VarLetConst = () => {
  // Var is global scoope,
  // let and const is block

  // let can't support redeclaration but its support Re-Assignment
  // var can't support redeclaration and  Re-Assignment
    
    var a = 5;
    console.log(a) //5

    function speak() {
        var b = 10
        console.log(b)
    }
    console.log(a, b); //5 , b is not defined - Because function ek alag scope banata hai

    if (true) {
        var b = 10
    }

    console.log(a, b); //5 , 10 - If koi new block nhi banata hai so isliye wo b bhi yaha print ho jayega
    // That's y we use let taki wo koi bhi block me declare ho toh usse out of that block me farak na pade


    const person = { name: "Abhishek", age: 30 }
    // we can change like this 
    person.name = "Sueraj"
    console.log(person) //Suraj, 30
    // but we can't change like this
    person = {}


  return <div></div>;
};

export default VarLetConst;
