import { useEffect, useState } from "react"
import useFetch from "./useFetch"
const URL="https://jsonplaceholder.typicode.com/posts"


const SecondApi=()=>{
   const [postsData,loading,error]=useFetch(URL)
    if (loading){return <h5>Loading...</h5>}
    if (error){return <h5>Something wrong happened...</h5>}
    return(
        <div>
            <h2>Posts</h2>
            {postsData.map((eachItem)=>{
                return(
                    <div key={eachItem.id}>
                        <p>{eachItem.title}</p>
                    </div>
                )
            })}
        </div>
    )

}
export default SecondApi