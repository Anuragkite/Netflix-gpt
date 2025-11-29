import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from './userSlice'
import movieSliceReducer from "./movieSlice" 
const ReduxStore = configureStore({
    reducer:{
        user:userSliceReducer,
        movie: movieSliceReducer, 
    }
})


export default ReduxStore;