import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "../slices/locationSlice"
import  saveFavLocSlice from "../slices/favLocSlice";

export const store = configureStore({
     reducer : {
         "loc" : locationSlice,
         "favLoc" : saveFavLocSlice
     }
})