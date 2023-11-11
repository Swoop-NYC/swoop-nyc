import React from 'react';
import Header from './components/Header.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SideNav from './components/SideNav.jsx';
import './styles.css'


const App = () => {
  return (
    <div>
      <Header/> 
      <SideNav/>
    </div>
  )
}

export default App;