import React from "react";
const Title=()=>{
    console.log("Title rendered")
    return(
        <h1>useCallback demo & React.memo</h1>
    )
}
export default React.memo(Title)