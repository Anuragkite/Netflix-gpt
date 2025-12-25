import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
name:"gpt",
initialState:{
    showGptSearch:false,
    content:"Fetching Response",
},
reducers:{
    toggleGptSearchView:(state)=>{
        state.showGptSearch = !state.showGptSearch;
    },
    addContent:(state,actions)=>{
        state.content = actions.payload;
    }

},



});

export const {toggleGptSearchView,addContent} = gptSlice.actions;
export default gptSlice.reducer;