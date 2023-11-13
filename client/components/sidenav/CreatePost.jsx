import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
// import "../../../node_modules/react-datepicker/dist/react-datepicker.css";

//TODO: Add CSS for error message <p> tag 
//onClickOutside={(date) => setDropDate(date)}

const CreatePost = () => {
  //this piece of state will change based on the POST request
  const [postOutcome, setPostOutcome] = useState([])
  //this piece of state will be the default date for the date picker  (set to the current date)
  const [dropDate, setDropDate] = useState(new Date());
  //this piece of state will update the html for the following funciton
  const [neighboorhoodValues, setNeighboorhoodValues] = useState([]);

  //this function makes a post reques to DB. Called within createItem()
  const sendToDB = async (item) => {
    const options = {
      method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({item: item}),
    }
    try {
      const serverResponse = await fetch('/create-item', options);
      const response = await serverResponse.json();
      setPostOutcome([<p>Post sucessfully created.</p>]) //update the message the user sees to 
    }
    catch (err) {
      setPostOutcome([<p id='posting-error'>An error occured. Failed to post your item.</p>])
      console.log(err);
    }
  }

  //this function grabs form field info, and sends it to sendToDB()
  const createItem = () => {
    //grab all form values 
    const formTitle = document.querySelector('#form-title');
    const formBorough = document.querySelector('#form-borough');
    const formNeighboorhood = document.querySelector('#form-neighboorhood');
    const formDesc = document.querySelector('#form-desc');
    const formImg = document.querySelector('#form-img');
    //build an item object with the form values 
    const item = {}; 
    item.title = formTitle.value;
    item.location = {borough: formBorough.value, neighboorhood: formNeighboorhood.value};
    item.decription = formDesc.value;
    item.dropDate = dropDate;
    // item.image = formImg.value;
    //consolelog the values
    console.log('here are the contents of the item object: ', item);
    //invoke the async function that sends the constructed item to the DB
    return sendToDB(item);
  }

  //this function will populate a new selector field in the form based on what borough is selected
  const neighboorhoodPicker = () => {
    const borough = document.querySelector('#form-borough') 
    if (borough.value === 'Brooklyn') {
      setNeighboorhoodValues([
        <select id='form-neighboorhood'>
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
        <select id='form-neighboorhood'>
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
  
  //returns a form
  return (
    <div>
      <label>Title</label>
      <input id='form-title' placeholder='Velvet Couch' type='text' name='item-title'></input>
        <select id='form-borough' onChange={neighboorhoodPicker}>
          <option value="Brooklyn"></option>
          <option value="Manhattan"></option>
        </select>
        {neighboorhoodValues}
        <DatePicker selected={dropDate} onChange={(date) => setDropDate(date)} />
        <textarea id='form-desc' placeholder='Can be found at 59th Broadway...'></textarea>
        <input type='file' id='form-img' accept="image/png, image/jpeg"></input>
        <button onClick={createItem}>Post Your Item</button>
        {postOutcome}
    </div>
   
  );
}

export default CreatePost;