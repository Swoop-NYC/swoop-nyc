import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";

// import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
//import supabase API and set up connection to supabase storage of images
  //we've implemented row-level security to the database so the API key can be on the client side
import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://bmvohouexqmijckbooug.supabase.co' // jacksons
const supabaseUrl = 'https://sysmfptozoghrjoddqml.supabase.co'; // titans
const supabaseKey = process.env.REACT_APP_SUPABASE
const supabase = createClient(supabaseUrl, supabaseKey)

//TODO: Add CSS for error message <p> tag 
//onClickOutside={(date) => setDropDate(date)}

const CreatePost = () => {
  //this piece of state will change based on the POST request
  const [postOutcome, setPostOutcome] = useState([])
  //this piece of state will be the default date for the date picker  (set to the current date)
  const [dropDate, setDropDate] = useState(new Date());
  //this piece of state will update the html for the following funciton
  const [neighboorhoodValues, setNeighboorhoodValues] = useState([]);

  //make the home page goes away
  // setShowHomePage(false)

  //this function makes a post reques to DB. Called within createItem()
  const sendToDB = async (item) => {
    //add image to supabase and get the URL back, add the URL to the request body
    try{
      //upload image
      const {data, error} = await supabase
        .storage
        .from('item-image')
        .upload(item.image.name, item.image)

      //get the url from the uploaded image
      const imageUrl = await supabase
        .storage
        .from('item-image')
        .getPublicUrl(item.image.name)
      
        //update value of item.image to the string of the url
        item.image = imageUrl.data.publicUrl; //TODO: remember to change this
        console.log('data received from image upload', imageUrl.data.publicUrl);
    } catch (err) {console.log(err);}

    try {
      item = JSON.stringify(item);
      const options = {
        method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: item
      }

      console.log('JSON item', item);
      
      const serverResponse = await fetch('/create-item', options);
      const response = await serverResponse.json();
      console.log('we are in the frontend after button click', response)
      setPostOutcome([<p>Post sucessfully created.</p>]) //update the message the user sees to 
    }
    catch (err) {
      setPostOutcome([<p id='error'>An error occured. Failed to post your item.</p>])
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
    item.location = [ formBorough.value, formNeighboorhood.value];
    item.description = formDesc.value;
    item.dropDate = dropDate;
    item.image = formImg.files[0];
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
    <div id="post-form">
      <div className="form-field">
        <div className="form-field-left">
          <label>Title</label>
        </div>
        <div className="form-field-right">
          <input id='form-title' placeholder='Velvet Couch' type='text' name='item-title'></input>
        </div>
      </div>
      <div className="form-field">
        <div className="form-field-left">
          <label>Location</label>
        </div>
        <div className="form-field-right">
          <select id='form-borough' onChange={neighboorhoodPicker}>
          <option value="Choose a Bourough">Bourough</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Manhattan">Manhattan</option>
          </select>
          {neighboorhoodValues}
        </div>
        </div>
        <div className="form-field">
          <div className="form-field-left">
            <label>Drop Date</label>
          </div>
          <div className="form-field-right">
            <DatePicker selected={dropDate} onChange={(date) => setDropDate(date)} />
          </div>
        </div>
        <div className="form-field">
          <div className="form-field-left">
            <label>Item Description</label>
          </div>
          <div className="form-field-right">
            <textarea id='form-desc' placeholder='Can be found at 59th Broadway...'></textarea>
          </div>
        </div>
        <div className="form-field">
          <div className="form-field-left">
            <label>Image Upload</label>
          </div>
          <div className="form-field-right">
            <input type='file' id='form-img' accept="image/png, image/jpeg"></input>
          </div>
        </div>
          <div className="button-form-field">
            <button onClick={createItem}>Post Your Item</button>
          </div>
        {postOutcome}
    </div>
   
  );
}

export default CreatePost;