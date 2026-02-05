import React from "react";
export const UserContext=React.createContext();
const initialState={
    firstName:"devi",
    lastName:"priya",
    email:"devi@gmail.com"
}
export const UserContextProvider=({children})=>{
    return(
        <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
    )
}