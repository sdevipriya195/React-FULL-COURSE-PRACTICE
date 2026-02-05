import React from "react";
const Button=({clickHandler,children})=>{
    console.log(`${children} rendered`);
    return(
        <button onClick={clickHandler}>{children}</button>
    )
}
export default React.memo(Button)