import React from 'react'

import { Route, Routes } from 'react-router-dom'

import DcScreen from '../components/dc/DcScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import SearchScreen from '../components/search/SearchScreen'
import HeroScreen from '../components/hero/HeroScreen'
import NavBar from '../components/ui/NavBar'

const DashboardRoutes = () => {
  return (
    <>
        <NavBar />
        <Routes>
            <Route path='marvel' element={<MarvelScreen />} />
            <Route path='dc' element={<DcScreen />} />
            <Route path='search' element={<SearchScreen />} />
            <Route path='hero' element={<HeroScreen />} />
            <Route path='*' element={<MarvelScreen />} />
        </Routes>
    </>
  )
}

export default DashboardRoutes