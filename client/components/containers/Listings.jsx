import React from "react";
import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import Item from "./Item.jsx";
import updateItems from '../reducers/swoopSlice.js'


const Listings = () => {

  const dispatch = useDispatch();

  const [fetchMessage, setFetchMessage] = useState([])
  const [load, setLoad] = useState([false])
  //function to be used inside of the useEffect hook - it will grab data from the DB and then update the state
  const grabItems = async () => {
    try {
      const getData = await fetch('/all-listings');
      if (!getData.ok) {
        setFetchMessage([<p id='error'>An error occured, could not load listings.</p>])
      }
      const response = await getData.json();
      console.log('On the Listings page, here is the response from the server: ', response);
      dispatch(updateItems({response}));
    }
    catch (err) {
      setFetchMessage([<p id='error'>An error occured, could not load listings. Error: {err.message}</p>])
    }
  };

  useEffect(() => {
    grabItems();
  },[])

  return (
    <div>
      <Item/>
    </div>
  )
}

export default Listings;