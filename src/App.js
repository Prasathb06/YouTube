
// import React{useState} from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Router } from 'react-router-dom';
import Allroutes from "../src/Allroutes";
import Drawersliderbar from './Component/Leftsidebar/Drawersliderbar';
function App() {
  const [toggledrawersidebar,settogglerawersidebar]=useState({
    display:"none",
  });
  const toggledrawer =()=>{
    if (toggledrawersidebar.display==="none") {
      settogglerawersidebar({
        display:"flex",
      });
    } else {
      settogglerawersidebar({
        display:"none",
      });
    }
  }
  const [editcreatechanelbtn, seteditcreatechanelbtn] = useState(false);
  // const [videouploadpage, setvideouploadpage] = useState(false);
  return (
    <Router><Navbar  seteditcreatechanelbtn={seteditcreatechanelbtn} toggledrawer={toggledrawer} />
    <Allroutes></Allroutes>
    <Drawersliderbar toggledraw={toggledrawer} toggledrawersidebar={toggledrawersidebar}/>
    </Router>
    
  );
}

export default App;
