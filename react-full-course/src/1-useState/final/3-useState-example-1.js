import React,{useState} from "react";

const Index=()=>{
    const [showData,setshowData]=useState(false);
    const handleChange=()=>{
        setshowData(!showData)
    }

    return(
        <div>
            <button onClick={handleChange}>{showData?"hide":"show"}</button>
            {showData? <div>Hi this is devipriya Today is krishnaastami Dont tell any one 
                we celebrate it in the private ok I think
            </div>:<div>content hidden</div>}
        </div>
    )

}
export default Index;