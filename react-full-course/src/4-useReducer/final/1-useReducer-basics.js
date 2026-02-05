import React, { useReducer } from "react";

const reducer=(state,action)=>{
    if (action.type=="DELETE_PERSON"){
        const newPersons=state.data.filter((eachItem)=>{
            return eachItem.id!=action.payload
        })
        return{
            ...state,
            data:newPersons,
            length:state.length-1,
        }
    }
    return state;
    
   

}

const Final=()=>{

    const initialState={
        data:[
            {id:"123",firstName:"devi",email:"devi@gmail.com"},
            {id:"132",firstName:"priya",email:"priya@gmail.com"}
        ],
        length:2
    }

    const [state,dispatch]=useReducer(reducer,initialState)

    const handleDelete=(id)=>{
        dispatch(
            {
                type:"DELETE_PERSON",
                payload:id
            }
        )
    }
     const handleEdit=(id)=>{
        dispatch(
            {
                type:"EDIT_PERSON",
                payload:id
            }
        )
     }


    return(
        <div>
            <h2>Current users length: {state.length}</h2>

            {state.data.map((eachItem)=>{
                const {id,firstName,email}=eachItem
                return(
                    <div key={id}>
                        <h3>{firstName}</h3>
                        <p>{email}</p>
                        <button onClick={()=>handleDelete(id)} >Delete</button>
                        <button onClick={()=>handleEdit(id)}>Edit</button>

                    </div>
                )
            })}

        </div>
    )
}

export default Final