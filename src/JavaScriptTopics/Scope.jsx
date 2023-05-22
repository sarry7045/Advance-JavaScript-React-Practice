import React from "react";

const Scope = () => {

    // Lexical Enviroment = Scope = Jaha Variable Declar Hota hai

    // Hoisting - इसका मतलब होता है कि जब भी आप एक variable या function को declared करते हो, तो उसे अपने scope के शुरुआत में ले जाया जाता है,
    // जिससे variable या function को उस scope में available होने से पहले भी उस scope के अंदर के code में इस्तेमाल किया जा सकता है


    // Re-Declaration is Not Allowed in let in Same Scope ex: let a = 10; , let a =15
    // Re-Assignment is allowd in let Ex:  let a = 10, a =12
        
    // Re-Declaration is Not Allowed in Const in Same Scope ex: const a = 10; , const a =15
    // Re-Assignment is allowd in let Ex:  const a = 10, a =12


  // Block Scope  - Let called Block Scope
  // Global Scope
  // Function Scope
  // Module Scope

  
    
    let a = 100;
  {
    let a = 2;
    console.log(a);
  }
  {
    let a = 3;
    console.log(a);
  }
    console.log(a);
    



  // Temporal Dead Zone Scnario
  let aa = 90;
  {
    console.log(aa);
        // let aa = 10;
    //Cannot access 'aa' before initialization
    }

    
    
  return (
    <div>
          <h4>Scopes</h4>
    </div>
  );
};

export default Scope;
