import React,{useContext} from "react";
import { UserContext } from "../../context/userContext";
import { MainDataContext } from "../../context/mainDataContext";

const SubChildComponent = () => {
    const data=useContext(UserContext)
    const {firstName,lastName,email}=data;
    const mainData=useContext(MainDataContext)
    console.log(mainData)

    return (
        <div>
            <h5>Sub Child Component</h5>
            <div>First name: {firstName}</div>
            <div>Last name: {lastName}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export default SubChildComponent;
