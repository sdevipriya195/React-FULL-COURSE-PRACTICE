import { useEffect, useState } from "react"

const Function=()=>{
    const [count,setCount]=useState(0);
    const [c,sc]=useState(1)
    useEffect(()=>{
        console.log(useEffect )
    })
    return(
        <div>
            <div>Learn useEffect</div>
            <span>{count}</span>
            <div><button onClick={()=>setCount(count+1)}>Inc</button></div>
            <span>{c}</span>
            <div><button onClick={()=>sc(c-1)}>Dec</button></div>  
       </div>
    )
}
export default Function