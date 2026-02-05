import { useEffect, useMemo, useState } from "react"

const Function=()=>{
    const [number,setNumber]=useState(0)
    const [dark,setDark]=useState(false)
    const doublenumber=useMemo(()=>{return slowFunction(number)},[number])
    const themeChange = useMemo(() => {
        return {
          backgroundColor: dark ? "black" : "white",
          color: dark ? "white" : "black",
        };
      }, [dark]);
      useEffect(()=>{
        console.log("theme changed")
      },[themeChange])
    

    return(
        <div>
            <input type="number" name="number" id="number" value={number} onChange={(e)=>setNumber(Number(e.target.value))} /><br/>
            <button onClick={()=>setDark(!dark)}>Change Theme</button>
            <div><h4 style={themeChange}>The number:{doublenumber}</h4></div>
        </div>
    )
}
const slowFunction=(number)=>{
    for(let index=0;index<10000;index++){}
    console.log("slowfunction executing")
    return number*2
}
export default Function