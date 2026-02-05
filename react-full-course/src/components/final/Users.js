import UsersData from "./UsersData"
import { Link } from "react-router-dom"
const Users=()=>{
    return(
        <div>
            <h1>Users</h1>
            <div className="card-container">
            {UsersData.map((eachUser)=>{
                const {id,name,email}=eachUser
                return(
                    <Link to={`/users/${id}`} key={id}>
                        <div className="card">
                        <h3>{name}</h3>
                        <h3>{email}</h3>
                        </div>                    
                    </Link>
                )
            })}
            </div>
        </div>
    )
}
export default Users