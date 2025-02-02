import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title : null,
    startLocation  : {lat : null , lon : null},
    endLocation  : {lat : null , lon : null},
}

const favLocSlice = createSlice({
       initialState,
       name : "favLoc",
       reducers : {
           saveFavLoc : (state  ,  action) => {
               state.title = action.payload.title;
               state.startLocation = {lat : action.payload.startLoc.lat,lon:action.payload.startLoc.lon};
               state.endLocation = {lat : action.payload.endLoc.lat,lon:action.payload.endLoc.lon};
            }
       }
})


export const {saveFavLoc} = favLocSlice.actions
export default favLocSlice.reducer