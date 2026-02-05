import React from "react";

const Title=()=>{
    console.log('title rendered')
    return <h1>useCallback & React.memo </h1>
}

export default React.memo(Title)