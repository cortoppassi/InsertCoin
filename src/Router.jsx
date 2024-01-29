import React from 'react'
import InsertCoin from './InsertCoin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<InsertCoin/>}></Route>
        </Routes>
    </Router>
  )
}
