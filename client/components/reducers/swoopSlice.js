import {createSlice,current} from '@reduxjs/toolkit'

export const swoopSlice = createSlice({
    name: 'swoop',
    initialState: {
        currentUser: {},
        items: [],
        isLoggedIn: false
    },
    reducers: {
        addItem: (state,action) => {
            const newItem = {
                //populate the with the input fields
            }
            //update the state here 
            state.items.push(newItem)
        },
        userLogIn: (state,action) => {
            state.isLoggedIn = true
            state.currentUser = User
        },
        updateItems: (state, action) => {
            const items = action.payload.response;
            state.items = items
            
        },
    }
});

export const {addItem, userLogIn, updateItems} = swoopSlice.actions

export default swoopSlice.reducer


