import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from './userSlice'
import movieSliceReducer from "./movieSlice" 
import gptSliceReducer from "./GptSlice"
import configSliceReducer from "./configSlice"

const ReduxStore = configureStore({
    reducer:{
        user:userSliceReducer,
        movie: movieSliceReducer, 
        gpt:gptSliceReducer,
        config:configSliceReducer
    }
})


export default ReduxStore;