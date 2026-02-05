import React, { useState,useCallback} from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";



const ParentComp=()=>{
    const [age,setAge]=useState(0);
    const [salary,setSalary]=useState(7000);
    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    const incrementSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])

    return(
        <div>
            <Title/>
            <Count text='age' number={age}/>
            <Button clickHandler={incrementAge}>Increment Age</Button>
            <Count text='Salary' number={salary}/>
            <Button clickHandler={incrementSalary}>Increment Salary</Button>
        </div>
    )
}
export default ParentComp