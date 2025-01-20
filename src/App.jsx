/* Primary SPA router */
import {
  BrowserRouter, Routes, Route, Navigate, useLocation
} from 'react-router-dom'

import Home from './Home.jsx'
import About from './About.jsx'
import Como from './galleries/travel/Como.jsx'
import Marrakech from './galleries/travel/Marrakech.jsx'
import Japan from './galleries/travel/Japan.jsx'
import Banff from './galleries/travel/Banff.jsx'
import Alps from './galleries/travel/Alps.jsx'
import USA from './galleries/travel/USA.jsx'
import London from './galleries/travel/London.jsx'
import Graduation from './galleries/portraits/Graduation.jsx'
import Couples from './galleries/portraits/Couples.jsx'
import Portraits from './galleries/portraits/Portraits.jsx'
import Groups from './galleries/portraits/Groups.jsx'
import Running from './galleries/events/Running.jsx'
import Shows from './galleries/events/Shows.jsx'
import Academia from './galleries/events/Academia.jsx'
import Other from './galleries/events/Other.jsx'
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
          <Route path="/travel/london" element={<London/>} />
          <Route path="/travel/banff" element={<Banff/>} />
          <Route path="/travel/japan" element={<Japan/>} />
          <Route path="/travel/morocco" element={<Marrakech/>} />
          <Route path="/travel/como" element={<Como/>} />
          <Route path="/travel/alps" element={<Alps/>} />

          <Route path="/grads" element={<Graduation/>} />
          <Route path="/couples" element={<Couples/>} />
          <Route path="/portraits" element={<Portraits/>} />
          <Route path="/groups" element={<Groups/>} />

          <Route path="/events/running" element={<Running/>} />
          <Route path="/events/shows" element={<Shows/>} />
          <Route path="/events/academia" element={<Academia/>} />
          <Route path="/events/other" element={<Other/>} />

          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
