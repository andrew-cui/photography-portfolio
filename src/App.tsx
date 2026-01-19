import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import HomePage from '@app/HomePage'
import { Navigation, Footer } from '@components'
import { AnimatePresence, motion } from 'framer-motion'
import AlbumPage from '@app/photos/AlbumPage'
import AboutPage from '@app/AboutPage'

function TopOfPage(): null {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location.pathname]);
  return null;
}

import { BookingProvider } from '@context/BookingContext'
import BookingModal from '@components/ui/BookingModal'

function App() {
  const location = useLocation();

  return (
    <BookingProvider>
      <div>
        <TopOfPage />
        <Navigation />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/photos/*" element={<AlbumPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Footer />
        <BookingModal />
      </div>
    </BookingProvider>
  )
}


const Root = () => (
  <BrowserRouter
    basename="/"
    {...({
      future: {
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      },
    } as any)}>
    <App />
  </BrowserRouter>
);

export default Root
