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
        <Link to='/'><img className='header-img' src='https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-green-cartoon-stair-illustration-image_1415214.jpg'></img></Link>
      </div>
      <div id='header-right'>
        <Link to='/user-profile'><img className='header-img' src='https://cdn-icons-png.flaticon.com/512/9131/9131529.png'></img></Link>
        <Link to='/favorite'><img className='header-img' src='https://w7.pngwing.com/pngs/437/274/png-transparent-heart-red-heart-thumbnail.png'></img></Link>
        <button 
          className='hamburger-menu-button' 
          onClick={() => setDisplayMenu((prev) => !prev)}>
          <span className="material-symbols-outlined">menu</span>
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
            to='/favorite' 
            onClick={() => setDisplayMenu((prev) => !prev)}
            className='white-blue-wrapper flex-center'>
              Favorite
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