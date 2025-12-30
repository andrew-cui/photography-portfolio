/* Primary SPA router */
import {
  BrowserRouter, Routes, Route, Navigate, useLocation
} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';

import Home from './Home.jsx'
import About from './About.jsx'
import Como from './galleries/travel/Como.jsx'
import Marrakech from './galleries/travel/Marrakech.jsx'
import Japan from './galleries/travel/Japan.jsx'
import Banff from './galleries/travel/Banff.jsx'
import Alps from './galleries/travel/Alps.jsx'
import NL from './galleries/travel/Netherlands.jsx'
import USA from './galleries/travel/USA.jsx'
import London from './galleries/travel/London.jsx'
import Graduation from './galleries/portraits/Graduation.jsx'
import Couples from './galleries/portraits/Couples.jsx'
import Portraits from './galleries/portraits/Portraits.jsx'
import Groups from './galleries/portraits/Groups.jsx'
import Running from './galleries/events/Running.jsx'
import Shows from './galleries/events/Shows.jsx'
import Campus from './galleries/events/Campus.jsx'
import Academia from './galleries/events/Academia.jsx'
import Parties from './galleries/events/Parties.jsx'
import ScrollToTopUponNewPage from './components/ScrollToTop.jsx'

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  >
    {children}
  </motion.div>
);


const App = () => {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence mode="wait">
      <ScrollToTopUponNewPage /> 
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home/></PageTransition>} />
          <Route path="/me" element={<PageTransition><About/></PageTransition>} />

          <Route path="/travel/usa" element={<PageTransition><USA/></PageTransition>} />
          <Route path="/travel/london" element={<PageTransition><London/></PageTransition>} />
          <Route path="/travel/banff" element={<PageTransition><Banff/></PageTransition>} />
          <Route path="/travel/japan" element={<PageTransition><Japan/></PageTransition>} />
          <Route path="/travel/morocco" element={<PageTransition><Marrakech/></PageTransition>} />
          <Route path="/travel/como" element={<PageTransition><Como/></PageTransition>} />
          <Route path="/travel/alps" element={<PageTransition><Alps/></PageTransition>} />
          <Route path="/travel/netherlands" element={<PageTransition><NL/></PageTransition>} />

          <Route path="/grads" element={<PageTransition><Graduation/></PageTransition>} />
          <Route path="/couples" element={<PageTransition><Couples/></PageTransition>} />
          <Route path="/portraits" element={<PageTransition><Portraits/></PageTransition>} />
          <Route path="/groups" element={<PageTransition><Groups/></PageTransition>} />

          <Route path="/events/running" element={<PageTransition><Running/></PageTransition>} />
          <Route path="/events/shows" element={<PageTransition><Shows/></PageTransition>} />
          <Route path="/events/academia" element={<PageTransition><Academia/></PageTransition>} />
          <Route path="/events/campus" element={<PageTransition><Campus/></PageTransition>} />
          <Route path="/events/parties" element={<PageTransition><Parties/></PageTransition>} />

          <Route path="*" element={<PageTransition><Navigate to="/" replace /></PageTransition>} />

        </Routes>
      
      </AnimatePresence>
    </div>
  )
}


const Root = () => (
  <BrowserRouter  basename="/" future={{
    v7_relativeSplatPath: true,
    v7_startTransition: true,
  }}>
    <App />
  </BrowserRouter>
);

export default Root
