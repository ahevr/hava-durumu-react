import Weather from 'components/Weather'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "page/Home"
import Weathers from "page/Weathers"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home /> } />
          <Route path='weathers' element={<Weathers /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
