import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import NavFloat from './components/NavFloat';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import LanguageSelector from './components/LanguageSelector';
import HomePage from './pages/HomePage';
import ServicosPage from './pages/ServicosPage';
import ServicoSiderurgica from './pages/ServicoSiderurgica';
import ServicoObra from './pages/ServicoObra';
import ServicoMantenimiento from './pages/ServicoMantenimiento';
import ContatoPage from './pages/ContatoPage';
import {
  initScrollReveal,
  initCounters,
  initSmoothScroll,
  initMobileKeyboard,
  initModalGallery,
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
        <Route path="/siderurgica" element={<ServicoSiderurgica />} />
        <Route path="/construccion" element={<ServicoObra />} />
        <Route path="/mantenimiento" element={<ServicoMantenimiento />} />
        <Route path="/servicos/siderurgica" element={<Navigate to="/siderurgica" replace />} />
        <Route path="/servicos/obra-construccion" element={<Navigate to="/construccion" replace />} />
        <Route path="/servicos/mantenimiento-reparaciones" element={<Navigate to="/mantenimiento" replace />} />
        <Route path="/engenharia" element={<Navigate to="/" replace />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
      <Footer />
      <CookieBanner />
      <LanguageSelector />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
