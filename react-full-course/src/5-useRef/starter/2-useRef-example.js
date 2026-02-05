import { useRef, useState } from "react"

const Function=()=>{
    const [fname,setFname]=useState(" ")
    const inputDom=useRef(" ")
    const focus=()=>{
        inputDom.current.focus()
    }
    return(
        <div>
            <input ref={inputDom} type="text" name="name" id="name" value={fname} onChange={(e)=>setFname(e.target.value)} />
            <h5>Typing:{fname}</h5>
            <button onClick={focus}>Focus</button>
        </div>
    )
}
export default Function