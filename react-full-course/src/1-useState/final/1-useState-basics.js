import React,{useState} from "react";

const Index=()=>{
    const [count,setCount]=useState(0);
    const incrementCount=()=>{
        setCount(pcount=>pcount+1);
        setCount(pcount=>pcount+1); 
    }
    const decrementCount=()=>{
        setCount(prcount=>prcount-1);
        setCount(prcount=>prcount-1);
    }
    

    return(
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>

        </div>
    )
}

export default Index;