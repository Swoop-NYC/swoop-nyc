import {configureStore} from '@reduxjs/toolkit'
import swoopSlice from './swoopSlice.js'

const store = configureStore({
    devTools: true,
    reducer: {
        swoop: swoopSlice
    }
});

export default store;