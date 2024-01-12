import React, { useImperativeHandle, forwardRef } from 'react'

const Child = (ref) => {

    useImperativeHandle(ref, () => ({
        sayHi,
    }));

    const sayHi = () => {
    console.log("Running");
    }

    return (
        <div>Child</div>
    )
}

export default forwardRef(Child)