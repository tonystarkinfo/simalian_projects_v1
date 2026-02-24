import { useState, useEffect } from 'react';

/**
 * CookieBanner — same behavior as original initCookieConsent.
 * Shows after 2s if no consent in localStorage; Accept/Decline hide and store.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('simalian_cookie_consent');
    if (consent) return;
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('simalian_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('simalian_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner is-visible" id="cookieBanner" role="dialog" aria-label="Consentimento de cookies">
      <p>Utilizamos cookies para melhorar a sua experiência. Ao continuar a navegar, concorda com a nossa <a href="#privacidade" className="link--secondary">Política de Privacidade</a>.</p>
      <div className="cookie-banner__actions">
        <button type="button" className="btn btn--primary btn--sm" id="cookieAccept" onClick={handleAccept}>Aceitar</button>
        <button type="button" className="btn btn--secondary btn--sm btn--secondary-muted" id="cookieDecline" onClick={handleDecline}>Recusar</button>
      </div>
    </div>
  );
}
