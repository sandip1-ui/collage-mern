import {configureStore, createSlice} from '@reduxjs/toolkit';
import { hotelSlice, placeSlice } from './hotel';
import hotelInfoSlice from './hotelinfo';
import { useEffect } from 'react';

const travelBlogs = [];


const blogSlice=createSlice({
  name:'blogs',
  initialState:{travelBlogs},
  reducers:{
    setItem:(state,action)=>{
      state.travelBlogs=action.payload;
    },
    addItem:(state,action)=>{
      state.travelBlogs=[action.payload,...state.travelBlogs];
    }
  }
})

const blogStore=configureStore({reducer:{
    blogs:blogSlice.reducer,
    hotels:hotelSlice.reducer,
    places:placeSlice.reducer,
    hotelInfo:hotelInfoSlice.reducer,
}});

export const blogActios=blogSlice.actions;
export default blogStore;