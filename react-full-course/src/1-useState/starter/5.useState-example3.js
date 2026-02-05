import { useState } from "react"

const Function=()=>{
    const [list,setList]=useState([]);
    const [message,setMessage]=useState({
        text:"",
        id:""
    })
    const [editableItem,setEditableItem]=useState({
        id:"",
        isEditing:false
    })
    const handleMessage=(e)=>{
        setMessage({
            ...message,
            text:e.target.value,
        })

    }
    const handleAdd=()=>{
        let newTodo={
            text:message.text,
            id: new Date().getTime().toString(),
        }
        setList([...list,newTodo])
        setMessage(
            {
                text:"",
                id:""
            })
    }
    const handleDelete=(id)=>{
        const filteredData=list.filter((eachObj)=>{
            return eachObj.id!=id
        })
        setList(filteredData)
    }
    const handleEdititem=(id)=>{
        setEditableItem({
            id:id,
            isEditing:true
        })
        const newToList=list.find((eachObj)=>eachObj.id==id)
        setMessage({
            ...message,
            id:id,
            text:newToList.text
        }            
        )
    }
    const handleEdit=()=>{
        let newEdit=list.map((eachObj)=>{
            if (eachObj.id==editableItem.id){
                return(
                    {
                        id:editableItem.id,
                        text:message.text
                    }      
                )
            }
            else{
                return eachObj
            }
        })
        console.log(newEdit)
        setList(newEdit)
        setMessage({id:"",text:""})
        setEditableItem({id:"",isEditing:false})
    }
    return(
        <section>
            <div>
            <input
            type="text"
            name="message"
            id="message"
            value={message.text}
            onChange={handleMessage}
            />
            {editableItem.isEditing?<button onClick={()=>handleEdit()}>Edit</button>
:            <button onClick={handleAdd}>Add</button>
}
        </div>
        <hr/>
        <ul>
            {list.length==0 && <h5>No items in List</h5>}
        {list.map((eachObj)=>{
            const {text,id}=eachObj;
            return(
                <li key={id}>
                    <span>{text}</span>
                    <button onClick={()=>handleEdititem(id)}>edit</button>
                    <button onClick={()=>handleDelete(id)}>Delete</button>
                </li>
            )
             
        })}
        </ul>

        </section>
    )
}
export default Function



