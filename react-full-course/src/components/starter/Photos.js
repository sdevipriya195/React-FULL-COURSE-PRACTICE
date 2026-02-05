import { Link } from "react-router-dom"
import photosData from "./photosData"

const Photos=()=>{
    return(
        <div>
            <h1>Titles</h1>
            <div className="card-container">
            {photosData.map((eachPhoto)=>{
                const {id,title}=eachPhoto
                return(
                        <Link to={`/photos/${id}`} key={id}>
                            <div className="card">
                            <h5>{title}</h5>
                            </div>
                        </Link>
                )
            })}
            </div>

        </div>
    )
}
export default Photos