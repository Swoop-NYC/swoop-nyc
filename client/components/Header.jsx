import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

const Header = () => {
  return (

    <div id='header'>
      {/* will hold our hamburger menu icon, when clicked it will show the component for the side nav 
          As well as an image tag that has our site logo*/}
      <img></img>
      <Link to='/login'>LOGIN</Link>
      <Link to='/user-profile'>USER<img>{/* This will hold our logo on the left side of the header */}</img></Link>
      <Link to='/dropdown'>DROPDOWN<img>{/*This will hold the hamburger dropdown menu*/}</img></Link>
      <Routes>
        {/* Takes you to the login page */}
        <Route path='login' element></Route>
        {/* Takes you to the users profile */}
        <Route path='user-profile' element></Route>
        {/* Renders the dropdown menu on the page */}
        <Route path='/dropdown' element></Route>
      </Routes>
    </div>



  )
}

export default Header;