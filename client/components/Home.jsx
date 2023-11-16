import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filteredItemsByNeighborhood } from './reducers/itemSlice';


const Home = () => {
  const dispatch = useDispatch();
  //grab the items from the store
  const itemsFromStore = useSelector((state) => state.item.items);
  
  // This function make sure that when user click the homepage we are reseting the store to be ALL items
  const resetNeighborhood = () => {
    dispatch(filteredItemsByNeighborhood([]));
  }
  resetNeighborhood();


  return (
    <>
    <div>
      <div className='title-div'>
      <h2>Welcome to ...</h2>
      <div className='home-page-text-wrapper blue-white-wrapper'>
        <h1>STOOPING</h1>
        <h2>(Stu-oop-ing)</h2>
      </div>
      <div className='home-page-text-wrapper'>
        <h1 className='big-line-height'>Recycling goods to <span className='underline'>make this world a better place</span></h1>
      </div>
      
      </div>
    </div>
    
    </>
   
  )
}

export default Home
