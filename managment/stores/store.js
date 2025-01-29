import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "../slices/locationSlice"

export const store = configureStore({
     reducer : {
         "loc" : locationSlice
     }
})