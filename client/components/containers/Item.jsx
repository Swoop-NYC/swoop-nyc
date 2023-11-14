import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";


const Item = () => {

  //using this to try and get the listings page to pull info from the DB when you go directly to this page instead of navigating from the home page

  // const dispatch = useDispatch();
  // const grabItems = async () => {
  //   try {
  //     const getData = await fetch('/all-listings');
  //     if (!getData.ok) {
  //       // setFetchMessage([<p id='error'>An error occured, could not load listings.</p>])
  //     }
  //     const response = await getData.json();
  //     //dispatch this information to the global state
  //     dispatch(updateItems({response: response}));
  //   }
  //   catch (err) {
  //     // setFetchMessage([<p id='error'>An error occured, could not load listings. Error: {err.message}</p>])
  //     return;
  //   }
  // };
  // grabItems();

  //useselector to subscribe to the items piece of state to populate 
  const items = useSelector((state) => {return state.swoop.items})
  const [itemDiv, setItemDiv] = useState([]);//can use redux state

  //loop through the list from back to front & push all of the items in the itemDiv
  const render = () => {
    // grabItems();
    if (items !== undefined) {
      for (let i = items.length -1; i >= 0; i--) {
        console.log('inside of the loop')
        itemDiv.push(
          <div id={items[i].title} className='items-post'>
            <h4>{items[i].title}</h4>
            <img src={items[i].image} style={{height: '300px', width: '300px'}}/>
            <p>{items[i].location[0]},{items[i].location[1]} </p>
            <p>{items[i].description}</p>
            <p>Drop Date: {items[i].dropDate}</p>
          </div>
        )
      }
    }
  }
//do this filtering on fetch request w specified params
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
  
  //filtering listings by neighbored
  //send another fetch request with params that specify the neighboorhood
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
              <img src={items[i].image} style={{height: '300px', width: '300px'}}/>
              <p>{items[i].location[0]},{items[i].location[1]} </p>
              <p>{items[i].description}</p>
              <p>Drop Date: {items[i].dropDate}</p>
            </div>
          )
        }
      }
    }
    setItemDiv([]);
    setItemDiv(filter)
    }
  render();
  return (
    <div id="items-box">
      <div id="filter-buttons">
        <select id='filter-borough' onChange={neighboorhoodPicker}>
          <option value="default">Choose Your Borough</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Manhattan">Manhattan</option>
        </select>
        {neighboorhoodValues}
        <button id='filter-button' onClick={renderWithFilter}>Filter by Location</button>
      </div>

      {itemDiv}
    </div>
  )
}
export default Item;