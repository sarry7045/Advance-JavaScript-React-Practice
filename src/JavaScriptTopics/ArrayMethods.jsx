import React from "react";

const ArrayMethods = () => {
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
  const res = fruits?.includes("Apple")
  res ? console.log("Yess") : console.log("Nooo")



  // Unshift
  const unshiftArray = [1, 2, 3, 4, 5]
  unshiftArray.unshift(0,1)
  console.log("unshiftArray",unshiftArray)



    
    
    
    

  return <div>{Itemsmapp}</div>;
};

export default ArrayMethods;
