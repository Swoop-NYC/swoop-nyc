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
    }
});

export const {addItem, userLogIn} = swoopSlice.actions

export default swoopSlice.reducer


