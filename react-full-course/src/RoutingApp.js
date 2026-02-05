import React, { useEffect, useState } from "react";
import "./index.css";
import { Route,Routes } from "react-router-dom";
//import About from "./components/final/About";
import Contact from "./components/final/Contact";
import Home from "./components/final/Home";
import Navbar from "./components/final/Navbar";
import Success from "./components/final/Success";
import NotFound from "./components/final/NotFound";
import Projects from "./components/final/Projects";
import FeaturedProjects from "./components/final/FeaturedProjects";
import NewProjects from "./components/final/NewProjects";
import Users from "./components/final/Users";
import UserDetails from "./components/final/UserDetails";
const LazyAbout=React.lazy(()=>import("./components/final/About"))

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" 
        element={
          <React.Suspense fallback="Loading...">
        <LazyAbout/>
        </React.Suspense>
        }
        />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/projects" element={<Projects/>}>
        <Route index element={<NewProjects/>}/>     //It renders this component by default
        <Route path="featured" element={<FeaturedProjects/>}/>
        <Route path="new" element={<NewProjects/>}/>
        </Route>
        <Route path="users" element={<Users/>}/>
        <Route path="/users/:userId" element={<UserDetails/>}/>
        </Routes>   
    </div>
  )
}

export default App;


































// import React from "react";
// import Home from "./components/starter/Home";
// import About from "./components/starter/About";
// import { Routes,Route } from "react-router-dom";
// import Contact from "./components/final/Contact";
// import Projects from "./components/starter/Projects";
// import FeaturedProjects from "./components/starter/FeaturedProjects";
// import NewProjects from "./components/starter/NewProjects";
// import Navbar from "./components/starter/Navbar";
// import "./index.css";
// import Success from "./components/starter/Success";
// import NotFound from "./components/starter/NotFound";
// import Photos from "./components/starter/Photos";
// import PhotoDetails from "./components/starter/PhotoDetails";
// const App=()=>{
//   return(
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/success" element={<Success/>}/>
//         <Route path="*" element={<NotFound/>}/>
//         <Route path="/photos" element={<Photos/>}/>
//         <Route path="/photos/:photoId" element={<PhotoDetails/>}/>

//         <Route path="/projects" element={<Projects/>}>
//         <Route index element={<NewProjects/>}/>
//         <Route path="featured" element={<FeaturedProjects/>}/>
//         <Route path="new" element={<NewProjects/>}/>
//         </Route>
//       </Routes>
//     </div>
//   ) 
// }
// export default App