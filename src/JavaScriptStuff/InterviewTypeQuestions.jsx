import React from 'react'

const InterviewTypeQuestions = () => {


  // Unique Value from Array
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 9, 9, 2, 2, 2, 6, 6];
  const uniqueNumber = [...new Set(array)];
  console.log("uniqueNumber", uniqueNumber);
  // Unique Value from Array




  // Multiple array in one array and soting and remove duplicate data from array
  const array1 = [1, 3, 4 ,5, 5]
  const array2 = [2, 4, 4, 6, 8]
  const array3 = [...array1, ...array2]

  const sorted = array3.sort((a, b) => a - b)
  const removeDuplicate = [...new Set(sorted)]
    console.log("sorted", removeDuplicate)



    // Add The Total Of Array
    const numbers = [1, 2, 3, 4, 5]
    let sum = 0
    numbers.forEach((item) => {
        sum += item
    })
    console.log("sum", sum)
  


  // Multiple The Array from this Index Number
  const ArrayNumbers = [1, 2, 3, 4, 5]
  const Multipley = ArrayNumbers.map((item, index) => {
    return item * index
  })
  console.log("Multipley", Multipley)
  


  // From one Array of Object Create one another array of Object using that array of Object
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
  const totoalProductValue = products.map((item) => {
    return {
      name: item.name, totalValue: item.price * item.count
    }
  })
  console.log("totoalProductValue", totoalProductValue)
  


  // Remove Duplicate Number from Array using Filter Mehthod
  const Arr = [1, 2, 3, 3, 4, 5, 6, 6, 6]
  const filterDuplicate = Arr.filter((item , index, arr) => {
    return arr.indexOf(item) === index
  })
  console.log("filterDuplicate", filterDuplicate)
  



  // Add the total value of all product with there count
  // const store = [
  //   {
  //     name: "Laptop",
  //     price: 10000,
  //     count: 5
  //   },
  //   {
  //     name: "Mobile",
  //     price: 5000,
  //     count: 3
  //   },
  //   {
  //     name: "Desktop",
  //     price: 20000,
  //     count: 2
  //   },
  // ]

  // const totalValuee = store.reduce((accum , item) => {
  //   return accum + item.price * item.count,
  //     0
  // })
  // console.log("totalValue", totalValuee)
  



  // sort the numbers
  const sortingArray = [72, 16, 2, 6, 34, 44, 17]
  sortingArray.sort((a,b) => {
    return a - b
  })
  console.log("sortingArray", sortingArray)
  


  // Replace name with other name
  const names = ["Neeraj", "Suraj", "Allu"]
  const idx = names.indexOf["Aditya"]
  console.log("idx", idx)




  // Print numbers in 1 by 1
for (let a = 0; a <= 5; a++){
  setTimeout(() => {
    console.log("Number",a)
  }, a * 1000);
}
  
    

    // checkArray
    const checkArray = [1, 2, 3, 4, 5]
  console.log("checkArray", Array.isArray(checkArray))
  




  // NAN
  let a = 10;
  // let b = "10"
  let c = "String"
  let d = a / c
  console.log("NAN", d)
  // Becuase koi bhi number kisi string se devide nhi ho sakta



  
  // Find smallest and largest number
  const arry = [2, 23, 65, 3, 43]
  arry.reduce((accum, num) => Math.min(accum, num))
  console.log("Small Number", arry)
  

  let pattern = "/xyz"
  let value = "This is XYZ test"
  console.log("Valueee", value.replace(pattern, "just"))




  // Block scope and Global Scope
  var x = 10 
  if (true) {
    // var x = 5 
    console.log(x)
    // when let insted of var answer is 10
  }
  // x = 5
  function summ() {
    var x = 9
    console.log(x)
  }
  summ()
  // 10




  let aa = 0;
alert( Boolean(aa) ); 
// false
let bb = "0";
alert( Boolean(bb) ); 
// true
alert(aa === bb); 
// true!



  // null === undefined
  //false
  // null == undefined
  // true
  // === check the type and == is check only value



  // null + 1      // 1
  // undefined + 1    // NAN



  alert( null > 0 );  // (1) false
  alert( null == 0 ); // (2) false
  alert(null >= 0); // (3) true
  alert( undefined > 0 ); // false (1)
  alert( undefined < 0 ); // false (2)
  alert(undefined === 0); // false (3)
  


  // Function Declaration
  // function summm(a, b) {
  //   return a + b;
  // }

  // Function Expression
  // let summm = function(a, b) {
  //   return a + b;
  // };



  let obectt1 = {};
  let object2 = {}; // two independent objects
  alert(obectt1 === object2); // false
  // Because in Javascript every Object is Empty





  // Print secondLast Element
  const arr = ["First","Second","Third","Fourth","Fifth"]
  console.log(arr.at(-4))



  
