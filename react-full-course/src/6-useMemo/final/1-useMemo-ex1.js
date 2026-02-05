import React,{useState} from "react";
import { useMemo } from "react";

const Index=()=>{
    const [number,setNumber]=useState(0)
    const [dark,setDark]=useState(false)
    const doubleNumber=useMemo(()=>{
        return slowFunction(number)
    },[number])
    const themeChange=useMemo(()=>{
        return{
            backgroundColor:dark?'black':'white',
            color:dark?'white':'black'
        }

    },[dark])

    return(
        <div>
            <div>
            <input type="number" name="number" id="number"
            value={number} onChange={(e)=>setNumber(e.target.value)}/>
            </div><br/>
            <button onClick={()=>setDark(!dark)}>Change Theme</button>
            <h3 style={themeChange}>Number is {doubleNumber}</h3>

        </div>
    )
}
const slowFunction=(number)=>{
    for (let index=0;index<10000;index++){}
    return number*2

}


export default Index