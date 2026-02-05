import React,{useState} from "react";

const Index=()=>{

    const [message,setMessage]=useState(
        {
            id:"",
            text:""
        }
    )
     const [list,setList]=useState([]);
     const [edit,setEdit]=useState({
        id:"",
        isEditable:false
     })

     const handleAdd=(e)=>{
        e.preventDefault();
        let todo={
            id:new Date().getTime().toString(),
            text:message.text
        }
        setList([...list,todo])
        setMessage({id:"", text:""})

     }

     const handleDelete=(id)=>{
        let filterData=list.filter((eachItem)=>eachItem.id!=id)
        setList(filterData)
     }

     const handleOneEdit=(id)=>{
        setEdit({...edit,id:id,isEditable:true})
        let item=list.find((eachItem)=>eachItem.id==id)
        setMessage({id:item.id,text:item.text})
     }


     const handleMainEdit = (e) => {
        e.preventDefault();
        let newTodo = list.map((eachItem) => {
            if (eachItem.id === edit.id) {
                return {
                    text: message.text,
                    id: edit.id
                };
            } else {
                return eachItem;
            }
        });
        console.log(newTodo)
        setList(newTodo);
        setMessage({ id: "", text: "" });
        setEdit({ id: "", isEditing: false });
    };
    
    return(
        <div>
            <form>
                <input
                type="text"
                name="message"
                id="message"
                value={message.text}
                placeholder="enter some message"
                onChange={(e)=>setMessage({...message,text:e.target.value})}                
                />
                {edit.isEditable?
                <button onClick={handleMainEdit}>Edit</button>
                :<button onClick={handleAdd}>Add</button>            
            }
            </form>
            <hr/>
            {list.length==0 && <h4>No items in the list</h4>}
            <ul>
            {list.map((eachItem)=>{
                const {id,text}=eachItem
                return(                    
                    <li key={id}>                        
                        <span>{text}</span>
                        <button onClick={()=>handleOneEdit(id)}>edit</button>
                        <button onClick={()=>handleDelete(id)}>Delete</button>
                    </li>
                )                
            })}

            </ul>
        </div>
    )
}

export default Index