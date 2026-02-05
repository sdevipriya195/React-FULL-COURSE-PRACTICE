import { useState } from "react";

const Function=()=>{
    const [firstName,setFirstName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const initObj={
            firstName:firstName,
            email:email,
            password:password
        }
        console.log(initObj)
    }
    return(
        <div>
            <form>
                <div>
                    <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Function;