import SubChildComponent from "./SubChildComponent"
const ChildComponent=(props)=>{
    return(
        <div>
            <SubChildComponent userDetails={props.userDetails}/>
        </div>
    )
}
export default ChildComponent