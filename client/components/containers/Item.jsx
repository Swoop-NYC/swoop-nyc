import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { filteredItemsByNeighborhood, updateItems } from '../reducers/itemSlice.js';

const Item = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    return state.item.items;
  });
  let [neighborhoodValues, setNeighborhoodValues] = useState([]);
  let filteredItems = useSelector((state) => {
    return state.item.filteredItems;
  });
  
  function handleClickFav(id){
    console.log(`${id} is being clicked!`)
  }

  const grabItems = async () => {
      try {
        const getData = await fetch('/all-listings');
        if (!getData.ok) {
          // setFetchMessage([<p id='error'>An error occured, could not load listings.</p>])
        }
        const response = await getData.json();
        //dispatch this information to the global state
        dispatch(updateItems({ response: response }));
      } catch (err) {
        // setFetchMessage([<p id='error'>An error occured, could not load listings. Error: {err.message}</p>])
        return;
      }
    };

  console.log('filteredItems: ', filteredItems); // Filtered items
  console.log('items:', items); // ALL items
  // renderItems will check if theres items in the filteredItems array, if it is, it will renderthe filter. if there are no items in the filteredItems, it will render ALL listings(itemDiv)
  // console.log('length:', filteredItems.length)
  let renderItems;
  if (filteredItems.length > 0){
    renderItems = filteredItems.map((item) => (
      <div key={item._id} className='items-post'>
        <h4>{item.title}</h4>
        <div className='card-image-wrapper'>
          <img src={item.image} style={{ height: '300px', width: '300px' }} />
          <svg
            className='heart-svg'
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 24 24'
            onClick={() => handleClickFav(item._id)}
          >
            <path
              d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
              stroke='red'
              fill='none'
            />
          </svg>
        </div>
        <p>
          {item.location[0]}, {item.location[1]}{' '}
        </p>
        <p>{item.description}</p>
        <p>Drop Date: {item.dropDate}</p>
      </div>
    ));
  } else renderItems = (
    <div>
      <span>
        <h1>No Results Found</h1>
        <button onClick = {grabItems} >
          Reset
        </button>
      </span>
    </div>
  );
  // if (filteredItems.length > 0) renderItems = filteredItems;
  // else if (filteredItems.length === 0) // display a <p1> no results found <p1>
  // renderItems = filteredItems.length > 0 ? filteredItems : items;


  // if (filteredItems.length === 0){
  //   let renderItemsComponent = (<div><h1>No Results Found</h1><div/>)
  // }else {

  // }


// const renderItemsComponent = renderItems.map((item) => (
//   <div key={item._id} className='items-post'>
//     <h4>{item.title}</h4>
//     <div className="card-image-wrapper">
//        <img src={item.image} style={{ height: '300px', width: '300px' }} />
//        <svg 
//        className='heart-svg'
//        xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
//        onClick={() => handleClickFav(item._id)}
//        >
//         <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="red" fill="none"/>
//       </svg>
//     </div>
//     <p>
//       {item.location[0]}, {item.location[1]}{' '}
//     </p>
//     <p>{item.description}</p>
//     <p>Drop Date: {item.dropDate}</p>
//   </div>
// ));

  const neighborhoodPicker = () => {
    const borough = document.querySelector('.filter-by-borough');
    if (borough.value === 'Brooklyn') {
      setNeighborhoodValues([
        <select id='filter-neighborhood'>
          <option value='Bedford-Stuyvesant'>Bedford-Stuyvesant</option>
          <option value='Brooklyn Heights'>Brooklyn Heights</option>
          <option value='Bushwick'>Bushwick</option>
          <option value='Dumbo'>Dumbo</option>
          <option value='Greenpoint'>Greenpoint</option>
          <option value='Park Slope'>Park Slope</option>
          <option value='Williamsburg'>Williamsburg</option>
        </select>,
      ]);
    }
    if (borough.value === 'Manhattan') {
      setNeighborhoodValues([
        <select id='filter-neighborhood'>
          <option value='East Village'>East Village</option>
          <option value='Greenwich Village'>Greenwich Village</option>
          <option value='Lower East Side'>Lower East Side</option>
          <option value='SoHo'>SoHo</option>
          <option value='Tribeca'>Tribeca</option>
          <option value='Upper East Side'>Upper East Side</option>
        </select>,
      ]);
    }
  };

  const renderWithFilter = () => {
    let selectedNeighborhood = document.getElementById('filter-neighborhood');
    selectedNeighborhood =
      selectedNeighborhood.options[selectedNeighborhood.selectedIndex].value;
    console.log('selectedNeighborhood: ', selectedNeighborhood);
    dispatch(filteredItemsByNeighborhood(selectedNeighborhood));
  };
  
  return (
    <div className='items-box'>
      <div className='filter-buttons flex-center'>
        <select className='filter-by-borough' onChange={neighborhoodPicker}>
          <option className='filter-button' value='default'>Choose Your Borough</option>
          <option className='filter-button' value='Brooklyn'>Brooklyn</option>
          <option className='filter-button' value='Manhattan'>Manhattan</option>
        </select>
        {neighborhoodValues}
        <button className='filter-by-location' onClick={renderWithFilter}>
          Filter by Location
        </button>
      </div>
      <div className='item-div'>
      {renderItems}
      </div>
      
    </div>
  );
}
export default Item;