/* Primary SPA router */
import {
  BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import PhotosEurope from './Photos-Europe.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/me" element={<About/>} />
        <Route path="/travel-europe" element={<PhotosEurope/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
