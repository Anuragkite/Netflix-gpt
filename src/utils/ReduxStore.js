import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from './userSlice'

const ReduxStore = configureStore({
    reducer:{
        user:userSliceReducer,
    }
})


export default ReduxStore;