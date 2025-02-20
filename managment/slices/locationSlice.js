import { createSlice } from "@reduxjs/toolkit";


const initialState = {
     startLocation:{lat:null,lon:null,title:null,description:null},
     endLocation:{lat:null,lon:null,title:null,description:null},
     locationData : {duration : null , distance : null}
}

const locationSlice = createSlice({
     initialState,
     name:"loc",
     reducers:{
          setStartLoction : (state,action) => {
               state.startLocation.lat = action.payload.lat;
               state.startLocation.lon = action.payload.lon;
               state.startLocation.title = action.payload.title
               state.startLocation.description = action.payload.description;
          },
          setEndLocation : (state,action) => {
               state.endLocation.description = action.payload.description;
               state.endLocation.title = action.payload.title;
               state.endLocation.lat = action.payload.lat;
               state.endLocation.lon = action.payload.lon;
          },
          resEndLocation : (state,action) => {
               state.endLocation.description = null;
               state.endLocation.title = null;
               state.endLocation.lat = null;
               state.endLocation.lon = null
          },
          setLocationData : (state , action) => {
               state.locationData.distance = action.payload.distance;
               state.locationData.duration = action.payload.duration;
          },
     }
})

 export  const {setEndLocation,setStartLoction,setLocationData,resEndLocation} = locationSlice.actions

 export default locationSlice.reducer