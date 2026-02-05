import { NavLink } from "react-router-dom"
const Navbar=()=>{
    return(
        <div>
            <nav className="primary-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/users">Users</NavLink>
            </nav>

        </div>
    )
}
export default Navbar