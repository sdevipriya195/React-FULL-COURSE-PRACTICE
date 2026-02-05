import { useNavigate } from "react-router-dom"

const Success=()=>{
    const navigate=useNavigate()
    return(
        <div><h5>Form submitted successfully</h5>
        <button onClick={()=>navigate("/")}>Back To Home</button>
        </div>
    )
}
export default Success