import { useNavigate } from "react-router-dom"
const Home=()=>{
    const navigate=useNavigate()
    const navigateHandler=()=>{
        navigate("/Success")
    }
    return(
        <div>
            <h1>Home</h1>
            <button onClick={navigateHandler}>Submit form</button>
        </div>
    )
}
export default Home