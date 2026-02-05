import React from "react"
import { NavLink,Outlet } from "react-router-dom"

const Projects=()=>{
    return(
        <div>
            <h1>Projects</h1>
            <nav>
                <NavLink to="/projects/featured">Featured Projects</NavLink>
                <NavLink to="/projects/new">New Projects</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}
export default Projects