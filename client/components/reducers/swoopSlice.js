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
            state.items = action.response
            console.log('this is the current state: ', current(state));
        },
    }
});

export const {addItem, userLogIn, updateItems} = swoopSlice.actions

export default swoopSlice.reducer


