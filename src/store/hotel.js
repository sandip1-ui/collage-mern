import { createSlice } from "@reduxjs/toolkit";

const allHotels=[];
const allPlaces=[];
export const hotelSlice=createSlice({
  name:'hotels',
  initialState:{allHotels},
  reducers:{
    setHotls:(state,action)=>{
      state.allHotels=action.payload;
    }
  }
})
export const placeSlice=createSlice({
  name:'placess',
  initialState:{allPlaces},
  reducers:{
    setPlaces:(state,action)=>{
      state.allPlaces=action.payload;
    }
  }
})

export const hotelActions=hotelSlice.actions
export const placeActions=placeSlice.actions