import { useParams } from "react-router-dom"
import photosData from "./photosData"
import NotFound from "./NotFound"
const PhotoDetails=()=>{
    const {photoId}=useParams()
    const newData=photosData.find((eachItem)=>eachItem.id==photoId)
    
if (!newData) return <NotFound />;

    return(
        <div>
            <h1>PhotoDetails</h1>
            <p>Title : {newData.title}</p>
            <a href={newData.url} target="_blank" rel="noopener noreferrer">
         <img src={newData.thumbnailUrl} alt={newData.title} />
            </a>

            
        </div>
    )
}
export default PhotoDetails