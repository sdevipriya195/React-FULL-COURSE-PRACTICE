import React, { useState } from "react";


const Index=()=>{

    const initObj=[
        {
            id:"krishnayya",
            firstName:"emma",
            lastName:"watson",
            age:27
        },
        {
            id:"kannaya",
            firstName:"srikanth",
            lastName:"racharla",
            age:24
        },
        {
            id:"kittaya",
            firstName:"don",
            lastName:"seenu",
            age:24
        },
    ]

    const [data,setData]=useState(initObj)

    const handleDelete=(comingId)=>{
        const filterData=data.filter((eachObj)=>{
            return comingId!=eachObj.id;
        })
        setData(filterData);

    }


    return(
        
            <ul >
                {data.map((eachObj)=>{
                    const {firstName,lastName,age,id}=eachObj;
                    return(
                        <div>
                            <li key={id}>
                        <div>my firstName <strong>{firstName}</strong></div>
                        <div>my lastName <strong>{lastName}</strong></div>
                        <div>my age <strong>{age}</strong></div>
                        <button onClick={()=>handleDelete(id)}>Delete Me</button>

                           </li>
                        </div>
                    )
                })}
            </ul>
            
    )

}
export default Index;