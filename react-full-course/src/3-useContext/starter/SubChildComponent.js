
import React,{useContext} from "react";
import {UserContext} from "../../3-useContext/starter/contexts/userContext"
import { MyContext } from "../../3-useContext/starter/contexts/myContext";
const SubChildComponent=()=>{
    const data=useContext(UserContext)
    const mydata=useContext(MyContext)
    console.log(mydata)
    const {firstName,lastName,email}=data
    return(
        <div>
            <ul>
            {mydata.map((eachItem,index)=>{
                const {firstName,lastName,email}=eachItem
                return(
                    <li key={index}>
                        <p>First Name: {firstName}</p>
                        <p>Last Name: {lastName}</p>
                        <p>Email: {email} </p>
                    </li>
                )
            })}
            </ul>
        </div>
    )

}
export default SubChildComponent