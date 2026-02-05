import React from "react";
const Count=({name,number})=>{
    console.log(`${name} rendered`);
    return(
        <h5>{name}:{number}</h5>
    )
}
export default React.memo(Count)