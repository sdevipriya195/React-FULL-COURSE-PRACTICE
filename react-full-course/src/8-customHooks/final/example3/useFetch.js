import { useState,useEffect } from "react"
const useFetch=(URL)=>{
    const [commondata,setCommonData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    const fetchApi=async (apiURL)=>{
        setLoading(true)
        setError(false)
        try{
            const response=await fetch(apiURL)
            const data=await response.json()
            setCommonData(data)
            setLoading(false)
            setError(false)
        }
        catch(error){
            setLoading(false)
            setError(true)
        }
    }
    useEffect(()=>{
        fetchApi(URL)
    },[])
    
    return [commondata,loading,error]


}
export default useFetch