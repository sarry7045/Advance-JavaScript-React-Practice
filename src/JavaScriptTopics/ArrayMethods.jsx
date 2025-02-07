import React from "react";

const ArrayMethods = () => {

  // If we want to edit or change the any array then , create the copy of that array and use that 
  // copied array soo isse first wale array pe koi effect nhi hooga  (using spread operator)

  // Array.from()
  // Use To convert in proper array


  const items = [
    {
      name: "Bike",
      price: 80000,
    },

    {
      name: "TV",
      price: 15000,
    },
    {
      name: "Phone",
      price: 15000,
    },
    {
      name: "Computer",
      price: 50000,
    },
    {
      name: "Shoes",
      price: 5000,
    },
  ];


  // Map
  const Itemsmapp = items.map((value, index) => {
    return (
      <>
        <h6>{value.name}</h6>
        <h6>{value.price}</h6>
        <h6>{index}</h6>
      </>
    );
  });
  console.log(Itemsmapp);
  // Map


  //FlatMap
  //Let's assume ki we need to give Mobile with cover free so we can create condition like this
  let cart = [{
    name: "Mobile",
    qty: 1,
    price:20000
  },
  {
    name: "Laptop",
    qty: 1,
    price:50000
  },
  ]
  let newCart = cart.flatMap(item => {
    if (item.name === "Mobile") {
      return [
        item, {
          name: "Cover",
          qty: 1,
          pirce:0
        }
      ]
    } else {
      return [item]
    }
  })
  console.log(newCart)
    
    

  // Filter
  const ItemsFilter = items.filter((value) => {
    return value.price < 50000;
  });
  console.log("ItemsFilter", ItemsFilter);
  // Filter
    
    
    
    // Find 
    const ItemsFind = items.find((value) => {
        return value.name="Shoes"
    })
    console.log("ItemsFind", ItemsFind)
    // Find



    // ForEach
    // const ItemsForEach = items.forEach((item , index, arr) => {
    //     console.log("ItemsForEach", item , arr)
    // })
    // ItemsForEach()

    const numbers = [1, 2, 3, 4, 5]
    let sum = 0
    numbers.forEach((item) => {
        sum += item
    })
    console.log("sum", sum)
    // ForEach
  
  
  
  
  // Reduce
  const products = [
    {
      name: "Laptop",
      price: 10000,
      count: 5
    },
    {
      name: "Mobile",
      price: 5000,
      count: 3
    },
    {
      name: "Desktop",
      price: 20000,
      count: 2
    },
  ]

  const totalValue = products.reduce((accum , item) => {
    return accum + item.price * item.count
  })
  console.log("totalValue", totalValue)
  



  // Include
  const fruits = ["Apple", "Mango", "Banana"]
  const res = fruits?.includes("Apple") //Optional Chaining
  res ? console.log("Yess") : console.log("Nooo")



  // Unshift
  const unshiftArray = [1, 2, 3, 4, 5]
  unshiftArray.unshift(0,1)
  console.log("unshiftArray", unshiftArray)
  

  // at
  const nums = [1, 2, 3, 4, 5]
  // Best way to acccess index of any aaray or string.
  console.log(nums.at(-1))
  const Name = "Suraj"
  console.log(Name.at(-1))  

  
  
  //some
  let scores = [20, 35, 49, 65, 90]
  let filteredScore = scores.some((value) => {
    return value > 80
  })
  //If any in array (some condition) hai toh true else false ex: >80 is 90 hai array me then its true , if condition >90 hota toh its false because aise koi value hai he nhi
  console.log(filteredScore)  //true


  
  // every
  let newScores = [54, 67, 76, 87, 72]
  let newResult = newScores.every(value => {
    return value > 50
  })
  //If all conditions are match then true else false ex: In these array all numbers are >50 so its true
  console.log(newResult) //true


  
  // Flat
  let arr = [1, 2, 3, [4, 5, 6]]
  let arr1 = [1, 2, 3, [4, 5, 6,[7,8,9]]]
  let newArr = arr.flat()
  let newArr1 = arr1.flat(2)
  console.log(newArr) //[1,2,3,4,5,6]
  console.log(newArr1) //[1,2,3,4,5,6,7,8,9]


  // Slice
  const arrayy = ["aa","ddd","aadfe","lll","ppp"]
  console.log(arrayy.slice(1, 4))
  
  // Splice
  const array = [1, 2, 3, 4, 5]
  console.log(array.splice(1, 1, 9))
  console.log(array)
  // It's use for Adding the aaray values


    return <div>{Itemsmapp}</div>;
};

export default ArrayMethods;
