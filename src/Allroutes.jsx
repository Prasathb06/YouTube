import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import Videopage from './Pages/Videopage/Videopage'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/search/:Searchquery' element={<Search/>}/>
        <Route path='/videopage/:vid' element={<Videopage/>}/>
    </Routes>
  )
}

export default Allroutes
