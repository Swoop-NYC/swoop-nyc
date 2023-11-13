import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import SideNav from './SideNav.jsx';

function correctDropbox() {
  let dropdown = document.querySelector('#dropdown')
  dropdown.innerText
}

const Header = () => {
  return (

    <div id='header'>
      {/* will hold our hamburger menu icon, when clicked it will show the component for the side nav 
          As well as an image tag that has our site logo*/}
      <div id='header-left'>
        <img id='header-logo' src='https://media.istockphoto.com/id/1146670231/vector/rubber-duck-vector-illustration.jpg?s=612x612&w=0&k=20&c=75fuQJhx-j5Q9O1ndmeunLPBKbrQxsTcZ1I6DYbVsnY='></img>
      </div>
      <div id='header-right'>
        <Link to='/user-profile'>USER<img>{/* This will hold our logo on the left side of the header */}</img></Link>
        <Link onClick={() => correctDropbox} id='dropdown'  to='/dropdown'>DROPDOWN<img>{/*This will hold the hamburger dropdown menu*/}</img></Link>
      </div>
      <Routes>
        {/* Takes you to the login page */}
        {/* Takes you to the users profile */}
        <Route path='/user-profile/*' element></Route>
        {/* Renders the dropdown menu on the page */}
        <Route path='/dropdown/*' element={<SideNav/>}></Route>
      </Routes>
    </div>



  )
}

export default Header;