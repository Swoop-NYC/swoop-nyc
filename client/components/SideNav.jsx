import React, { useState } from 'react';
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import CreatePost from './sidenav/CreatePost.jsx';
import Listings from './containers/Listings.jsx';
import Login from './sidenav/Login.jsx';
import Signup from './sidenav/SignUp.jsx';



const SideNav = () => {
  


  return (
    <div id='sideNav'>
      {/* These are all the links for the side nav to names might have to be changed*/}
        {/* These are the routes for the sidenav all of the names are subject to chage as well as the names for the elements that they refer to */}
        <Route path='/createpost' element={<CreatePost/>}></Route>
        <Route path='listings' element={<Listings/>}></Route>
        <Route path='signup' element>{<Signup/>}</Route>
        <Route path='login' element>{<Login/>}</Route>
    </div>
  )
}

export default SideNav;