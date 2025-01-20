/* Primary SPA router */
import {
  BrowserRouter, Routes, Route, Navigate, useLocation
} from 'react-router-dom'

import Home from './Home.jsx'
import About from './About.jsx'
import Como from './galleries/Como.jsx'
import Marrakech from './galleries/Marrakech.jsx'
import Japan from './galleries/Japan.jsx'
import Banff from './galleries/Banff.jsx'
import Alps from './galleries/Alps.jsx'
import USA from './galleries/USA.jsx'
import London from './galleries/London.jsx'
import Graduation from './galleries/Graduation.jsx'
import Couples from './galleries/Couples.jsx'
import Portraits from './galleries/Portraits.jsx'
import ScrollToTopUponNewPage from './components/ScrollToTop.jsx'


const App = () => {
  return (
    <BrowserRouter  basename="/" future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}> 
      <ScrollToTopUponNewPage /> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/me" element={<About/>} />
          <Route path="/travel/usa" element={<USA/>} />
          <Route path="/travel/banff" element={<Banff/>} />
          <Route path="/travel/japan" element={<Japan/>} />
          <Route path="/travel/como" element={<Como/>} />
          <Route path="/travel/morocco" element={<Marrakech/>} />
          <Route path="/travel/alps" element={<Alps/>} />
          <Route path="/travel/london" element={<London/>} />

          <Route path="/grads" element={<Graduation/>} />
          <Route path="/couples" element={<Couples/>} />
          <Route path="/portraits" element={<Portraits/>} />

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
