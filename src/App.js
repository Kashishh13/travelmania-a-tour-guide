

import React from 'react'
import Home from "./Tour/Home/Main/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Destinations from './Tour/Destinations/Destination/Destinations'
import Region from './Tour/Destinations/Regions/Region'
import Trending from './Tour/Destinations/Trending/Trending'
import Interest from './Tour/Destinations/Interest/Interest'
import Weekend from './Tour/Destinations/Weekend/Weekend'
import Inter from './Tour/Destinations/International/Inter'
import SignUp from './Tour/Signup/SignUp'
import Login from './Tour/Signup/Login'
import Book from './Tour/Common/Book/Book'
const App = () => {
  return (   
    <>
     <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/destinations' element={<Destinations/>}/>
  <Route path='/regions' element={<Region/>}></Route>
  <Route path='/trending' element={<Trending/>}></Route>
  <Route path='/interest' element={<Interest/>}></Route>
  <Route path='/weekends' element={<Weekend/>}></Route>
  <Route path='/international' element={<Inter/>}/>
   <Route path='/signup' element={<SignUp/>}/> 
   <Route path='/login' element={<Login/>}/> 
   <Route path='/booktour/:id' element={<Book/>}/>
  </Routes></BrowserRouter></> 
  )
}
export default App ;

