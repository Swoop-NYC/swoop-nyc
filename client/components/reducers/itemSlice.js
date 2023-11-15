import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    items: [],
    filteredItems: [], // new state to store the filtered items
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        //populate the newItem the input fields
      };
      state.items.push(newItem); // update state here
    },
    updateItems: (state, action) => {
      const items = action.payload.response;
      state.items = items;
      // do we need to do anything to the filteredItems? such as...
      // the ideas is to have two arrays of items and filteredItems, the items will always have ALL listings, whereas the filteredItems is just a copy and once called up, will filter by neighborhood
      state.filteredItems = items;
    },
    filteredItemsByNeighborhood: (state, action) => {
        const selectedNeighborhood = action.payload;
        // below will reassign filteredItems by going through the items array, and see if the selectedNeighborhood matches the item's neighborhood property
        state.filteredItems = state.items.filter(item => item.location[1] === action.payload.neighborhood); // pass in action.payload.neighborhood
        // send in action.payload.neighborhood from userInput, via filter button
    }
  },
});
export const { addItem, updateItems, filteredItemsByNeighborhood } = itemSlice.actions;

export default itemSlice.reducer

// item{
//   title:...
//   image: // source
//   description: //...
//   dropDate: //...
//   location: // [burrough, neighborhood] 
// }