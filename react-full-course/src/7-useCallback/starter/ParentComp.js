import { Children, useCallback, useState } from "react"
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

const ParentComp=()=>{
    const [age,setAge]=useState(0)
    const [salary,setSalary]=useState(7000)
    const handleAge=useCallback(()=>{setAge(age+1)},[age])
    const handleSalary=useCallback(()=>{setSalary(salary+1000 )},[salary])
    return(
        <div>
            <Title/>
            <Count name="Age" number={age}/>
            <Button clickHandler={handleAge}>Increment Age</Button>
            <Count name="Salary" number={salary}/>
            <Button clickHandler={handleSalary}>Increment Salary</Button>

        </div>
    )
}
export default ParentComp
