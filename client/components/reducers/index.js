import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import itemReducer from './itemSlice';

//it combines all the reducers into ONE
const store = configureStore({
    devTools: true,
    reducer: {
        user: userReducer,
        item: itemReducer
    }
});

export default store;