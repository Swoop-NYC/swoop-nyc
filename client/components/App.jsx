import React from 'react';
import Header from './Header.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SideNav from './SideNav.jsx';
import '../styles.css'
import '../../build/calendar.css'
import CreatePost from './sidenav/CreatePost.jsx';
import Listings from './containers/Listings.jsx';
import Login from './sidenav/Login.jsx';
import Signup from './sidenav/SignUp.jsx';

const App = () => {
  return (
    <Router>
    <div>
    <Header></Header>
    <h1>STOOPING</h1>
    <h2>(Stuh-oop-ing)</h2>
    <h1>The Proccess of Recycling goods for eachtohers benefits</h1>
    </div>
      <Routes>
        <Route path='/createpost' element={<CreatePost/>}></Route>
        <Route path='/listings' element={<Listings/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </Router>

  )
}

export default App;