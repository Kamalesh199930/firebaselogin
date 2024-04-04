import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./RegisterAndLogin";
import HomeScreen from "./Home";
import './App.css';

function App() {
  return (
    <>
      
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<RegisterAndLogin/>}/>
          <Route path="/home" element={<HomeScreen/>}/>

          
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;
