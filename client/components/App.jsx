import React from 'react';
import Header from './Header.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SideNav from './SideNav.jsx';
import '../styles.css'


const App = () => {
  return (
    <Router>
    <div>
    <Header></Header>
    <SideNav></SideNav>
{  /*    <Header/> 
  <SideNav/> */}
  <p>Hi</p>
    </div>
    </Router>

  )
}

export default App;