import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

const Header = () => {
  return (
    <Router>

    <div>
      {/* will hold our hamburger menu icon, when clicked it will show the component for the side nav */}
      <Link to='/login'>LOGIN</Link>
      <Link to='/userProfile'><img>{/* This will hold our logo on the left side of the header */}</img></Link>
      <Link to='/dropdown'><img>{/*This will hold the hamburger dropdown menu*/}</img></Link>
    </div>

    <Routes>
      {/* Takes you to the login page */}
      <Route path='login' element></Route>
      {/* Takes you to the users profile */}
      <Route path='userProfile' element></Route>
      {/* Renders the dropdown menu on the page */}
      <Route path='/dropdown' element></Route>
    </Routes>

    </Router>


  )
}

export default Header;