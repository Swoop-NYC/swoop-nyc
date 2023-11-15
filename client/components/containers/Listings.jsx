import React from "react";
import Item from "./Item.jsx";



const Listings = ({setShowHomePage}) => {
  // const title = document.querySelector('#title-div');
  // title.style.display ='none';

  //make the home page goes away
  setShowHomePage(false)

  return (
    <div id='items-container'>
      <Item/>
    </div>
  )
}
export default Listings;