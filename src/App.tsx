import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import HomePage from '@app/HomePage'
import { Navigation, Footer } from '@components'
import AlbumPage from '@app/photos/AlbumPage'

function TopOfPage(): null {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location.pathname]);
  return null;
}

function App() {
  const location = useLocation();

  return (
    <div>
      <TopOfPage />
      <Navigation />
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos/:albumId" element={<AlbumPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
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
