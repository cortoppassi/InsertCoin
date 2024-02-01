import React from 'react'
import Pricing from './Pricing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Pricing/>}></Route>
        </Routes>
    </Router>
  )
}
