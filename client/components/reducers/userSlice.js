import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {},
        items: [],
        favItems: [],
        isLoggedIn: false
    },
    reducers: {
        userLogIn: (state,action) => {
            // state.isLoggedIn = true;
            // state.currentUser = action.payload; // TODO: remember to add prop to action.payload
        },
    },
});

export const { userLogIn } = userSlice.actions;

export default userSlice.reducer;

