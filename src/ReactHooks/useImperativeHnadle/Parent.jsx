import React, { useRef } from 'react'
import Child from './Child'

const Parent = () => {
    const ref = useRef();
    return (
        <div>
            <Child ref={ref} />
            <button onClick={() => ref.current.sayHi()}> Click </button>
        </div>
    )
}

export default Parent;