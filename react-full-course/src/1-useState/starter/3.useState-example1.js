import { useState } from "react"

const Function=()=>{
    const [showData,setShowData]=useState(false);
    const handleShow=()=>{
        setShowData(!showData)
    }
    return(
        <div>
            <button onClick={handleShow}>{showData?"hide":"show"}</button>
            <div>
            {showData?<p>This should resolve the issues and make your component work as expected. Let me know if you need any
            further assistance!</p>:<p>Content is hidden</p>}
            </div>

        </div>
    )
}
export default Function