import React from 'react'
import InsertCoin from './InsertCoin'
import Pricing from './Pricing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function() {
  return (
    <Router>
        <Routes>
            <Route path="/insert" element={<InsertCoin/>}></Route>
            <Route path="/" element={<Pricing/>}></Route>
        </Routes>
    </Router>
  )
}
