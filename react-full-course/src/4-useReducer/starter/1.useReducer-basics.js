import { useReducer } from "react"
const reducer=(state,action)=>{
    if (action.type==="DELETE_PERSON"){
        let newPerson=state.data.filter((eachObj)=>eachObj.id!=action.payload)
        return{
            ...state,
            data:newPerson,
            length:state.length-1
        }
    }
    return state
}

const Function=()=>{
    const initialState={
        data:[
            {id:1,name:"Devipriya",email:"devi@gmail.com"},
            {id:2,name:"Priya",email:"priya@gmail.com"},
        ],
        length:2
    }
    const [state,dispatch]=useReducer(reducer,initialState)
    const handleDelete=(id)=>{
        dispatch({
            type:"DELETE_PERSON",
            payload:id
        }
        )
    }
    return(
        <div>
            <h4>Current Length: {state.length}</h4>
            {state.data.map((eachObj)=>{
                const {id,name,email}=eachObj
                return(
                    <div key={id}>
                            <p>Name: {name}</p>
                            <p>Email: {email}</p>
                            <button onClick={()=>handleDelete(id)}>Delete</button>
                            <button>Edit</button>
                    </div>
                )
            })}
        
        </div>
    )
}
export default Function