import React,{useEffect, useState} from "react";

const Final=()=>{
    const [count,setCount]=useState(0)
   useEffect(()=>{
    console.log("hello Iam coming from useeffect",count)
   },[])

    return(
        <div>
            <h1>Learn useEffect</h1>
            <h4>{count}</h4>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}

export default Final