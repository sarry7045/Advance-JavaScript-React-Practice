import React from 'react'

const DataTypesTips = () => {
    // Number
    console.log(100000000)
    console.log(1_000_000_000)
    // we can write this way also to read properly

    console.log(700000)
    console.log(7.e5)
    // we can write this way also for less code
  
  
  
  // Symbol Data Type
  const smy1 = Symbol()
  const sym2 = Symbol("foo")
  const sym3 = Symbol("foo")
  console.log(sym2 === sym3) //false
  // it creats new symbol each time




  return (
    <div>
      
    </div>
  )
}

export default DataTypesTips
