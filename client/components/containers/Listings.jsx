import React from "react";
import Item from "./Item.jsx";



const Listings = () => {
  const title = document.querySelector('#title-div');
  title.style.display ='none';
  return (
    <div id='items-container'>
      <Item/>
    </div>
  )
}
export default Listings;