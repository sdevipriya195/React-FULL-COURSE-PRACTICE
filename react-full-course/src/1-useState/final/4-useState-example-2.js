import React,{useState} from "react";

const Index=()=>{
    const [firstName,setfirstName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    // const changeFirstName=(e)=>{
    //     setfirstName(e.target.value)
    // }

    // const changeEmail=(e)=>{
    //     setEmail(e.target.value)
    // }

    // const changePassword=(e)=>{
    //     setPassword(e.target.value)
    // }



    // const handleInputChange=(e,name)=>{
    //     if (name==="firstName"){
    //         setfirstName(e.target.value)
    //     }else if (name==="email"){
    //         setEmail(e.target.value)
    //     }else if (name="password"){
    //         setPassword(e.target.value)
    //     }
    // }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let userObj={
            firstName:firstName,
            email:email,
            password:password
        }
        console.log(userObj)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <input
                 type="text"
                 name="firstName"
                 id="firstName"
                 value={firstName}
                 placeholder="enter first name"
                // onChange={(e)=>handleInputChange(e,"firstName")}
                onChange={(e)=>setfirstName(e.target.value)}
                 />
                </div>

                 <div>
                 <input
                 type="email"
                 name="email"
                 id="email"
                 value={email}
                 placeholder="enter email"
               //  onChange={(e)=>handleInputChange(e,"email")}
                 onChange={(e)=>{setEmail(e.target.value)}}
                 />
                 </div>

                 <div>
                 <input
                 type="password"
                 name="password"
                 id="password"
                 value={password}
                 placeholder="enter password"
                // onChange={(e)=>handleInputChange(e,"password")}
                onChange={(e)=>{setPassword(e.target.value)}}
                 />
                 </div>

                 <button>submit</button>            

            </form>
        </div>
    )
}
export default Index;