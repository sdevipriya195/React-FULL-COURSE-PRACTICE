import React, { useState } from "react";
const Function=()=>{
    const [count,setCount]=useState(0);
    const IncrementHandle=()=>{
        setCount(pcount=>pcount+1)
        setCount(pcount=>pcount+1)
    }
    const decrementHandle=()=>{
        setCount(pcount=>pcount-1)
        setCount(pcount=>pcount-1)
    }
    return(
        <div>
            <button onClick={decrementHandle}>Dec</button>
            <span>{count}</span>
            <button onClick={IncrementHandle}>Inc</button>
        </div>
    )

}
export default Function;