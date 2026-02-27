import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CookieBanner() {
  const { t } = useLanguage();
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
      <p>{t('cookie.prefix')}<a href="#privacidade" className="link--secondary">{t('footer.privacidade')}</a>{t('cookie.suffix')}</p>
      <div className="cookie-banner__actions">
        <button type="button" className="btn btn--primary btn--sm" id="cookieAccept" onClick={handleAccept}>{t('cookie.aceitar')}</button>
        <button type="button" className="btn btn--secondary btn--sm btn--secondary-muted" id="cookieDecline" onClick={handleDecline}>{t('cookie.recusar')}</button>
      </div>
    </div>
  );
}
