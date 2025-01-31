import { asyncThunkCreator, createSlice } from "@reduxjs/toolkit";


const initialState = {
     startLocation:{lat:null,lon:null,title:null,description:null},
     endLocation:{lat:null,lon:null,title:null,description:null}
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
          }
     }
})

 export  const {setEndLocation,setStartLoction} = locationSlice.actions

 export default locationSlice.reducer