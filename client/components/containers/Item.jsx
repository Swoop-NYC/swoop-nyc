import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";


const Item = () => {

  //useselector to subscribe to the items piece of state to populate 
  const items = useSelector((state) => {return state.swoop.items})
  const [itemDiv, setItemDiv] = useState([]);

  //loop through the list from back to front & push all of the 
  const render = () => {
    if (items !== undefined) {
      for (let i = items.length -1; i >= 0; i--) {
        console.log('inside of the loop')
        itemDiv.push(
          <div id={items[i].title} className='items-post'>
            <h4>{items[i].title}</h4>
            <p>{items[i].location[0]},{items[i].location[1]} </p>
            <p>{items[i].description}</p>
            <p>Drop Date: {items[i].dropDate}</p>
          </div>
        )
      }
    }
  }

  //for filter form
  const [neighboorhoodValues, setNeighboorhoodValues] = useState([]);
  const neighboorhoodPicker = () => {
    const borough = document.querySelector('#filter-borough') 
    if (borough.value === 'Brooklyn') {
      setNeighboorhoodValues([
        <select id='filter-neighboorhood'>
          <option value="Bedford-Stuyvesant">Bedford-Stuyvesant</option>
          <option value="Brooklyn Heights">Brooklyn Heights</option>
          <option value="Bushwick">Bushwick</option>
          <option value="Dumbo">Dumbo</option>
          <option value="Greenpoint">Greenpoint</option>
          <option value="Park Slope">Park Slope</option>
          <option value="Williamsburg">Williamsburg</option>
        </select>
      ])
    }
    if (borough.value === 'Manhattan') {
      setNeighboorhoodValues([
        <select id='filter-neighboorhood'>
          <option value="East Village">East Village</option>
          <option value="Greenwich Village">Greenwich Village</option>
          <option value="Lower East Side">Lower East Side</option>
          <option value="SoHo">SoHo</option>
          <option value="Tribeca">Tribeca</option>
          <option value="Upper East Side">Upper East Side</option>
        </select>
      ])
    }
  };
  
  const renderWithFilter = () => {
    const filterChoice = document.querySelector('#filter-neighboorhood');
    
    console.log('filtered choice: ', filterChoice.value)
    const filter = [];
    if (items !== undefined) {
      for (let i = items.length -1; i >= 0; i--) {
        if (items[i].location[1] === filterChoice.value) {
          console.log(items[i].title)
          filter.push(
            <div id={items[i].title} className='items-post'>
              <h4>{items[i].title}</h4>
              <p>{items[i].location[0]},{items[i].location[1]} </p>
              <p>{items[i].description}</p>
              <p>Drop Date: {items[i].dropDate}</p>
            </div>
          )
        }
      }
    }
    setItemDiv(filter)
    }
  render();
  return (
    <div>
      <select id='filter-borough' onChange={neighboorhoodPicker}>
        <option value="default">Choose Your Borough</option>
        <option value="Brooklyn">Brooklyn</option>
        <option value="Manhattan">Manhattan</option>
      </select>
      {neighboorhoodValues}
      <button id='filter-button' onClick={renderWithFilter}>Filter by Location</button>
      {itemDiv}
    </div>
  )
}
export default Item;