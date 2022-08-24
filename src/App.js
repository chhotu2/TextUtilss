import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import React, {useState} from 'react'
import Alert from "./Components/Alert";
 
 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode,setmode]=useState('light');

const[alert,setAlert]=useState(null);

 
 

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })

  setTimeout(()=>{
    setAlert(null);
  },3000);
}


const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = 'orange';
      showAlert("Dark mode has been enabled!","success");
       
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!","success");
     
    }
  }
   
    return (
      <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      {/* /users --> Component 1
          /users/home --> Component 2 */}
            <Route  exact path="/about"element={<About/>}> </Route>
              
            <Route  exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
              
            </Route>
      </Routes>
      </div>
      </Router>
      </> 
    );
  }
  
  export default App;