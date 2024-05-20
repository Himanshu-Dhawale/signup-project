import axios from "axios";
 import React, { useEffect, useState } from "react"; 
import Sidebar from "./components/Sidebar";
import "./App.css"
import SecondSidebar from "./components/SecondSidebar/SecondSidebar";
import Player from "./components/Player";

 const App = () => {
  


  

  return ( 
  <div className="App relative w-[1512px] h-[895px] bg-[#000000]">
   <Sidebar/>
   <SecondSidebar/>
   <Player/>
  </div> 
); 

}; 
export default App;