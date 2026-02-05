import React,{useEffect,useReducer,useState} from "react";
 
const reducer=(state,action)=>{
    if (action.type=='UPDATE_USERS_DATA'){
        return{
            ...state,
            usersData:action.payload
        }
    }
 
    if (action.type=='LOADING'){
        return{
            ...state,
            isLoading:action.payload
        }
    }
 
    if (action.type=='DELETE_USER'){
        const newUsers=state.usersData.filter((eachUser)=>eachUser.id!=action.payload)
        return{
            ...state,
            usersData:newUsers
        }
 
    }
   
    if (action.type=='ONCLICK_EDIT'){
        return{
            ...state,
            isEditing:action.payload
        }
    }
 
    if (action.type=='UPDATE_USER'){
        const newUsers=state.usersData.map((eachUser)=>{
            if (eachUser.id==action.payload.id){
                return{
                    id:action.payload.id,
                    name:action.payload.name,
                    email:action.payload.email
                }
 
            }
            else{
                return eachUser
            }
        })
        return {
            ...state,
            usersData:newUsers
        }
 
    }
    // console.log(state)
    // console.log(action)
    return state;
}
 
const Index=()=>{
    const fetchUsersData=async (url)=>{
        dispatch({type:'LOADING',payload:true})
        dispatch({type:'ERROR',payload:{status:false,msg:''}})
        try{
        const response=await fetch (url)
        const data=await response.json()
        dispatch({type:'UPDATE_USERS_DATA',payload:data})
        dispatch({type:'LOADING',payload:false})
        dispatch({type:'ERROR',payload:{status:false,msg:''}})
       
       
        }
        catch(error){
            dispatch({type:'LOADING',payload:false})
            dispatch({type:'ERROR',payload:{status:true,msg:error.message||'error occured'}})
 
        }
    }
 
    useEffect(()=>{
        fetchUsersData('https://jsonplaceholder.typicode.com/users')
    },[])
 
    const initialState={
        usersData:[],
        isLoading:false,
        isError:{status:false,msg:''},
        isEditing:{status:false,id:'',name:'',email:''}
    }
 
    const [state,dispatch]=useReducer(reducer,initialState)
    if (state.isLoading){
        return(
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
 
    const handleDelete=(id)=>{
        dispatch({type:'DELETE_USER',payload:id})
    }
 
    const updateData=(id,name,email)=>{
        dispatch({type:'UPDATE_USER',payload:{id,name,email}})
        dispatch({type:'ONCLICK_EDIT',payload:{status:false,id:'',name:'',email:''}})
 
    }
 
    return(
        <div>
            <h1>Users Information</h1>
            {state.isEditing?.status&& <EditFormContainer
            id={state.isEditing.id} comingName={state.isEditing.name}
            comingEmail={state.isEditing.email} updateData={updateData}
            />}
            {state.usersData.map((eachUser)=>{
                const {id,name,email}=eachUser;
                return(
                    <div key={id} style={{background:"lightblue"}}>
                        <p>name: <strong>{name}</strong></p>
                        <p>email: <strong>{email}</strong></p>
                        <button onClick={()=>dispatch({type:'ONCLICK_EDIT',payload:{status:true,id:id,name:name,email:email}})}>Edit</button>
                        <button onClick={()=>handleDelete(id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
 
 
 
const EditFormContainer=({id,comingName,comingEmail,updateData})=>{
    const [name,setName]=useState(comingName||' ')
    const [email,setEmail]=useState(comingEmail||' ')
 
    return(
        <div>
            <form>
                <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}                
                />
                <button onClick={()=>updateData(id,name,email)}>Update Data</button>
            </form>
        </div>
    )
}
 
export default Index