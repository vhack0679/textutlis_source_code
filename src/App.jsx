import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Aboout from "./components/Aboout";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
const [alert ,setalert]=useState(null);
const showAlert=(message ,type)=>{
 setalert({
  msg: message,
  type:type
 })
 setTimeout(()=>{
  setalert(null);
 },1500);
}
  const togglemode=()=>{
 if(mode === 'light'){
  setmode('dark');
  document.body.style.backgroundColor='black';
  document.body.style.color='white';
  showAlert("dark mode is enabeld" ,"success");

 }else{
  setmode('light');
  document.body.style.backgroundColor='white';
   document.body.style.color='black';
 showAlert("light mode is enabeld" ,"success");
  
 }
  }
  const [mode,setmode]=useState('light');
  return (    
<><Router>
<Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>

<div className="container my-3">
<Routes>

<Route path='/Aboout' element={<Aboout/>} />
<Route path='/' element={<TextForm heading="ENTER THE TEXT TO ANALYZE" showAlert={showAlert}/>} />
    
        </Routes>
</div>
</Router>
</>
     );
}

export default App;
