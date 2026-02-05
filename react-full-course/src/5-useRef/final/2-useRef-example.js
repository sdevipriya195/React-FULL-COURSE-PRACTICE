import React, { useEffect, useRef, useState } from "react";

const Index=()=>{
    const [firdstName,setFirstName]=useState()
    const imputDom=useRef('')

    const focus=()=>{
        imputDom.current.focus()
    }
    return(
        <div>
            <input ref={imputDom} type="text" name="firdtName" id="firdstName"
            value={firdstName} onChange={(e)=>setFirstName(e.target.value)}/>
            <button onClick={focus}>focus</button>

        </div>
    )
}
export default Index