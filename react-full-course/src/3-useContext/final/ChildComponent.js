import React from "react";
import SubChildComponent from './SubChildComponent'; 

const ChildComponent = () => {
    return (
        <div>
            <h3>Child Component</h3>
            <SubChildComponent />
        </div>
    );
};

export default ChildComponent;
