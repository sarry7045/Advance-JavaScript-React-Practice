import React from "react";

const LessCodeTips = () => {


  // Tip1
  let isBlank = false;

  // if (isBlank === true) {
  //     console.log("Blank")
  // } else {
  //     console.log("Not blank")
  // }
  // in one line
  isBlank ? console.log("Blank") : console.log("Not Blank");
  // Tip1

  
  
  
  
  
  // Top2
  const post = {
    data: {
      id: 1,
      name: "Suraj",
      lastname: "Yadav",
    },
  };
  // const id = post.data.id
  // const name = post.data.name
  // const lastname = post.data.lastname
  // console.log("Data's = ", id, name, lastname)
  // Pro
  const { id, name, lastname } = post.data;
  console.log("Data's = ", id, name, lastname);
  // Top2

  
  
  
  
  
  // Tip3
  const fruits = ["apple", "mango", "banana"];
  // for (let i = 0; i < fruits.length; i++){
  //     const fruit = fruits[i]
  //     console.log("fruits", fruit)
  // }
  // Pro
  for (let fruit of fruits) {
    console.log("Fruits", fruit);
  }
  // Tip3

  
  
  
  
  
  // Tip4
  let page = "Startup";
  let social = "Insta";
  let age = 22;
  // let useDetails = {
  //     page: page,
  //     soical: social,
  //     age : age
  // }
  // console.log("useDetails", useDetails)
  // instead of this we can direct destructure in one line
  let useDetails = { page, social, age };
  console.log("useDetails", useDetails);
  // Tip4

  
  
  
  
  
  // Tip5
  const passWord = [1, 24];
  // if (passWord.length > 8) {
  //     console.log("")
  // }
  // do this insted of this for better code
  const PasswordLength = 8;
  if (passWord.length > PasswordLength) {
    console.log("");
  }
  // Tip5
    
    
    
    
    // Tip6
    const userName = 0
    // if (userName === null) {
    //    const  userName = "Suraj Yadav"
    //     console.log("userName", userName)
    // }
    // Pro
    const userNamee = userName || "Surrr"
    console.log("userName", userNamee)
    // Tip6




    // Tip7
    const person = {
        address: {
            street:"Amboli"
        }
    }
    // const street = person && person.address && person.address.street
    // instead of this we code like this
    const street = person?.address?.street
    console.log("street", street)
    // Tip7





    // Tip8
    let quanitity = +"20"
    console.log("quanitity", quanitity)
    // if we dont want quanitity in string we can add + before value
    // Tip8
    




    
    
    // Diffrece between document and window
    

  return (
    <div>
          <h4>LessCodeTips</h4>
          {/* Don't rush many things in one function , create seprate separate function for seprate logic and then combine */}
    </div>
  );
};

export default LessCodeTips;
