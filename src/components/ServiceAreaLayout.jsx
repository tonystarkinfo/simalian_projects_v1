import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ModalOverlay from './ModalOverlay';
import LazyImage from './LazyImage';

export default function ServiceAreaLayout({ sectionLabel, title, subtitle, cards, bannerImage }) {
  const { t } = useLanguage();
  const [activeModalId, setActiveModalId] = useState(null);
  const [galleryMain, setGalleryMain] = useState(() => {
    const initial = {};
    cards.forEach((card) => {
      if (card.modalContent?.images?.length) {
        initial[card.modalId] = card.modalContent.images[0];
      }
    });
    return initial;
  });

  function setGalleryMainImage(modalId, src) {
    setGalleryMain((prev) => ({ ...prev, [modalId]: src }));
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
      <header
        className={`page-header${bannerImage ? ' page-header--has-banner' : ''}`}
        style={bannerImage ? { backgroundImage: `url(${bannerImage})` } : undefined}
      >
        <div className="container page-header__content">
          <span className="section-label section-label--light">{sectionLabel}</span>
          <h1 className="page-header__title">{title}</h1>
          <p className="page-header__subtitle">{subtitle}</p>
        </div>
      </header>

      <main className="page-main page-main--white">
        <section className="section section--soft" aria-labelledby="area-cards-heading">
          <div className="container">
            <h2 id="area-cards-heading" className="sr-only">Catálogo de serviços</h2>
            <div className="services-grid services-grid--9">
              {cards.map((card, index) => (
                <div
                  key={card.modalId}
                  className={`service-card service-card--has-img reveal${index > 0 ? ` reveal--delay-${(index % 2) + 1}` : ''}`}
                  tabIndex={0}
                  role="button"
                  aria-haspopup="dialog"
                  aria-expanded={activeModalId === card.modalId}
                  data-modal={card.modalId}
                  onClick={(e) => openModal(e, card.modalId)}
                  onKeyDown={(e) => handleCardKeyDown(e, card.modalId)}
                >
                  <div className="service-card__img-wrap">
                    <div className="service-card__icon">
                      <i className={`fa-solid ${card.icon}`} aria-hidden="true"></i>
                    </div>
                    <LazyImage
                      src={card.image}
                      alt={card.alt}
                      className="service-card__img"
                      wrapperClassName="service-card__img-wrap-inner"
                      loading="lazy"
                      width={800}
                      height={450}
                      fetchPriority={index === 0 ? 'high' : undefined}
                    />
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__title">{card.title}</h3>
                    <p className="service-card__desc">{card.desc}</p>
                    <span className="service-card__cta">
                      {t('serviceArea.verDetalhes')} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-banner" aria-labelledby="cta-area">
          <div className="container">
            <h2 id="cta-area" className="reveal">{t('serviceArea.ctaTitle')}</h2>
            <p className="reveal reveal--delay-1">{t('serviceArea.ctaSubtitle')}</p>
            <Link to="/contato" className="btn btn--primary btn--orcamento btn--lg reveal reveal--delay-2">
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              {t('modal.solicitarOrcamento')}
            </Link>
          </div>
        </section>
      </main>

      {cards.map((card) => {
        const content = card.modalContent;
        if (!content) return null;
        const isActive = activeModalId === card.modalId;
        const mainImg = content.images?.length ? (galleryMain[card.modalId] ?? content.images[0]) : null;
        return (
          <ModalOverlay
            key={card.modalId}
            id={card.modalId}
            titleId={`${card.modalId}-title`}
            title={card.title}
            isActive={isActive}
            onClose={closeModal}
          >
            {content.images?.length ? (
              <div className="modal-gallery" data-service={card.modalId}>
                <div className="modal-gallery__main">
                  <LazyImage src={mainImg} alt={`${card.title} — vista principal`} className="modal-gallery__main-img" />
                </div>
                <div className="modal-gallery__thumbs">
                  {content.images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      className={`modal-gallery__thumb ${mainImg === src ? 'is-active' : ''}`}
                      aria-label={`Ver imagem ${i + 1}`}
                      onClick={() => setGalleryMainImage(card.modalId, src)}
                    >
                      <img src={src} alt="" data-full={src} />
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
            {content.description ? <p className="modal__intro">{content.description}</p> : null}
            {content.sections?.map((section, i) => (
              <div key={i}>
                <h4>
                  {section.icon ? <i className={`fa-solid ${section.icon}`} aria-hidden="true"></i> : null}
                  {section.icon ? ' ' : ''}{section.heading}
                </h4>
                <ul>
                  {section.items.map((item, j) => (
                    <li key={j}><i className="fa-solid fa-check" aria-hidden="true"></i> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ModalOverlay>
        );
      })}
    </>
  );
}
