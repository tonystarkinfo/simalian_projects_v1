import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function ProtecaoDadosPage() {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        const id = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        return () => clearTimeout(id);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <header className="page-header page-header--light">
        <div className="container page-header__content">
          <span className="section-label section-label--light">{t('protecaoDados.sectionLabel')}</span>
          <h1 className="page-header__title">{t('protecaoDados.title')}</h1>
          <p className="page-header__subtitle">{t('protecaoDados.subtitle')}</p>
        </div>
      </header>

      <main className="page-main page-main--white">
        <section className="section section--soft" aria-labelledby="protecao-dados-heading">
          <div className="container">
            <h2 id="protecao-dados-heading" className="sr-only">
              {t('protecaoDados.contentHeading')}
            </h2>
            <div className="prose prose--legal">
              <p className="prose__intro">{t('protecaoDados.intro')}</p>

              <h3>{t('protecaoDados.mainPointsTitle')}</h3>
              <ul className="prose__list">
                <li>
                  <strong>{t('protecaoDados.rgpdTitle')}</strong>
                  <span>{t('protecaoDados.rgpdText')}</span>
                </li>
                <li>
                  <strong>{t('protecaoDados.consentTitle')}</strong>
                  <span>{t('protecaoDados.consentText')}</span>
                </li>
                <li>
                  <strong>{t('protecaoDados.aepdTitle')}</strong>
                  <span>{t('protecaoDados.aepdText')}</span>
                </li>
                <li>
                  <strong>{t('protecaoDados.sancionesTitle')}</strong>
                  <span>{t('protecaoDados.sancionesText')}</span>
                </li>
                <li>
                  <strong>{t('protecaoDados.lgpdTitle')}</strong>
                  <span>{t('protecaoDados.lgpdText')}</span>
                </li>
              </ul>

              <h3 id="termos" className="prose__anchor-title">{t('protecaoDados.termosTitle')}</h3>
              <p className="prose__block">{t('protecaoDados.termosText')}</p>

              <h3 id="cookies" className="prose__anchor-title">{t('protecaoDados.cookiesTitle')}</h3>
              <p className="prose__block">{t('protecaoDados.cookiesIntro')}</p>
              <ul className="prose__list">
                <li>{t('protecaoDados.cookiesItem1')}</li>
                <li>{t('protecaoDados.cookiesItem2')}</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
