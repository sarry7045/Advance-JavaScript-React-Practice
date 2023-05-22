import React from "react";

const Hoisting = () => {

    // Hoisting - इसका मतलब होता है कि जब भी आप एक variable या function को declared करते हो, तो उसे अपने scope के शुरुआत में ले जाया जाता है,
    // जिससे variable या function को उस scope में available होने से पहले भी उस scope के अंदर के code में इस्तेमाल किया जा सकता है


  // Iss Case ne ye chal jayeaga
  sum();
  function sum(a, b, c) {
    return a + b + c;
  }

  // But is case me it wwill throw error
  summ();
  // Is case ko hum Hoisting bolte hai
  let summ = function (a, b, c) {
    return a + b + c;
  };
  return <div></div>;
};

export default Hoisting;
