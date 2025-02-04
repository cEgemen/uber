import { createSlice } from "@reduxjs/toolkit";

const initialState = {favList : [{ title :  "Bus station" , startLocation :  {description: "London, UK", lat: 51.5072178, lon: -0.1275862}
    ,  endLocation :  {description: "London Bridge Station, London, UK", lat: 51.5060748, lon: -0.08741970000000002}}]}
    
const favLocSlice = createSlice({
       initialState,
       name : "favLoc",
       reducers : {
           saveFavLoc : (state  ,  action) => {
               const  title = action.payload.title;
               const  startLocation = {lat : action.payload.startLoc.lat,lon:action.payload.startLoc.lon,description:action.payload.startLoc.description};
               const  endLocation = {lat : action.payload.endLoc.lat,lon:action.payload.endLoc.lon,description:action.payload.endLoc.description};
               state.favList = [...state.favList,{title,startLocation,endLocation}]
            }
       }
})


export const {saveFavLoc} = favLocSlice.actions
export default favLocSlice.reducer