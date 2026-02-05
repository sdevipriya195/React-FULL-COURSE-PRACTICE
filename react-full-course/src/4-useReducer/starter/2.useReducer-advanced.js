import { useEffect, useReducer, useState } from "react"
const reducer=(state,action)=>{
    if (action.type==="UPDATE_USERS_INFORMATION"){
        return{
            ...state,
            data:action.payload
        }
    }
    if (action.type==="LOADING"){
        return{
            ...state,
            isLoading:action.payload
        }
    }
    if (action.type==="ERROR"){
        return{
            ...state,
            isError:action.payload
        }
    }
    if (action.type==="DELETE_USER"){
        const newData=state.data.filter((eachObj)=>eachObj.id!=action.payload)
        return{
            ...state,
            data:newData
        }

    }
    if (action.type==="EDIT_DATA"){
        return{
            ...state,
            isEditing:action.payload
        }
    }
    if (action.type==="UPDATE_DATA"){
        const usersData=state.data.map((eachObj)=>{
            if (eachObj.id===action.payload.id){
                return{
                    id:action.payload.id,
                    name:action.payload.name,
                    email:action.payload.email
                }
            }
            else{
                return eachObj
            }
        })
        return{
            ...state,
            data:usersData     
        }

    }
    return state;

}

const Function=()=>{
    const initialState={
        data:[],
        isLoading:false,
        isError:{status:false,msg:""},
        isEditing:{status:false,id:"",name:"",email:""}
    }
    const [state,dispatch]=useReducer(reducer,initialState)
    
    const fetchApiData=async (URL)=>{
        dispatch({type:"LOADING",payload:true})
        dispatch({type:"ERROR",payload:{status:false,msg:""}})
        try{
            const response=await fetch (URL)
            const data= await response.json()
            dispatch({type:"UPDATE_USERS_INFORMATION",payload:data})
            dispatch({type:"LOADING",payload:false})
            dispatch({type:"ERROR",payload:{status:false,msg:""}})
        }
        catch(error){
            dispatch({type:"LOADING",payload:false})
            dispatch({type:"ERROR",payload:{status:true,msg:error.message||"Unable to fetch"}})

        }
    }
    const handleDelete=(id)=>{
        dispatch({
            type:"DELETE_USER",
            payload:id
        })
    }
    const updateData=(id,name,email)=>{
        dispatch({
            type:"UPDATE_DATA",
            payload:{id,name,email}
        })
        dispatch({
            type:"EDIT_DATA",
            payload:{id:" ",name:" ",email:" "}
        })
    }
    useEffect(()=>{
        fetchApiData("https://jsonplaceholder.typicode.com/users")
    },[])
    return(
        <div>
            {state.isLoading && <h5>Loading...</h5>}
            {state.isError.status && <h4>Error: {state.isError.msg}</h4>}
            {state.isEditing?.status &&
                        <EditFormContainer id={state.isEditing.id} cname={state.isEditing.name} cemail={state.isEditing.email} updateData={updateData}/>
                    }
            <h1>Users Information</h1>
            {state.data.map((eachObj)=>{
                const {id,name,email}=eachObj
                return(
                    <div key={id} style={{background:"skyblue"}}>
                        <h5>Name: {name}</h5>
                        <p>Email: {email}</p>
                        <button onClick={()=>handleDelete(id)}>Delete</button>
                        <button onClick={()=>dispatch({type:"EDIT_DATA",payload:{status:true,id,name,email}})}>Edit</button>
                    </div>
                )
            })}

        </div>
    )
}

const EditFormContainer=({id,cname,cemail,updateData})=>{
    const [name,setName]=useState(cname||" ")
    const [email,setEmail]=useState(cemail||" ")
    return(
        <form>
            <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={()=>updateData(id,name,email)}>Update Data</button>
        </form>
    )
}
export default Function