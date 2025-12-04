import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from './userSlice'
import movieSliceReducer from "./movieSlice" 
import gptSliceReducer from "./GptSlice" 
const ReduxStore = configureStore({
    reducer:{
        user:userSliceReducer,
        movie: movieSliceReducer, 
        gpt:gptSliceReducer,
        
    }
})


export default ReduxStore;