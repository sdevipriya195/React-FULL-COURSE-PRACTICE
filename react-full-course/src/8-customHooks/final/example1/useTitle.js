import { useEffect } from "react"
const useTitle=(count)=>{
    useEffect(()=>{
            document.title=`count-${count}`
        },[count])

}
export default useTitle
