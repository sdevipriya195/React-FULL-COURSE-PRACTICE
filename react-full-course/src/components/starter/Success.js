import React from "react"
import { useNavigate } from "react-router-dom"
const Success=()=>{
    const navigate=useNavigate()
    return(
        <div>
            <h1>Form submitted successfully</h1>
            <button onClick={()=>navigate("/")}>Back to Home</button>
        </div>
    )
}
export default Success