let arryy = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9]
//   Print Only 5 Numbers
arryy.length = 5
console.log(arryy)

// Sum of array 

let summm = arryy.reduce((x,y)=> x + y)
console.log(summm)

// Unique Value
let unique = new Set(arryy)
console.log([...unique])

let xx = 30 , y = 40
// Swap the value
[xx,y] = [y,xx]
  console.log(x, y)
  


// Guess the output
  let data = "size"
  const bird = {
    size:"Small"
  }
console.log(bird[data]) //Small
console.log(bird["size"]) //Small
console.log(bird.size) //Small
  console.log(bird.data) //Undefined
  


  //Guess the result
  const objj = {
    a:"suraj",
    b:"Neeraj",
    a:"yadav"
}
  console.log(objj) //{ a: 'yadav', b: 'Neeraj' }
  

  // Type of
  let dataa = 3+4+'5'
  console.log(typeof dataa) //string
  console.log(typeof 3 + 4 + "5") //number45 - Because first it give the type of 3 then normal print 45
  

  // Guess the output
  function getInfo (valuee){
    valuee.name = "Suraj"
    }
    const person ={
        name:"Neeraj"
  }
  getInfo(person)
  console.log(person) // Name :"Suraj"
  // and when we call the function bottom of console then the output is  Neeraj


  
  
  
  const obj = {
    name :"Suraj",
    age:30
}

function findValue(data){
 const objKeys = Object.keys(data)
 console.log(objKeys)
 
 const res = objKeys.map((key)=>{
     const value = data[key];
     return [key,value]
 })
 return res
}

const res = findValue(obj)
  console.log(res) //[ [ 'name', 'Suraj' ], [ 'age', 30 ] ]
  

    
  // Task 1
  const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
  const input2 = { a: 2, b: 12, c: 6, d: 10 };

  // Output we need = { d: 10, e:12 }

  function func(inp1, inp2) {
    const obj = {};
    for (let i in inp1) {
      console.log(i);
      if (inp1[i] === inp2[i]) {
        obj[1] = inp1[i];
      }
    }
    return obj;
  }

    console.log(func(input1, input2));
    


  // Task 2

  const str = "This is Javscript Code";
  const spil = str.split(" ");
  console.log(spil);

  const revereseAray = spil
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
    console.log(revereseAray);

    


  // Task 3

  const inputt = [1, 2, -2, 7, 11, 1];

  function secondHighest(inp) {
    let arr = [...new Set(inp)].sort((a, b) => a - b);
    return arr[arr.length - 2];
  }

  console.log(secondHighest(inputt));
  

  

  
  
  //Print 0,1,2 with var keyword
  for (var i = 0; i < 3; i++) {
    (function(index) {
      setTimeout(function() {
        console.log(index);
      }, index * 1000);
    })(i);
  }




  function foo() {
    var a = window.b = 10;
    // be will be like window.b
    a++
    return a
  }
  foo()
  console.log(typeof (a)) //undefined
  console.log(typeof (b)) // number
  

  
  const numberss = [1, 2, 3, 4, 5];
  const summmm = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

  console.log(summmm);





  // Move all 0 end of the Array
  function moveZerosToEnd(array) {
    let zeros = [];
    let nonZeros = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) {
        zeros.push(array[i]);
      } else {
        nonZeros.push(array[i]);
      }
    }
  
    return nonZeros.concat(zeros);
  }
  
  const numbe = [0, 2, 0, 4, 0, 6, 0, 8];
  const result = moveZerosToEnd(numbe);
  
  console.log(result); // Output: [2, 4, 6, 8, 0, 0, 0, 0]


// Sum of even Number
  let aarry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function evenn(data) {
    var sum = 0;
    
    for(var i =0; i<data.length; i++){
        if(data[i] % 2 === 0){
            sum += data[i]
        }
    }
    return sum
}

console.log(evenn(aarry))
  

  
  
  
  
  return (
    <div>
      <h4>InterviewTypeQuestions</h4>
    </div>
  )
}

export default InterviewTypeQuestions
