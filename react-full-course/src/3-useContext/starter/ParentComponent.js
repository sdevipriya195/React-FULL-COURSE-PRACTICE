import { useState } from "react"
import ChildComponent from "./ChildComponent"

const Parent=()=>{
    const [userDetails,setUserDetails]=useState({
        firstName:"emma",
        lastName:"Watson"
    })
    return(
        <div>
            <ChildComponent userDetails={userDetails}/>
        
        </div>
    )

}
export default Parent