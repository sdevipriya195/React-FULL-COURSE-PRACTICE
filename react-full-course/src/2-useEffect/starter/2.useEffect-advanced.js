import { useEffect, useState } from "react";

const Function=()=>{
  const URL="https://jsonplaceholder.typicode.com/users"
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false)
  const [isError,setIsError]=useState({status:false,msg:""})
  const fetchApiData=async (apiUrl)=>{
    setLoading(true)
    setIsError({status:false,msg:""})
    try{
    const response=await fetch (apiUrl)
    const op=await response.json();
    setData(op)
    setLoading(false)
    setIsError({status:false,msg:""})
    if (response.status==404){
        throw new Error("Data not found")
    }
    }
    catch(error){
        setLoading(false)
        setIsError({status:true,msg:error.message||"Unable to fetch"})
    }
  }
  useEffect(()=>{
    fetchApiData(URL)
  },[])

  if (loading==true) {return(<p>Loading...</p>)}
  if (isError?.status==true){return <h5>{isError?.msg}</h5>}
  return(
    <div>
      <ul>
      {data.map((eachItem)=>{
        const {id,name,email}=eachItem
        return(
          <li key={id}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </li>   
        )
      })}
      </ul>
    </div>
  )
}
export default Function