import React from "react";
import NavBar from './NavBar'
import  Mainbanner from"./Mainbanner"
import "./style.css"
import About from "./About";
import Footer from "./Footer";
import Skills from "./Skills";


const App = () => {
  return (
    <div> 
      <NavBar/>
      <Mainbanner/>
      <About/>
      <Skills/>
      <Footer/>
      

      </div>
  )
}

export default App