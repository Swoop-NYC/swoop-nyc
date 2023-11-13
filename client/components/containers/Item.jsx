import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";


const Item = () => {

  //useselector to subscribe to the items piece of state to populate 
  const allItems = useSelector((state) => {state.items})

  const [itemDiv, setItemDiv] = useState([]);
  const hold = [];
  //loop through the list from back to front & push all of the 

  /*title: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  location: {type: Object, required: true},
  dropTime: {type: Date, default: Date.now},
  expireAt: {type: Date, expires: '1d'} */
  
  const renderItems = () => {
    if (allItems !== undefined) {
      for (let i = allItems.length; i >= 0; i--) {
        hold.push(
          <div id={allItems[i].title}>
            <h4>{allItems[i].title}</h4>
            <p>{allItems[i].location.borough},{allItems[i].location.neighborhood} </p>
            <p>{allItems[i].description}</p>
            <p>Drop Date: allItems[i].dropTime</p>
          </div>
        )
      }
      setItemDiv(hold)
    }
  }
  
  
  return (
    <div onLoad={renderItems}>
      {itemDiv}
    </div>
  )
}
export default Item;