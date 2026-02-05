import React,{useState,useEffect} from "react";

const Index=()=>{
    const URL="https://www.themealdb.com/api/json/v1/1/search.php?s="
    const [mealsData,setMealsData]=useState([])
    const [searchTerm,setSearchTerm]=useState("");
    const [loading,setLoading]=useState(false)
    const [isError,setIsError]=useState({status:false,msg:""})

    const fetchMeals=async (apiurl)=>{
        setLoading(true)
        setIsError({status:false,msg:""})
        try{
        const response=await fetch (apiurl)
        const {meals}=await response.json()
        setMealsData(meals)
        setLoading(false)
        setIsError({status:false,msg:""})
        if (response.status==404){
            throw new Error("not fetched")
        }
        if (!meals){
            throw new Error("Sorry, it is not available, please order something else")
        }
        }
        catch(error){
            setLoading(false)
            setIsError({status:true,msg:error.message||"give correct link"})

        }

    }

    useEffect(()=>{
        const crcturl=`${URL}${searchTerm}`
        fetchMeals(crcturl)
    },[searchTerm])

    // if (loading){
    //     return(<div><h5>Loading...</h5></div>)
   // }
    // if (isError?.status){
    //     return(<div>{isError?.msg}</div>)
    // }

    return(
        <div>
            <form>
                <input
                 type="text"
                 id="search"
                 name="seach"
                 placeholder="search something ..."
                 value={searchTerm}
                 onChange={(e)=>setSearchTerm(e.target.value)}
                 />

            </form>
            <hr/>
            {loading&&!isError?.status&&<h4>loading...</h4>}
            {isError?.status &&<div>{isError?.msg}</div>}
            {
            !loading&& !isError?.status&&
            <ul className="meal-data">
                {mealsData.map((eachObj)=>{
                    const {idMeal,strMeal,strMealThumb}=eachObj
                    return(
                        <li key={idMeal}>
                            <div>
                                <img src={strMealThumb} alt={strMeal}/>
                            </div>
                            <div className="text"><h3>{strMeal}</h3></div>

                        </li>
                    )
                })}
            </ul>
            
            }

        </div>
    )
}
export default Index
