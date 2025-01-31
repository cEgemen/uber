import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    imgRef : null,
    title : null,
    description : null , 
    startLoc  : {lat : null , lon : null},
    endLoc  : {lat : null , lon : null},
}

const favLocSlice = createSlice({
       initialState,
       name : "favLoc",
       reducers : {
           saveFavLoc : (state  ,  action) => {

           }
       }
})


export const {saveFavLoc} = favLocSlice.actions
export default favLocSlice.reducer