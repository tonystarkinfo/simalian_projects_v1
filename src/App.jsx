import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import NavFloat from './components/NavFloat';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import ServicosPage from './pages/ServicosPage';
import EngenhariaPage from './pages/EngenhariaPage';
import ContatoPage from './pages/ContatoPage';
import {
  initScrollReveal,
  initCounters,
  initSmoothScroll,
  initMobileKeyboard,
  initModalGallery,
  initVideoFallback,
  initCinematicScroll,
  initTechNav,
} from './services/initEffects';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#hero') {
      const t = setTimeout(() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }), 150);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const cleanups = [];
    const t = setTimeout(() => {
      initScrollReveal();
      initCounters();
      const c1 = initSmoothScroll();
      const c2 = initMobileKeyboard();
      if (c1) cleanups.push(c1);
      if (c2) cleanups.push(c2);
    }, 0);
    return () => {
      clearTimeout(t);
      cleanups.forEach((fn) => fn && fn());
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/servicos') {
      const c = initModalGallery();
      return () => c && c();
    }
  }, [location.pathname]);

  if (location.pathname === '/index-react.html') {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <NavFloat />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/engenharia" element={<EngenhariaPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default function App() {
  return <AppContent />;
}
