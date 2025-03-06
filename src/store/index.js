import {configureStore, createSlice} from '@reduxjs/toolkit';
import { hotelSlice, placeSlice } from './hotel';
import hotelInfoSlice from './hotelinfo';

const travelBlogs = [
  {
    title: "Exploring the Hidden Gems of Bali",
    author: "Sophia Carter",
    date: "2024-02-10",
    content: "Bali is more than just beaches and nightlife. Explore the serene waterfalls, lush rice terraces, and authentic cultural villages that make this island truly special...",
    tags: ["Bali", "Indonesia", "Nature", "Culture"]
  },
  {
    title: "A Foodie's Guide to Street Eats in Bangkok",
    author: "James Wong",
    date: "2024-01-28",
    content: "From spicy papaya salad to delicious pad Thai, Bangkok’s street food scene is a paradise for food lovers. Here’s where to find the best flavors...",
    tags: ["Bangkok", "Thailand", "Food", "Street Food"]
  },
  {
    title: "Solo Travel in Europe: Tips and Experiences",
    author: "Emma Johnson",
    date: "2023-12-15",
    content: "Traveling alone in Europe can be both exciting and intimidating. Learn from my experiences and get tips on how to make the most of your solo journey...",
    tags: ["Europe", "Solo Travel", "Tips", "Backpacking"]
  },
  {
    title: "The Ultimate Road Trip Across the USA",
    author: "Michael Smith",
    date: "2024-02-05",
    content: "From the Grand Canyon to the vibrant streets of New Orleans, experience the best road trip routes across the United States...",
    tags: ["USA", "Road Trip", "Adventure", "National Parks"]
  },
  {
    title: "Japan on a Budget: How to Travel Cheaply",
    author: "Hiro Tanaka",
    date: "2023-11-30",
    content: "Think Japan is expensive? Think again! Here are some insider tips on how to explore Japan without breaking the bank...",
    tags: ["Japan", "Budget Travel", "Asia", "Backpacking"]
  },
  {
    title: "A Complete Guide to Hiking in the Swiss Alps",
    author: "Lena Müller",
    date: "2023-10-22",
    content: "The Swiss Alps offer some of the best hiking trails in the world. Here’s what you need to know before planning your adventure...",
    tags: ["Switzerland", "Hiking", "Mountains", "Nature"]
  },
  {
    title: "The Best Beach Destinations for 2024",
    author: "Olivia Martin",
    date: "2024-01-10",
    content: "Looking for the perfect beach vacation? Discover the top beach destinations you must visit this year...",
    tags: ["Beach", "Travel", "Tropical", "Relaxation"]
  },
  {
    title: "Top 10 Most Underrated Cities in Europe",
    author: "Luca Rossi",
    date: "2024-01-18",
    content: "Skip the crowds and explore Europe’s hidden gems. Here are ten cities that deserve more attention...",
    tags: ["Europe", "Hidden Gems", "City Travel", "Culture"]
  },
  {
    title: "A Weekend in Paris: The Perfect Itinerary",
    author: "Amélie Dubois",
    date: "2023-12-05",
    content: "Only have a weekend in Paris? Here’s the perfect itinerary to make the most of your time in the City of Light...",
    tags: ["Paris", "France", "Weekend Trip", "Romantic"]
  },
  {
    title: "Exploring Patagonia: A Hiker’s Dream",
    author: "Diego Fernández",
    date: "2023-11-12",
    content: "Patagonia’s dramatic landscapes make it one of the most breathtaking destinations for hikers. Here’s how to plan your trek...",
    tags: ["Patagonia", "Argentina", "Chile", "Hiking"]
  },
  {
    title: "Why Iceland Should Be Your Next Adventure",
    author: "Erik Bjornsson",
    date: "2024-01-20",
    content: "With stunning waterfalls, black sand beaches, and Northern Lights, Iceland is a must-visit for adventure seekers...",
    tags: ["Iceland", "Adventure", "Nature", "Photography"]
  },
  {
    title: "The Best Castles to Visit in Germany",
    author: "Hans Becker",
    date: "2023-10-10",
    content: "Germany is home to some of the most beautiful castles in the world. Here’s a list of must-visit fairy-tale castles...",
    tags: ["Germany", "Castles", "History", "Architecture"]
  },
  {
    title: "Traveling South America: Best Places to Visit",
    author: "Carlos Mendoza",
    date: "2024-02-01",
    content: "From the Amazon rainforest to the Andes Mountains, here are the top destinations in South America...",
    tags: ["South America", "Adventure", "Culture", "Nature"]
  },
  {
    title: "A Guide to Wildlife Safaris in Africa",
    author: "Nia Okafor",
    date: "2023-11-05",
    content: "Want to experience the Big Five? Here’s everything you need to know about going on an African safari...",
    tags: ["Africa", "Safari", "Wildlife", "Adventure"]
  },
  {
    title: "The Most Scenic Train Journeys in the World",
    author: "William Thompson",
    date: "2023-12-25",
    content: "Traveling by train can be one of the most scenic ways to explore the world. Here are some breathtaking train routes you must experience...",
    tags: ["Train Travel", "Scenic Routes", "Adventure", "Slow Travel"]
  },
  {
    title: "How to Plan a Trip to Antarctica",
    author: "Elena Petrov",
    date: "2024-01-15",
    content: "Antarctica is one of the most remote destinations on Earth. Here’s what you need to know before planning your journey...",
    tags: ["Antarctica", "Adventure", "Extreme Travel", "Wildlife"]
  },
  {
    title: "Digital Nomad Life: Best Cities to Work Remotely",
    author: "David Lee",
    date: "2023-12-08",
    content: "Looking for the best cities for digital nomads? Here’s a list of the top places with great work-life balance...",
    tags: ["Digital Nomad", "Remote Work", "Travel", "Expat Life"]
  },
  {
    title: "How to Travel Sustainably",
    author: "Isabella Green",
    date: "2023-11-18",
    content: "Want to reduce your environmental impact while traveling? Here are some tips for sustainable travel...",
    tags: ["Sustainable Travel", "Eco-Friendly", "Green Travel", "Tips"]
  },
  {
    title: "Exploring India’s Golden Triangle",
    author: "Raj Patel",
    date: "2024-02-02",
    content: "Delhi, Agra, and Jaipur form India’s Golden Triangle, a must-visit route for history lovers and cultural enthusiasts...",
    tags: ["India", "Culture", "History", "Golden Triangle"]
  },
  {
    title: "Best Budget Travel Destinations for 2024",
    author: "Megan Davis",
    date: "2024-01-05",
    content: "Traveling on a budget? Here are the best destinations that offer amazing experiences without costing a fortune...",
    tags: ["Budget Travel", "Cheap Destinations", "Backpacking", "Money-Saving Tips"]
  }
];

// const blogReduser=(store=travelBlogs,action)=>{
//    return store;
// }
const blogSlice=createSlice({
  name:'blogs',
  initialState:{travelBlogs},
  reducers:{
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