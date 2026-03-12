import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ModalOverlay from '../components/ModalOverlay';
import LazyImage from '../components/LazyImage';

const GALLERY_IMAGES = {
  'modal-corte': ['/assets/img/servicos/corte-plasma-laser/01.jpg', '/assets/img/servicos/corte-plasma-laser/02.jpg', '/assets/img/servicos/corte-plasma-laser/03.jpg'],
  'modal-conformacao': ['/assets/img/servicos/dobra-calandragem/01.jpg', '/assets/img/servicos/dobra-calandragem/02.jpg', '/assets/img/servicos/dobra-calandragem/03.jpg'],
  'modal-soldadura': ['/assets/img/servicos/soldadura-mig-mag-tig/01.jpg', '/assets/img/servicos/soldadura-mig-mag-tig/02.jpg', '/assets/img/servicos/soldadura-mig-mag-tig/03.jpg'],
};

export default function ServicosPage() {
  const { t } = useLanguage();
  const [activeModalId, setActiveModalId] = useState(null);
  const [mainImageByModal, setMainImageByModal] = useState({
    'modal-corte': GALLERY_IMAGES['modal-corte'][0],
    'modal-conformacao': GALLERY_IMAGES['modal-conformacao'][0],
    'modal-soldadura': GALLERY_IMAGES['modal-soldadura'][0],
  });

  function setGalleryMain(modalId, src) {
    setMainImageByModal((prev) => ({ ...prev, [modalId]: src }));
  }

  function openModal(e, modalId) {
    e.preventDefault();
    setActiveModalId(modalId);
  }

  function closeModal() {
    setActiveModalId(null);
  }

  function handleCardKeyDown(e, modalId) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveModalId(modalId);
    }
  }

  return (
    <>
      <header className="page-header">
        <div className="container page-header__content">
          <span className="section-label section-label--light">{t('servicos.label')}</span>
          <h1 className="page-header__title">{t('servicos.title')}</h1>
          <p className="page-header__subtitle">{t('servicos.subtitle')}</p>
        </div>
      </header>

      <main className="page-main page-main--white">
        <section className="section section--soft" id="fabricacao" aria-labelledby="fab-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-label">{t('servicos.sec01Label')}</span>
              <h2 id="fab-heading">{t('servicos.sec01Title')}</h2>
              <p>{t('servicos.sec01Intro')}</p>
            </div>
            <div className="services-grid">
              <div
                className="service-card service-card--has-img reveal"
                tabIndex={0}
                role="button"
                aria-haspopup="dialog"
                data-modal="modal-corte"
                onClick={(e) => openModal(e, 'modal-corte')}
                onKeyDown={(e) => handleCardKeyDown(e, 'modal-corte')}
              >
                <div className="service-card__img-wrap">
                  <div className="service-card__icon"><i className="fa-solid fa-bolt" aria-hidden="true"></i></div>
                  <LazyImage className="service-card__img" wrapperClassName="service-card__img-wrap-inner" src="/assets/img/servicos/corte-plasma-laser/01.jpg" alt={t('servicos.corteTitle')} loading="lazy" width={800} height={450} fetchPriority="high" />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{t('servicos.corteTitle')}</h3>
                  <p className="service-card__desc">{t('servicos.corteDesc')}</p>
                  <span className="service-card__cta">{t('servicos.verDetalhes')} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </div>
              <div
                className="service-card service-card--has-img reveal reveal--delay-1"
                tabIndex={0}
                role="button"
                aria-haspopup="dialog"
                data-modal="modal-conformacao"
                onClick={(e) => openModal(e, 'modal-conformacao')}
                onKeyDown={(e) => handleCardKeyDown(e, 'modal-conformacao')}
              >
                <div className="service-card__img-wrap">
                  <div className="service-card__icon"><i className="fa-solid fa-arrows-to-dot" aria-hidden="true"></i></div>
                  <LazyImage className="service-card__img" wrapperClassName="service-card__img-wrap-inner" src="/assets/img/servicos/dobra-calandragem/01.jpg" alt={t('servicos.dobraTitle')} loading="lazy" width={800} height={450} />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{t('servicos.dobraTitle')}</h3>
                  <p className="service-card__desc">{t('servicos.dobraDesc')}</p>
                  <span className="service-card__cta">{t('servicos.verDetalhes')} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </div>
              <div
                className="service-card service-card--has-img reveal reveal--delay-2"
                tabIndex={0}
                role="button"
                aria-haspopup="dialog"
                data-modal="modal-soldadura"
                onClick={(e) => openModal(e, 'modal-soldadura')}
                onKeyDown={(e) => handleCardKeyDown(e, 'modal-soldadura')}
              >
                <div className="service-card__img-wrap">
                  <div className="service-card__icon"><i className="fa-solid fa-fire" aria-hidden="true"></i></div>
                  <LazyImage className="service-card__img" wrapperClassName="service-card__img-wrap-inner" src="/assets/img/servicos/soldadura-mig-mag-tig/01.jpg" alt={t('servicos.soldaduraTitle')} loading="lazy" width={800} height={450} />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{t('servicos.soldaduraTitle')}</h3>
                  <p className="service-card__desc">{t('servicos.soldaduraDesc')}</p>
                  <span className="service-card__cta">{t('servicos.verDetalhes')} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-banner" aria-labelledby="cta-servicos">
          <div className="container">
            <h2 id="cta-servicos" className="reveal">{t('servicos.ctaTitle')}</h2>
            <p className="reveal reveal--delay-1">{t('servicos.ctaSubtitle')}</p>
            <Link to="/contato" className="btn btn--primary btn--orcamento btn--lg reveal reveal--delay-2">
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              {t('servicos.solicitarOrcamento')}
            </Link>
          </div>
        </section>
      </main>

      <ModalOverlay id="modal-corte" titleId="modal-corte-title" title={t('servicos.corteTitle')} isActive={activeModalId === 'modal-corte'} onClose={closeModal}>
        <div className="modal-gallery" data-service="corte-plasma-laser">
          <div className="modal-gallery__main">
            <LazyImage src={mainImageByModal['modal-corte']} alt={t('servicos.corteTitle')} className="modal-gallery__main-img" />
          </div>
          <div className="modal-gallery__thumbs">
            {GALLERY_IMAGES['modal-corte'].map((src, i) => (
              <button key={src} type="button" className={`modal-gallery__thumb ${mainImageByModal['modal-corte'] === src ? 'is-active' : ''}`} aria-label={`Ver imagem ${i + 1}`} onClick={() => setGalleryMain('modal-corte', src)}>
                <img src={src} alt="" data-full={src} />
              </button>
            ))}
          </div>
        </div>
        <h4><i className="fa-solid fa-list" aria-hidden="true"></i> {t('servicos.processosDisponiveis')}</h4>
        <ul>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.cortePlasma1')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.cortePlasma2')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.cortePlasma3')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.cortePlasma4')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.cortePlasma5')}</li>
        </ul>
        <h4><i className="fa-solid fa-cog" aria-hidden="true"></i> {t('servicos.materiais')}</h4>
        <ul>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.materiais1')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.materiais2')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.materiais3')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.materiais4')}</li>
        </ul>
      </ModalOverlay>

      <ModalOverlay id="modal-conformacao" titleId="modal-conformacao-title" title={t('servicos.dobraTitle')} isActive={activeModalId === 'modal-conformacao'} onClose={closeModal}>
        <div className="modal-gallery" data-service="dobra-calandragem">
          <div className="modal-gallery__main">
            <LazyImage src={mainImageByModal['modal-conformacao']} alt={t('servicos.dobraTitle')} className="modal-gallery__main-img" />
          </div>
          <div className="modal-gallery__thumbs">
            {GALLERY_IMAGES['modal-conformacao'].map((src, i) => (
              <button key={src} type="button" className={`modal-gallery__thumb ${mainImageByModal['modal-conformacao'] === src ? 'is-active' : ''}`} aria-label={`Ver imagem ${i + 1}`} onClick={() => setGalleryMain('modal-conformacao', src)}>
                <img src={src} alt="" data-full={src} />
              </button>
            ))}
          </div>
        </div>
        <h4><i className="fa-solid fa-list" aria-hidden="true"></i> {t('servicos.capacidades')}</h4>
        <ul>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.dobra1')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.dobra2')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.dobra3')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.dobra4')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.dobra5')}</li>
        </ul>
      </ModalOverlay>

      <ModalOverlay id="modal-soldadura" titleId="modal-soldadura-title" title={t('servicos.soldaduraTitle')} isActive={activeModalId === 'modal-soldadura'} onClose={closeModal}>
        <div className="modal-gallery" data-service="soldadura-mig-mag-tig">
          <div className="modal-gallery__main">
            <LazyImage src={mainImageByModal['modal-soldadura']} alt={t('servicos.soldaduraTitle')} className="modal-gallery__main-img" />
          </div>
          <div className="modal-gallery__thumbs">
            {GALLERY_IMAGES['modal-soldadura'].map((src, i) => (
              <button key={src} type="button" className={`modal-gallery__thumb ${mainImageByModal['modal-soldadura'] === src ? 'is-active' : ''}`} aria-label={`Ver imagem ${i + 1}`} onClick={() => setGalleryMain('modal-soldadura', src)}>
                <img src={src} alt="" data-full={src} />
              </button>
            ))}
          </div>
        </div>
        <h4><i className="fa-solid fa-list" aria-hidden="true"></i> {t('servicos.processosSoldadura')}</h4>
        <ul>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.solda1')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.solda2')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.solda3')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.solda4')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.solda5')}</li>
        </ul>
        <h4><i className="fa-solid fa-shield-halved" aria-hidden="true"></i> {t('servicos.qualidade')}</h4>
        <ul>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.qual1')}</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('servicos.qual2')}</li>
        </ul>
      </ModalOverlay>
    </>
  );
}
