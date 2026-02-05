import React from "react"
import UsersData from "./UsersData"
import { useParams } from "react-router-dom"

const UserDetails=()=>{
    const {userId} = useParams();
    console.log("User Id:", userId);
    const newData = UsersData.find((eachObj) => eachObj.id == userId);

    return(
        <div>
            <h1>User Details</h1>
            <p>Name: {newData.name}</p>
            <p>Username: {newData.username}</p>
            <p>Email: {newData.email}</p>
            <p>Phone: {newData.phone}</p>
            <p>Street: {newData.address.street}</p>

        </div>
    )
}
export default UserDetails