import { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalOverlay from '../components/ModalOverlay';

const GALLERY_IMAGES = {
  'modal-corte': ['/assets/img/servicos/corte-plasma-laser/01.jpg', '/assets/img/servicos/corte-plasma-laser/02.jpg', '/assets/img/servicos/corte-plasma-laser/03.jpg'],
  'modal-conformacao': ['/assets/img/servicos/dobra-calandragem/01.jpg', '/assets/img/servicos/dobra-calandragem/02.jpg', '/assets/img/servicos/dobra-calandragem/03.jpg'],
  'modal-soldadura': ['/assets/img/servicos/soldadura-mig-mag-tig/01.jpg', '/assets/img/servicos/soldadura-mig-mag-tig/02.jpg', '/assets/img/servicos/soldadura-mig-mag-tig/03.jpg'],
};

export default function ServicosPage() {
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
          <span className="section-label section-label--light">Catálogo de Serviços</span>
          <h1 className="page-header__title">Serviços de Engenharia Metálica</h1>
          <p className="page-header__subtitle">Soluções completas de fabricação, montagem, manutenção e tratamentos — para grandes indústrias e empresas de menor dimensão.</p>
        </div>
      </header>

      <main>
        <section className="section" id="fabricacao" aria-labelledby="fab-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-label">01 — Fabricação</span>
              <h2 id="fab-heading">Fabricação Metálica Completa</h2>
              <p>Instalações equipadas com tecnologia CNC de última geração para corte, conformação e soldadura de alta precisão. Cada peça é rastreada do material bruto ao produto acabado.</p>
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
                  <img className="service-card__img" src="/assets/img/servicos/corte-plasma-laser/01.jpg" alt="Corte plasma e laser CNC em chapa metálica industrial" loading="lazy" width="800" height="450" />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">Corte Plasma &amp; Laser CNC</h3>
                  <p className="service-card__desc">Corte de precisão em chapas e perfis com tolerâncias mínimas, controlado por programação CNC.</p>
                  <span className="service-card__cta">Ver detalhes <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
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
                  <div className="service-card__icon"><i className="fa-solid fa-arrows-turn-to-dots" aria-hidden="true"></i></div>
                  <img className="service-card__img" src="/assets/img/servicos/dobra-calandragem/01.jpg" alt="Dobra e calandragem de chapa em quinadora CNC" loading="lazy" width="800" height="450" />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">Dobra &amp; Calandragem</h3>
                  <p className="service-card__desc">Conformação de chapas e perfis em quinadoras CNC e calandras de alta capacidade.</p>
                  <span className="service-card__cta">Ver detalhes <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
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
                  <img className="service-card__img" src="/assets/img/servicos/soldadura-mig-mag-tig/01.jpg" alt="Soldadura MIG MAG TIG em estrutura metálica industrial" loading="lazy" width="800" height="450" />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">Soldadura MIG/MAG/TIG</h3>
                  <p className="service-card__desc">Soldadores certificados em processos MIG, MAG e TIG para aço carbono, inox e alumínio.</p>
                  <span className="service-card__cta">Ver detalhes <i className="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-banner" aria-labelledby="cta-servicos">
          <div className="container">
            <h2 id="cta-servicos" className="reveal">Precisa de um serviço <em className="em--secondary">específico</em>?</h2>
            <p className="reveal reveal--delay-1">Descreva o seu projeto e receba uma proposta detalhada. A SIMALIAN adapta-se à sua necessidade, independentemente da escala.</p>
            <Link to="/contato" className="btn btn--primary btn--lg reveal reveal--delay-2">
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              Solicitar Orçamento
            </Link>
          </div>
        </section>
      </main>

      <ModalOverlay id="modal-corte" titleId="modal-corte-title" title="Corte Plasma &amp; Laser CNC" isActive={activeModalId === 'modal-corte'} onClose={closeModal}>
        <div className="modal-gallery" data-service="corte-plasma-laser">
          <div className="modal-gallery__main">
            <img src={mainImageByModal['modal-corte']} alt="Corte plasma e laser CNC — vista principal" />
          </div>
          <div className="modal-gallery__thumbs">
            {GALLERY_IMAGES['modal-corte'].map((src, i) => (
              <button key={src} type="button" className={`modal-gallery__thumb ${mainImageByModal['modal-corte'] === src ? 'is-active' : ''}`} aria-label={`Ver imagem ${i + 1}`} onClick={() => setGalleryMain('modal-corte', src)}>
                <img src={src} alt="" data-full={src} />
              </button>
            ))}
          </div>
        </div>
        <h4><i className="fa-solid fa-list" aria-hidden="true"></i> Processos Disponíveis</h4>
        <ul>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Corte plasma CNC em chapas até 50 mm de espessura</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Corte laser CNC para alta precisão em chapas finas e médias</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Corte oxicorte para grandes espessuras</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Programação CAD/CAM para otimização de material</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Nesting automático para redução de desperdício</li>
        </ul>
        <h4><i className="fa-solid fa-cog" aria-hidden="true"></i> Materiais</h4>
        <ul>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Aço carbono (S235, S275, S355)</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Aço inoxidável (304, 316L)</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Alumínio e ligas especiais</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Chapas antidesgaste (Hardox, Raex)</li>
        </ul>
      </ModalOverlay>

      <ModalOverlay id="modal-conformacao" titleId="modal-conformacao-title" title="Dobra &amp; Calandragem" isActive={activeModalId === 'modal-conformacao'} onClose={closeModal}>
        <div className="modal-gallery" data-service="dobra-calandragem">
          <div className="modal-gallery__main">
            <img src={mainImageByModal['modal-conformacao']} alt="Dobra e calandragem — vista principal" />
          </div>
          <div className="modal-gallery__thumbs">
            {GALLERY_IMAGES['modal-conformacao'].map((src, i) => (
              <button key={src} type="button" className={`modal-gallery__thumb ${mainImageByModal['modal-conformacao'] === src ? 'is-active' : ''}`} aria-label={`Ver imagem ${i + 1}`} onClick={() => setGalleryMain('modal-conformacao', src)}>
                <img src={src} alt="" data-full={src} />
              </button>
            ))}
          </div>
        </div>
        <h4><i className="fa-solid fa-list" aria-hidden="true"></i> Capacidades</h4>
        <ul>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Quinadoras CNC até 4000 mm e 400 toneladas</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Calandras de 3 e 4 rolos para perfis e chapas</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Dobra de tubos e perfis em geometrias complexas</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Programação automática de sequências de dobra</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Controlo angular por laser integrado</li>
        </ul>
      </ModalOverlay>

      <ModalOverlay id="modal-soldadura" titleId="modal-soldadura-title" title="Soldadura MIG/MAG/TIG" isActive={activeModalId === 'modal-soldadura'} onClose={closeModal}>
        <div className="modal-gallery" data-service="soldadura-mig-mag-tig">
          <div className="modal-gallery__main">
            <img src={mainImageByModal['modal-soldadura']} alt="Soldadura MIG MAG TIG — vista principal" />
          </div>
          <div className="modal-gallery__thumbs">
            {GALLERY_IMAGES['modal-soldadura'].map((src, i) => (
              <button key={src} type="button" className={`modal-gallery__thumb ${mainImageByModal['modal-soldadura'] === src ? 'is-active' : ''}`} aria-label={`Ver imagem ${i + 1}`} onClick={() => setGalleryMain('modal-soldadura', src)}>
                <img src={src} alt="" data-full={src} />
              </button>
            ))}
          </div>
        </div>
        <h4><i className="fa-solid fa-list" aria-hidden="true"></i> Processos de Soldadura</h4>
        <ul>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Soldadura MIG/MAG (GMAW) — aço carbono e inox</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Soldadura TIG (GTAW) — inox, alumínio e titânio</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Soldadura por arco submerso (SAW) para grandes espessuras</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Soldadores certificados segundo EN ISO 9606</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Procedimentos qualificados (WPS/PQR) segundo EN ISO 15614</li>
        </ul>
        <h4><i className="fa-solid fa-shield-halved" aria-hidden="true"></i> Qualidade</h4>
        <ul>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Ensaios visuais, radiográficos e ultrassónicos</li>
          <li><i className="fa-solid fa-check" aria-hidden="true"></i> Rastreabilidade completa de consumíveis</li>
        </ul>
      </ModalOverlay>
    </>
  );
}
