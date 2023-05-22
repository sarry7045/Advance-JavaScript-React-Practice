import React from "react";

const Closure = () => {

  // so whenever you have a function which wants to preserve a value over many calls - it's a time for closure;


  // Suppose When we have 2 functions one is top function and second is nested inside that function , 
  // now if i define a varibale inside main function , and start using it insie nested function, now if i call a main function and its complete its execution
  // the nested function is also the access that variable even after the execution of main function.

  function variableFunc() {
    let name = "Suraj";
    function variableFun() {
      let name = "Neeraj";
      console.log("variableFunc1", name);
    }
    console.log("variableFunc", name);
    variableFun();
  }
  variableFunc();



  // Example 1
  let count = 0;
  function increment() {
    console.log(count++);
  }
  increment()
  increment()
  increment()


  // we can create nested functions in JavaScript

  // Example 2
  function createUser(name){
    let greeting = 'Hi ' 
    function greet(){
       return greeting + name + ' is Created';
    }
    return greet // returned just definition of function
  }
  
  let welcomeJohn = createUser('john') 
  welcomeJohn() // // Hi john is created;

  

  return <div></div>;
};

export default Closure;
