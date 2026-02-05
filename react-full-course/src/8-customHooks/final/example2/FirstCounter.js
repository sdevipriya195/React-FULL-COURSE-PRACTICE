import { useState } from "react"
import useCounter from "./useCounter"

const FirstCounter=()=>{
    const [count,increment,decrement,reset]=useCounter()

    return(
        <div>
            <h2>Count=={count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default FirstCounter