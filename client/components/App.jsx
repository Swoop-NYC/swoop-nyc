import React from 'react';
import Header from './Header.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SideNav from './SideNav.jsx';
import '../styles.css'
import '../../build/calendar.css'
import CreatePost from './sidenav/CreatePost.jsx';


const App = () => {
  return (
    <Router>
    <div>
    <Header></Header>
{  /*    <Header/> 
  <SideNav/> */}
    </div>
      <Routes>
        <Route path='/createpost' element={<CreatePost/>}></Route>
      </Routes>
    </Router>

  )
}

export default App;