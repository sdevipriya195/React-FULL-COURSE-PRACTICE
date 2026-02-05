import { useState } from "react";

const Function=()=>{
    const initArray=[
        {
            id:1,
            firstName:"Devi",
            lastName:"Priya",
            age:23
        },
        {
            id:2,
            firstName:"Pavan",
            lastName:"Sai",
            age:24
        },
        {
            id:3,
            firstName:"Radha",
            lastName:"Krishna",
            age:25
        },
    ]
    const [data,setData]=useState(initArray);
    const handleClick=(cid)=>{
        const filterData=data.filter((eachObj)=>{
            return eachObj.id!=cid
        })
        setData(filterData)
    }
    return(
        <ul>
            {data.map((eachObj,index)=>{
                const {id,firstName,lastName,age}=eachObj;
                return(
                    <li key={index}> 
                        <p>My firstName is {firstName}</p>
                        <p>My lastName is {lastName}</p>
                        <p>My age is {age}</p>
                        <button onClick={()=>handleClick(id)}>Delete Me</button>
                    </li>
                )
            })}
        </ul>
    )
}
export default Function;