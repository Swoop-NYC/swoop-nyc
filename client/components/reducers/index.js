import {configureStore} from '@reduxjs/toolkit'
import swoopSlice from './swoopSlice.js'

//it combines all the reducers into ONE
const store = configureStore({
    devTools: true,
    reducer: {
        swoop: swoopSlice,
    }
});

export default store;