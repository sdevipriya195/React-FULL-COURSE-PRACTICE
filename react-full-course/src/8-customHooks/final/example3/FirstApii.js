import { useEffect, useState } from "react"
import useFetch from "./useFetch"
const URL="https://jsonplaceholder.typicode.com/users"


const FirstApi=()=>{
    const [usersData,loading,error]=useFetch(URL)
    if (loading){return <h5>Loading...</h5>}
    if (error){return <h5>Something wrong happened...</h5>}
    return(
        <div>
            <h2>Users</h2>
            {usersData.map((eachItem)=>{
                return(
                    <div key={eachItem.id}>
                        <p>{eachItem.name}</p>
                    </div>
                )
            })}
        </div>
    )

}
export default FirstApi