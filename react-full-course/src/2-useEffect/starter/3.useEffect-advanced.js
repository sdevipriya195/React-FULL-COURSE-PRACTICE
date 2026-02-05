import { useEffect, useState } from "react"

const Function=()=>{
    const URL="https://www.themealdb.com/api/json/v1/1/search.php?s="
    const [mealsData,setMealsData]=useState([])
    const [searchItem,setSearchItem]=useState("")
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState({status:false,msg:""})
    const fetchMealsData=async (apiurl)=>{
        setLoading(true)
        setError({status:false,msg:""})
        try{
        const response=await fetch (apiurl)
        const {meals}=await response.json()
        setMealsData(meals)
        setLoading(false)
        setError({status:false,msg:""})
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        if (meals=="no data found"){
            throw new Error("Incorrect URL")
        }
        if (!meals){
            throw new Error("data not found")
        }
        console.log(response)            
        console.log(meals)
        }
        catch(error){
            setLoading(false)
            setError({status:true,msg:error.message||"Something went wrong"})
        }
    }

    useEffect(()=>{
        const crctURL=`${URL}${searchItem}`
        fetchMealsData(crctURL)
    },[searchItem])
    return(
        <div>
            <form>
            <input
            type="text"
            id="searchItem"
            name="searchItem"
            value={searchItem}
            placeholder="Search Something..."
            onChange={(e)=>setSearchItem(e.target.value)}
            />
            </form>
            <hr/>
            {loading && <h5>Loading ...</h5>}
            {error?.status && <h3>{error.msg}</h3>}
            {!loading && !error?.status &&
            <ul className="meal-data">
            {mealsData.map((eachMeal)=>{
                const {idMeal,strMeal,strMealThumb}=eachMeal
                return(
                    <li key={idMeal}>
                        <div><img src={strMealThumb} alt={strMeal}/></div>
                        <div><h5>{strMeal}</h5></div>
                    </li>
                )
            })}
        </ul>  
            }
        </div>
    )
}
export default Function