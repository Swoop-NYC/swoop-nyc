import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import SideNav from './SideNav.jsx';
import { useState } from 'react';


const Header = () => {
  //local component state variable to hold the menu
  const [menu, setMenu] = useState([]);
  //function to delete the menu div
  const removeMenu = () => {
    setMenu([]);
  }
  //function to create the side menu onClick of the Menu button
  const showMenu = () => {
    setMenu([
    <div id='sideNav'>
      <Link to='/createpost' onClick={removeMenu}>CreatePost</Link>
      <Link to='/listings' onClick={removeMenu}>Listings</Link>
      <Link to='/signup' onClick={removeMenu}>Signup</Link>
      <Link to='/login' onClick={removeMenu}>Login</Link>
      </div>
      ])
  }

  return (
    <div id='header'>
      {/* will hold our hamburger menu icon, when clicked it will show the component for the side nav 
          As well as an image tag that has our site logo*/}
      <div id='header-left'>
        <Link to='/'><img id='header-logo' src='https://media.istockphoto.com/id/1146670231/vector/rubber-duck-vector-illustration.jpg?s=612x612&w=0&k=20&c=75fuQJhx-j5Q9O1ndmeunLPBKbrQxsTcZ1I6DYbVsnY='></img></Link>
      </div>
      <div id='header-right'>
        <Link to='/user-profile'>USER<img>{/* This will hold our logo on the left side of the header */}</img></Link>
        <button onclick onClick={showMenu}><span class="material-symbols-outlined">menu</span></button>
      </div>
      <Routes>
        {/* Takes you to the login page */}
        {/* Takes you to the users profile */}
        <Route path='/user-profile/*' element></Route>
        {/* Renders the dropdown menu on the page */}
        {/* <Route path='/dropdown/*' element={<SideNav/>}></Route> */}
      </Routes>
        {menu}
    </div>
  )
}

export default Header;