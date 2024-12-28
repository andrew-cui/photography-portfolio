/* Primary SPA router */
import {
  BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Como from './galleries/Como.jsx'
import Marrakech from './galleries/Marrakech.jsx'
import Japan from './galleries/Japan.jsx'
import ScrollToTopUponNewPage from './ScrollToTop.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTopUponNewPage /> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/me" element={<About/>} />
        {/* <Route path="/travel/banff" element={<Banff/>} /> */}
        {/*  />
        <Route path="/travel/usa" element={<NAME/>} /> */}
        <Route path="/travel/japan" element={<Japan/>} />
        <Route path="/travel/como" element={<Como/>} />
        <Route path="/travel/morocco" element={<Marrakech/>} />
        {/* <Route path="/travel/alps" element={<NAME/>} />
        
        <Route path="/solo" element={<NAME/>} />
        <Route path="/couples" element={<NAME/>} />
        <Route path="/grad" element={<NAME/>} />
        <Route path="/running" element={<NAME/>} />
        <Route path="/parties" element={<NAME/>} />
        <Route path="/event" element={<NAME/>} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
