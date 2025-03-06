import { createSlice } from "@reduxjs/toolkit";

const item={};

const hotelInfoSlice=createSlice({
  name:'hotelinfo',
  initialState:{item},
  reducers:{
    setHotelInfo:(state,action)=>{
        state.item=action.payload;
    }
  }
})
export default hotelInfoSlice;
export const hotelInfoActions=hotelInfoSlice.actions;