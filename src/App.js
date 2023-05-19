import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from "./components/Homepage";
import EmployeePage from "./components/EmployeePage";



function App(){

  return(

  //   <Router>
  //     <nav>
  //       <Link to="/">Home</Link>
  //       <Link to="/about">About</Link>
  //       <Link to="/profile">Profile</Link>
  //     </nav>
  //     <Routes>
  //       <Route path="/" element={<Home/>} />
  //       <Route path="/about" element={<About/>} />
  //       <Route path="/profile/:username" element={<Profile/>} />
  //       <Route path="*" element={<ErrorPage/>} />
  //     </Routes>
  //   </Router>
  // 
    
      <div className=" w-1/2 flex flex-row flex border-black border-2 ">
        <Homepage/>
        <EmployeePage/>
      </div>
     
  )



}
export default App