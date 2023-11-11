import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

const Header = () => {
  return (
    <Router>
    <div>
      {/* will hold our hamburger menu icon, when clicked it will show the component for the side nav */}
      <Link to='/login'></Link>
      <Link to='/userProfile'><img>{/* This will hold our logo on the left side of the header */}</img></Link>
    </div>

    <Routes>
      <Route path='login' element></Route>
      <Route path='userProfile' element></Route>
    </Routes>

    </Router>


  )
}

export default Header;