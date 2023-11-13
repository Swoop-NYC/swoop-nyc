import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import SideNav from './SideNav.jsx';
import { useState } from 'react';


const Header = () => {


  const [status,setstatus] = useState([])
  let open = false
  function sideNavStatus(){
    console.log('the menu is open', open)
    //if the menu is not open populate the status state with the links
    if(!open){setstatus([<div id='sideNav'><Link to='/createpost'> createPost</Link><Link to='/listings'>Listings</Link><Link to='/signup'>Signup</Link><Link to='/login'>Login</Link></div>])
    //set the open var to true
    open = true
    //console.log the menu is open
    console.log('menu is open',open)
  }
  //if the menu is open 
  if(open){
    //console.log menu is closed
    console.log('menu is closed',open)
  }
    console.log(status)
  }




  return (

    <div id='header'>
      {/* will hold our hamburger menu icon, when clicked it will show the component for the side nav 
          As well as an image tag that has our site logo*/}
      <div id='header-left'>
        <img id='header-logo' src='https://media.istockphoto.com/id/1146670231/vector/rubber-duck-vector-illustration.jpg?s=612x612&w=0&k=20&c=75fuQJhx-j5Q9O1ndmeunLPBKbrQxsTcZ1I6DYbVsnY='></img>
      </div>
      <div id='header-right'>
        <Link to='/user-profile'>USER<img>{/* This will hold our logo on the left side of the header */}</img></Link>
        <button onClick={sideNavStatus}>DropDown</button>
        {status}
=      </div>
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