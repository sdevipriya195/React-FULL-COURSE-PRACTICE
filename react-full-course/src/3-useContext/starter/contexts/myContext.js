import React from "react";
export const MyContext=React.createContext();
const initValues=[
    {
    firstName:"devi",
    lastName:"priya",
    email:"devi@gmail.com"
    },
    {
    firstName:"pavan",
    lastName:"sai",
    email:"saii@gmail.com"
    }
]

export const MyContextProvider=({children})=>{
    return(
        <MyContext.Provider value={initValues}>{children}</MyContext.Provider>
    )
}