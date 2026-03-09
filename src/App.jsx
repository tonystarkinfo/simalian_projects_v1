import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import NavFloat from './components/NavFloat';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import LanguageSelector from './components/LanguageSelector';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';
import {
  initScrollReveal,
  initCounters,
  initSmoothScroll,
  initMobileKeyboard,
  initModalGallery,
} from './services/initEffects';

const ServicosPage = lazy(() => import('./pages/ServicosPage'));
const ServicoSiderurgica = lazy(() => import('./pages/ServicoSiderurgica'));
const ServicoObra = lazy(() => import('./pages/ServicoObra'));
const ServicoMantenimiento = lazy(() => import('./pages/ServicoMantenimiento'));
const ContatoPage = lazy(() => import('./pages/ContatoPage'));
const ProtecaoDadosPage = lazy(() => import('./pages/ProtecaoDadosPage'));

function AppContent() {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    if (location.hash === '#hero') {
      const timeoutId = setTimeout(() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }), 150);
      return () => clearTimeout(timeoutId);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const cleanups = [];
    const run = () => {
      initScrollReveal();
      initCounters();
      const c1 = initSmoothScroll();
      const c2 = initMobileKeyboard();
      if (c1) cleanups.push(c1);
      if (c2) cleanups.push(c2);
    };
    const useIdle = typeof window.requestIdleCallback === 'function';
    const id = useIdle ? window.requestIdleCallback(run, { timeout: 300 }) : setTimeout(run, 0);
    return () => {
      if (useIdle) window.cancelIdleCallback(id);
      else clearTimeout(id);
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
      <Suspense fallback={<div className="page-loading" aria-live="polite" />}>
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
          <Route path="/privacidade" element={<ProtecaoDadosPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <CookieBanner />
      <WhatsAppFloat />
      <div className="header-utils">
        <LanguageSelector />
        <Link to="/contato" className="btn-contact-top" aria-label={t('nav.btnOrcamento')}>
          <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          <span>{t('nav.btnOrcamento')}</span>
        </Link>
      </div>
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
