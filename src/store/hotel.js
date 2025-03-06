import { createSlice } from "@reduxjs/toolkit";

const allHotels=[
  {
    image: "https://theluxurytravelexpert.com/wp-content/uploads/2019/09/oberoi-amarvilas-agra.jpg",
    name: "The Oberoi Amarvilas",
    location: "Agra",
    price_per_night: "30000",
    rating: "5.0"
  },
  {
    image: "https://theluxurytravelexpert.com/wp-content/uploads/2019/09/taj-lake-palace-udaipur.jpg",
    name: "Taj Lake Palace",
    location: "Udaipur, Rajasthan",
    price_per_night: "25000",
    rating: "4.9"
  },
  {
    image: "https://theluxurytravelexpert.com/wp-content/uploads/2019/09/the-leela-palace-new-delhi.jpg",
    name: "The Leela Palace",
    location: "New Delhi, Delhi",
    price_per_night: "20000",
    rating: "4.8"
  },
  {
    image: "https://theluxurytravelexpert.com/wp-content/uploads/2019/09/umaid-bhawan-palace-jodhpur.jpg",
    name: "Umaid Bhawan Palace",
    location: "Jodhpur, Rajasthan",
    price_per_night: "22000",
    rating: "4.9"
  },
  {
    image: "https://theluxurytravelexpert.com/wp-content/uploads/2019/09/the-oberoi-udaivilas-udaipur.jpg",
    name: "The Oberoi Udaivilas",
    location: "Udaipur, Rajasthan",
    price_per_night: "28000",
    rating: "5.0"
  }
];
const allPlaces=
  [
      {
        name: "Santorini",
        location: "Greece",
        description: "Link stunning island with white-washed houses, blue domes, and breathtaking sunsets."
      },
      {
        name: "Kyoto",
        location: "Japan",
        description: "Link historic city famous for temples, cherry blossoms, and traditional tea houses."
      },
      {
        name: "Banff National Park",
        location: "Canada",
        description: "Link breathtaking national park with turquoise lakes, rugged mountains, and abundant wildlife."
      },
      {
        name: "Machu Picchu",
        location: "Peru",
        description: "An ancient Incan city in the Andes, known for stunning views and rich history."
      },
      {
        name: "Venice",
        location: "Italy",
        description: "Link romantic city with canals, gondolas, and stunning Renaissance architecture."
      }
    ];
export const hotelSlice=createSlice({
  name:'hotels',
  initialState:{allHotels},
})
export const placeSlice=createSlice({
  name:'placess',
  initialState:{allPlaces},
})
