import React,{useEffect,useState} from "react";

const Final=()=>{
    const [userData,setUserData]=useState([])
    const URL="https://jsonplaceholder.typicode.com/users"
    const [loading,setLoading]=useState(false)
    const [isError,setIsError]=useState({status:false,msg:""})

    const fetchData= async (apiurl)=>{
        setLoading(true)
        setIsError({status:false,msg:""})
        try{
        const response=await fetch (apiurl)
        const data=await response.json()
        setUserData(data)
        setLoading(false)
        setIsError({status:false,msg:""})
        if (response.status==404){
            throw new Error("data not found")
        }
        }
        catch(error){
            setLoading(false)
            setIsError({status:true,msg:error.message||"no data available"})
        };
        
    }

    useEffect(()=>{
        fetchData(URL)
    },[])

    if (loading){
        return(
            <div>
            <h4>Loading...</h4>
            </div>
        )
    }

    if (isError?.status){
        return(
            <div>
                <h5>{isError?.msg}</h5>
            </div>
        )
    }


    return(
        <div>
            <ul>
                {userData.map((eachObj)=>{
                    const {id,name,username,email}=eachObj
                    return(
                        <li key={id}>
                            <div>name: <strong>{name}</strong></div>
                            <div>username: <strong>{username}</strong></div>
                            <div>email: <strong>{email}</strong></div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
export default Final