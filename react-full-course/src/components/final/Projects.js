import { NavLink, Outlet} from "react-router-dom"
const Projects=()=>{
    return(
        <div>
            <h4>Projects</h4>
        <nav>
            <NavLink to="/projects/featured">Featured Projects</NavLink>
            <NavLink to="/projects/new">New Projects</NavLink>
            <Outlet/>
        </nav>
        </div>
    )
}
export default Projects