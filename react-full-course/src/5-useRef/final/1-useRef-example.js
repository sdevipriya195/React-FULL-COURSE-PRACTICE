import { render } from "@testing-library/react";
import React,{useEffect, useRef, useState} from "react";

const Index=()=>{
    const [firstName,setFirstName]=useState('')
   // const [renderTimes,setRenderTimes]=useState(0);
   const renderCount=useRef(0)
    useEffect(()=>{
        //setRenderTimes(renderTimes=>renderTimes+1)
        renderCount.current=renderCount.current+1
    })

    return(
        <div>
            <input type="text" name='firstName' id='firstName'
            value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            <h4>typing:{firstName}</h4>
            <h4>component render {renderCount.current} times</h4>

        </div>
    )
}

export default Index