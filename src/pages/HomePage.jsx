import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { submitFormData } from '../services/formService';
import { sanitize } from '../services/utils';

const HOME_HERO_SERVICES = [
  { to: '/siderurgica', key: 'siderurgica', icon: 'fa-industry', image: '/assets/img/servicos/foto1.png' },
  { to: '/construccion', key: 'construccion', icon: 'fa-hard-hat', image: '/assets/img/servicos/foto2.png' },
  { to: '/mantenimiento', key: 'mantenimiento', icon: 'fa-wrench', image: '/assets/img/servicos/Foto3.png' },
];

export default function HomePage() {
  const { t } = useLanguage();
  const contactFormRef = useRef(null);
  const [contactFeedback, setContactFeedback] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(() => {
    const initial = {};
    HOME_HERO_SERVICES.forEach((s) => { initial[s.key] = false; });
    return initial;
  });

  useEffect(() => {
    let cancelled = false;
    const imgs = HOME_HERO_SERVICES.map(({ key, image }, idx) => {
      const img = new Image();
      img.decoding = 'async';
      if (idx === 0) img.fetchPriority = 'high';
      img.onload = () => {
        if (cancelled) return;
        setHeroLoaded((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
      };
      img.onerror = () => {
        if (cancelled) return;
        setHeroLoaded((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
      };
      img.src = image;
      return img;
    });
    return () => {
      cancelled = true;
      // Evita manter referências desnecessárias
      imgs.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  function handleHomeContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const nome = form.nome?.value?.trim();
    const empresa = form.empresa?.value?.trim();
    const email = form.email?.value?.trim();
    const telefone = form.telefone?.value?.trim();
    const mensagem = form.mensagem?.value?.trim();
    if (!nome || !email || !mensagem) {
      setContactFeedback('error');
      return;
    }
    setContactFeedback(null);
    const formData = {
      nome: sanitize(nome),
      empresa: sanitize(empresa || ''),
      email: sanitize(email),
      telefone: sanitize(telefone || ''),
      servico: 'outro',
      porte: '',
      mensagem: sanitize(mensagem),
    };
    submitFormData(formData)
      .then(() => {
        setContactFeedback('success');
        form.reset();
      })
      .catch(() => setContactFeedback('error'));
  }

  return (
    <>
      <section className="home-hero" id="hero" aria-labelledby="home-hero-heading">
        <h2 id="home-hero-heading" className="sr-only">Serviços — Siderúrgica, Obra e Construcción, Mantenimiento e Reparaciones</h2>
        <div className="home-hero__grid">
          {HOME_HERO_SERVICES.map(({ to, key, icon, image }) => (
            <div key={to} className={`home-hero__column ${heroLoaded[key] ? 'is-loaded' : 'is-loading'}`}>
              <div className="home-hero__bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
              <div className="home-hero__overlay" aria-hidden="true" />
              <div className="home-hero__content">
                <span className="home-hero__title">{t(`nav.${key}`)}</span>
                <div className="home-hero__actions">
                  <Link to={to} className="home-hero__btn home-hero__btn--secondary">
                    <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
                    {t('home.verServico')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <main>
        <section className="section section--deep bg-grid" id="ciclo" aria-labelledby="cycle-heading">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="section-label section-label--light">{t('home.cycleLabel')}</span>
              <h2 id="cycle-heading" className="section-heading--white">{t('home.cycleTitleBefore')}<em className="em--secondary">{t('home.cycleTitleEm')}</em></h2>
              <p>{t('home.cycleIntro')}</p>
            </div>
            <div className="cycle-grid">
              <div className="cycle-card reveal">
                <span className="cycle-card__step">{t('home.etapa')} 01</span>
                <div className="cycle-card__icon" aria-hidden="true"><i className="fa-solid fa-compass-drafting" aria-hidden="true"></i></div>
                <h3 className="cycle-card__title">{t('home.cycle01Title')}</h3>
                <p className="cycle-card__desc">{t('home.cycle01Desc')}</p>
              </div>
              <div className="cycle-card reveal reveal--delay-1">
                <span className="cycle-card__step">{t('home.etapa')} 02</span>
                <div className="cycle-card__icon" aria-hidden="true"><i className="fa-solid fa-industry" aria-hidden="true"></i></div>
                <h3 className="cycle-card__title">{t('home.cycle02Title')}</h3>
                <p className="cycle-card__desc">{t('home.cycle02Desc')}</p>
              </div>
              <div className="cycle-card reveal reveal--delay-2">
                <span className="cycle-card__step">{t('home.etapa')} 03</span>
                <div className="cycle-card__icon" aria-hidden="true"><i className="fa-solid fa-helmet-safety" aria-hidden="true"></i></div>
                <h3 className="cycle-card__title">{t('home.cycle03Title')}</h3>
                <p className="cycle-card__desc">{t('home.cycle03Desc')}</p>
              </div>
              <div className="cycle-card reveal reveal--delay-3">
                <span className="cycle-card__step">{t('home.etapa')} 04</span>
                <div className="cycle-card__icon" aria-hidden="true"><i className="fa-solid fa-wrench" aria-hidden="true"></i></div>
                <h3 className="cycle-card__title">{t('home.cycle04Title')}</h3>
                <p className="cycle-card__desc">{t('home.cycle04Desc')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--deep home-contact-institutional" id="fale-projeto" aria-labelledby="home-contact-heading">
          <div className="container">
            <div className="section-header section-header--center home-contact-institutional__header">
              <h2 id="home-contact-heading" className="section-heading--white reveal">{t('home.contactTitle')}</h2>
              <p className="home-contact-institutional__subtitle reveal reveal--delay-1">{t('home.contactSubtitle')}</p>
            </div>
            <div className="home-contact-institutional__grid reveal reveal--delay-1">
              <div className="home-contact-institutional__form-wrap">
                <form ref={contactFormRef} onSubmit={handleHomeContactSubmit} className="home-contact-form" noValidate>
                  <div className="home-contact-form__group">
                    <label htmlFor="home-contact-nome">{t('home.formNome')}</label>
                    <input type="text" id="home-contact-nome" name="nome" className="home-contact-form__input" placeholder={t('home.formPlaceholderNome')} required autoComplete="name" />
                  </div>
                  <div className="home-contact-form__group">
                    <label htmlFor="home-contact-empresa">{t('home.formEmpresa')}</label>
                    <input type="text" id="home-contact-empresa" name="empresa" className="home-contact-form__input" placeholder={t('home.formPlaceholderEmpresa')} autoComplete="organization" />
                  </div>
                  <div className="home-contact-form__row">
                    <div className="home-contact-form__group">
                      <label htmlFor="home-contact-email">{t('home.formEmail')}</label>
                      <input type="email" id="home-contact-email" name="email" className="home-contact-form__input" placeholder={t('home.formPlaceholderEmail')} required autoComplete="email" />
                    </div>
                    <div className="home-contact-form__group">
                      <label htmlFor="home-contact-telefone">{t('home.formTelefone')}</label>
                      <input type="tel" id="home-contact-telefone" name="telefone" className="home-contact-form__input" placeholder={t('contact.contactPhone')} autoComplete="tel" />
                    </div>
                  </div>
                  <div className="home-contact-form__group">
                    <label htmlFor="home-contact-mensagem">{t('home.formMensagem')}</label>
                    <textarea id="home-contact-mensagem" name="mensagem" className="home-contact-form__input home-contact-form__textarea" placeholder={t('home.formPlaceholderMensagem')} rows={3} required></textarea>
                  </div>
                  <button type="submit" className="btn btn--orcamento home-contact-form__btn">
                    <i className="fa-solid fa-headset" aria-hidden="true"></i>
                    {t('home.falarEspecialista')}
                  </button>
                  {contactFeedback === 'success' && (
                    <p className="home-contact-form__feedback home-contact-form__feedback--success" role="alert">
                      <i className="fa-solid fa-circle-check" aria-hidden="true"></i> {t('home.msgSuccess')}
                    </p>
                  )}
                  {contactFeedback === 'error' && (
                    <p className="home-contact-form__feedback home-contact-form__feedback--error" role="alert">
                      <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i> {t('home.msgError')}
                    </p>
                  )}
                </form>
              </div>
              <div className="home-contact-institutional__card">
                <div className="home-contact-institutional__item">
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  <div>
                    <span className="home-contact-institutional__label">{t('home.labelTelefone')}</span>
                    <a href={`tel:${t('contact.contactPhone').replace(/\s/g, '')}`}>{t('contact.contactPhone')}</a>
                  </div>
                </div>
                <div className="home-contact-institutional__item">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  <div>
                    <span className="home-contact-institutional__label">{t('home.labelEmail')}</span>
                    <a href="mailto:geral@simalian.com">geral@simalian.com</a>
                  </div>
                </div>
                <div className="home-contact-institutional__item">
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                  <div>
                    <span className="home-contact-institutional__label">{t('home.labelLocalizacao')}</span>
                    <span>{t('contact.contactAddress')}</span>
                  </div>
                </div>
                <div className="home-contact-institutional__item">
                  <i className="fa-solid fa-clock" aria-hidden="true"></i>
                  <div>
                    <span className="home-contact-institutional__label">{t('home.labelHorario')}</span>
                    <span>{t('home.horarioValue')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--soft highlight-section" aria-labelledby="highlight-heading">
          <div className="container">
            <span className="section-label reveal" id="highlight-heading">{t('home.filosofiaLabel')}</span>
            <blockquote className="highlight-section__quote reveal reveal--delay-1">
              &quot;{t('home.filosofiaQuote')}.&quot;
            </blockquote>
            <div className="highlight-section__divider reveal reveal--delay-2" aria-hidden="true"></div>
            <p className="highlight-section__caption reveal reveal--delay-2">
              {t('home.filosofiaCaption')}
            </p>
          </div>
        </section>

        <section className="cta-banner" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading" className="reveal">{t('home.ctaTitle')}</h2>
            <p className="reveal reveal--delay-1">{t('home.ctaIntro')}</p>
            <Link to="/contato" className="btn btn--primary btn--orcamento btn--lg reveal reveal--delay-2">
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              {t('home.solicitarOrcamento')}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
