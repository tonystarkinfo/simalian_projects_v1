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

              <h3 id="termos" className="prose__anchor-title">{t('protecaoDados.general.title')}</h3>
              <p className="prose__block">{t('protecaoDados.general.p1')}</p>
              <p className="prose__block">{t('protecaoDados.general.p2')}</p>

              <h3 className="prose__anchor-title">{t('protecaoDados.controller.title')}</h3>
              <ul className="prose__list">
                <li>
                  <strong>{t('protecaoDados.controller.companyLabel')}</strong>
                  <span>{t('protecaoDados.controller.companyValue')}</span>
                </li>
                <li>
                  <strong>{t('protecaoDados.controller.emailLabel')}</strong>
                  <span>{t('protecaoDados.controller.emailValue')}</span>
                </li>
              </ul>

              <h3 className="prose__anchor-title">{t('protecaoDados.purposes.title')}</h3>
              <p className="prose__block">{t('protecaoDados.purposes.intro')}</p>
              <ul className="prose__list">
                <li>
                  <strong>{t('protecaoDados.purposes.quote.title')}</strong>
                  <span>{t('protecaoDados.purposes.quote.desc')}</span>
                  <div className="prose__note">
                    <strong>{t('protecaoDados.purposes.dataLabel')}</strong> {t('protecaoDados.purposes.quote.data')}
                  </div>
                </li>
                <li>
                  <strong>{t('protecaoDados.purposes.marketing.title')}</strong>
                  <span>{t('protecaoDados.purposes.marketing.desc')}</span>
                  <div className="prose__note">
                    <strong>{t('protecaoDados.purposes.dataLabel')}</strong> {t('protecaoDados.purposes.marketing.data')}
                  </div>
                </li>
                <li>
                  <strong>{t('protecaoDados.purposes.contact.title')}</strong>
                  <span>{t('protecaoDados.purposes.contact.desc')}</span>
                  <div className="prose__note">
                    <strong>{t('protecaoDados.purposes.dataLabel')}</strong> {t('protecaoDados.purposes.contact.data')}
                  </div>
                </li>
              </ul>

              <h3 className="prose__anchor-title">{t('protecaoDados.legalBasis.title')}</h3>
              <p className="prose__block">{t('protecaoDados.legalBasis.intro')}</p>
              <ul className="prose__list">
                <li><strong>{t('protecaoDados.legalBasis.consent.title')}</strong><span>{t('protecaoDados.legalBasis.consent.text')}</span></li>
                <li><strong>{t('protecaoDados.legalBasis.contract.title')}</strong><span>{t('protecaoDados.legalBasis.contract.text')}</span></li>
                <li><strong>{t('protecaoDados.legalBasis.legalObligation.title')}</strong><span>{t('protecaoDados.legalBasis.legalObligation.text')}</span></li>
                <li><strong>{t('protecaoDados.legalBasis.legitimateInterest.title')}</strong><span>{t('protecaoDados.legalBasis.legitimateInterest.text')}</span></li>
              </ul>

              <h3 className="prose__anchor-title">{t('protecaoDados.retention.title')}</h3>
              <p className="prose__block">{t('protecaoDados.retention.p1')}</p>
              <ul className="prose__list">
                <li>{t('protecaoDados.retention.item1')}</li>
                <li>{t('protecaoDados.retention.item2')}</li>
                <li>{t('protecaoDados.retention.item3')}</li>
              </ul>

              <h3 className="prose__anchor-title">{t('protecaoDados.rights.title')}</h3>
              <p className="prose__block">{t('protecaoDados.rights.intro')}</p>
              <ul className="prose__list">
                <li><strong>{t('protecaoDados.rights.access.title')}</strong><span>{t('protecaoDados.rights.access.text')}</span></li>
                <li><strong>{t('protecaoDados.rights.rectification.title')}</strong><span>{t('protecaoDados.rights.rectification.text')}</span></li>
                <li><strong>{t('protecaoDados.rights.erasure.title')}</strong><span>{t('protecaoDados.rights.erasure.text')}</span></li>
                <li><strong>{t('protecaoDados.rights.object.title')}</strong><span>{t('protecaoDados.rights.object.text')}</span></li>
                <li><strong>{t('protecaoDados.rights.portability.title')}</strong><span>{t('protecaoDados.rights.portability.text')}</span></li>
                <li><strong>{t('protecaoDados.rights.restriction.title')}</strong><span>{t('protecaoDados.rights.restriction.text')}</span></li>
                <li><strong>{t('protecaoDados.rights.noAutomation.title')}</strong><span>{t('protecaoDados.rights.noAutomation.text')}</span></li>
              </ul>
              <p className="prose__block">{t('protecaoDados.rights.howTo')}</p>

              <h3 className="prose__anchor-title">{t('protecaoDados.security.title')}</h3>
              <p className="prose__block">{t('protecaoDados.security.p1')}</p>

              <h3 id="cookies" className="prose__anchor-title">{t('protecaoDados.cookies.title')}</h3>
              <h4>{t('protecaoDados.cookies.what.title')}</h4>
              <p className="prose__block">{t('protecaoDados.cookies.what.text')}</p>

              <h4>{t('protecaoDados.cookies.types.title')}</h4>
              <ul className="prose__list">
                <li>{t('protecaoDados.cookies.types.item1')}</li>
                <li>{t('protecaoDados.cookies.types.item2')}</li>
                <li>{t('protecaoDados.cookies.types.item3')}</li>
                <li>{t('protecaoDados.cookies.types.item4')}</li>
              </ul>

              <h4>{t('protecaoDados.cookies.used.title')}</h4>
              <p className="prose__block">{t('protecaoDados.cookies.used.intro')}</p>
              <ul className="prose__list">
                <li><strong>{t('protecaoDados.cookies.used.ga.title')}</strong><span>{t('protecaoDados.cookies.used.ga.text')}</span></li>
                <li><strong>{t('protecaoDados.cookies.used.recaptcha.title')}</strong><span>{t('protecaoDados.cookies.used.recaptcha.text')}</span></li>
                <li><strong>{t('protecaoDados.cookies.used.wordpress.title')}</strong><span>{t('protecaoDados.cookies.used.wordpress.text')}</span></li>
                <li><strong>{t('protecaoDados.cookies.used.others.title')}</strong><span>{t('protecaoDados.cookies.used.others.text')}</span></li>
              </ul>

              <h4>{t('protecaoDados.cookies.manage.title')}</h4>
              <p className="prose__block">{t('protecaoDados.cookies.manage.p1')}</p>
              <ul className="prose__list">
                <li>{t('protecaoDados.cookies.manage.browser1')}</li>
                <li>{t('protecaoDados.cookies.manage.browser2')}</li>
                <li>{t('protecaoDados.cookies.manage.browser3')}</li>
                <li>{t('protecaoDados.cookies.manage.browser4')}</li>
              </ul>

              <h3 className="prose__anchor-title">{t('protecaoDados.changes.title')}</h3>
              <p className="prose__block">{t('protecaoDados.changes.p1')}</p>
              <p className="prose__block"><strong>{t('protecaoDados.changes.lastUpdateLabel')}</strong> {t('protecaoDados.changes.lastUpdateValue')}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
