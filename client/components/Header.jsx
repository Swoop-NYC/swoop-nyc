import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import SideNav from './SideNav.jsx';
import { useState } from 'react';


const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <div className='header'>
      {/* will hold our hamburger menu icon, when clicked it will show the component for the side nav 
          As well as an image tag that has our site logo*/}
      <div id='header-left'>
        <Link to='/'><img className='header-img' src='https://icon2.cleanpng.com/20180131/lrw/kisspng-rubber-duck-toy-bathtub-duck-transparent-png-5a718ed0a87b54.9020242215173915686901.jpg'></img></Link>
      </div>
      <div id='header-right'>
        <Link to='/user-profile'><img className='header-img' src='https://res.cloudinary.com/teepublic/image/private/s--ro_eGQ0e--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1633446389/production/designs/24746430_0.jpg'></img></Link>
        <button 
          className='hamburger-menu-button' 
          onClick={() => setDisplayMenu((prev) => !prev)}>
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
      
      <Routes>
        <Route path='/user-profile/*' element></Route>
      </Routes>
      {/* ********************Flip Menu on and off ***************************** */}
      {displayMenu && <div className='menubar-wrapper'>
        <div className='sideNav'>
          <Link 
            to='/createpost' 
            onClick={() => setDisplayMenu((prev) => !prev)}
            className='white-blue-wrapper flex-center'>
              CreatePost
          </Link>
          <Link 
            to='/listings' 
            onClick={() => setDisplayMenu((prev) => !prev)}
            className='white-blue-wrapper flex-center'>
              Listings
            </Link>
          <Link 
            to='/signup' 
            onClick={() => setDisplayMenu((prev) => !prev)}
            className='white-blue-wrapper flex-center'>
              Signup
          </Link>
          <Link 
            to='/login' 
            onClick={() => setDisplayMenu((prev) => !prev)}
            className='white-blue-wrapper flex-center'>
              Login
          </Link>
        </div>
      </div>}
    </div>
  )
}

export default Header;