import { useEffect, useState,useRef } from "react"

const Function=()=>{
    const [name,setName]=useState("")
    const currentRef=useRef(1)
    useEffect(()=>{
        currentRef.current=currentRef.current+1
    })
    return(
        <div>
            <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <h4>Typing: {name}</h4>
            <h5>It renders {currentRef.current} times</h5>
        </div>
    )
}
export default Function

