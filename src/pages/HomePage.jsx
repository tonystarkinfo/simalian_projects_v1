import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { submitFormData } from '../services/formService';
import { sanitize } from '../services/utils';

const HOME_HERO_SERVICES = [
  { to: '/siderurgica', key: 'siderurgica', icon: 'fa-industry', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80' },
  { to: '/construccion', key: 'construccion', icon: 'fa-hard-hat', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80' },
  { to: '/mantenimiento', key: 'mantenimiento', icon: 'fa-wrench', image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&q=80' },
];

export default function HomePage() {
  const { t } = useLanguage();
  const contactFormRef = useRef(null);
  const [contactFeedback, setContactFeedback] = useState(null);

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
            <div key={to} className="home-hero__column">
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
                <div className="cycle-card__icon"><i className="fa-solid fa-compass-drafting" aria-hidden="true"></i></div>
                <h3 className="cycle-card__title">{t('home.engProjeto')}</h3>
                <p className="cycle-card__desc">{t('home.engDesc')}</p>
              </div>
              <div className="cycle-card reveal reveal--delay-1">
                <span className="cycle-card__step">{t('home.etapa')} 02</span>
                <div className="cycle-card__icon"><i className="fa-solid fa-industry" aria-hidden="true"></i></div>
                <h3 className="cycle-card__title">{t('home.fabMetalica')}</h3>
                <p className="cycle-card__desc">{t('home.fabDesc')}</p>
              </div>
              <div className="cycle-card reveal reveal--delay-2">
                <span className="cycle-card__step">{t('home.etapa')} 03</span>
                <div className="cycle-card__icon"><i className="fa-solid fa-helmet-safety" aria-hidden="true"></i></div>
                <h3 className="cycle-card__title">{t('home.montagemTitle')}</h3>
                <p className="cycle-card__desc">{t('home.montagemDesc')}</p>
              </div>
              <div className="cycle-card reveal reveal--delay-3">
                <span className="cycle-card__step">{t('home.etapa')} 04</span>
                <div className="cycle-card__icon"><i className="fa-solid fa-wrench" aria-hidden="true"></i></div>
                <h3 className="cycle-card__title">{t('home.manutencaoTitle')}</h3>
                <p className="cycle-card__desc">{t('home.manutencaoDesc')}</p>
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
                      <input type="tel" id="home-contact-telefone" name="telefone" className="home-contact-form__input" placeholder="+351 000 000 000" autoComplete="tel" />
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
                    <a href="tel:+351000000000">+351 000 000 000</a>
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
                    <span>{t('home.portugal')}</span>
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

        <section className="section section--primary highlight-section" aria-labelledby="highlight-heading">
          <div className="container">
            <span className="section-label section-label--light reveal" id="highlight-heading">{t('home.filosofiaLabel')}</span>
            <blockquote className="highlight-section__quote reveal reveal--delay-1">
              &quot;{t('home.filosofiaQuote')}.&quot;
            </blockquote>
            <div className="highlight-section__divider reveal reveal--delay-2" aria-hidden="true"></div>
            <p className="highlight-section__caption reveal reveal--delay-2">
              Resultados superiores são alcançados quando uma única entidade controla engenharia, fabricação, montagem e manutenção. Sem interfaces desnecessárias. Sem perda de informação entre equipas.
            </p>
          </div>
        </section>

        <section className="section section--soft" aria-label="Números da empresa">
          <div className="container">
            <div className="stats-bar">
              <div className="stat-item reveal">
                <div className="stat-item__number" data-count="500">0</div>
                <div className="stat-item__label">{t('home.statsProjetos')}</div>
              </div>
              <div className="stat-item reveal reveal--delay-1">
                <div className="stat-item__number" data-count="15">0</div>
                <div className="stat-item__label">{t('home.statsAnos')}</div>
              </div>
              <div className="stat-item reveal reveal--delay-2">
                <div className="stat-item__number" data-count="98">0</div>
                <div className="stat-item__label">{t('home.statsClientes')}</div>
              </div>
              <div className="stat-item reveal reveal--delay-3">
                <div className="stat-item__number" data-count="50">0</div>
                <div className="stat-item__label">{t('home.statsProfissionais')}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="clientes" aria-labelledby="clients-heading">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="section-label">{t('home.quemServimos')}</span>
              <h2 id="clients-heading">{t('home.quemTitle')}</h2>
              <p>{t('home.quemIntro')}</p>
            </div>
            <div className="segment-grid">
              <div className="segment-card reveal">
                <div className="segment-card__icon"><i className="fa-solid fa-building" aria-hidden="true"></i></div>
                <h3 className="segment-card__title">{t('home.grandesIndustrias')}</h3>
                <p className="segment-card__desc">{t('home.grandesDesc')}</p>
                <ul className="segment-card__list">
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('home.listEstruturas')}</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('home.listMontagem')}</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('home.listDossies')}</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('home.listManutencao')}</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('home.listGestao')}</li>
                </ul>
              </div>
              <div className="segment-card reveal reveal--delay-2">
                <div className="segment-card__icon"><i className="fa-solid fa-store" aria-hidden="true"></i></div>
                <h3 className="segment-card__title">{t('home.empresasNaoErrar')}</h3>
                <p className="segment-card__desc">{t('home.empresasDesc')}</p>
                <ul className="segment-card__list">
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('home.listPecas')}</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('home.listEscadas')}</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('home.listOrcamentos')}</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('home.listPrazos')}</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> {t('home.listQualidade')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--soft" id="portfolio" aria-labelledby="portfolio-heading">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="section-label">{t('home.portfolioLabel')}</span>
              <h2 id="portfolio-heading">{t('home.portfolioTitle')}</h2>
              <p>{t('home.portfolioIntro')}</p>
            </div>
            <div className="portfolio-grid">
              <div className="portfolio-card reveal" tabIndex="0" role="figure" aria-label="Estruturas metálicas industriais de grande porte">
                <img className="portfolio-card__img" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Construção de estrutura metálica industrial de grande porte" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__category">Estruturas</span>
                  <h3 className="portfolio-card__title">Complexo Industrial</h3>
                  <p className="portfolio-card__desc">Estrutura metálica de 2.500 m² — projeto, fabricação e montagem</p>
                </div>
              </div>
              <div className="portfolio-card reveal reveal--delay-1" tabIndex="0" role="figure" aria-label="Plataformas e mezaninos metálicos">
                <img className="portfolio-card__img" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" alt="Plataformas industriais em aço com acabamento profissional" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__category">Plataformas</span>
                  <h3 className="portfolio-card__title">Mezaninos Industriais</h3>
                  <p className="portfolio-card__desc">Plataformas modulares em aço com acabamento industrial</p>
                </div>
              </div>
              <div className="portfolio-card reveal reveal--delay-2" tabIndex="0" role="figure" aria-label="Fabricação e soldadura CNC">
                <img className="portfolio-card__img" src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80" alt="Soldadura MIG/MAG em ambiente de fabricação industrial" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__category">Fabricação</span>
                  <h3 className="portfolio-card__title">Soldadura Especializada</h3>
                  <p className="portfolio-card__desc">Processos MIG/MAG/TIG com controlo de qualidade certificado</p>
                </div>
              </div>
              <div className="portfolio-card reveal reveal--delay-1" tabIndex="0" role="figure" aria-label="Montagem de estruturas no local">
                <img className="portfolio-card__img" src="https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=800&q=80" alt="Montagem de estrutura metálica em obra com equipa especializada" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__category">Montagem</span>
                  <h3 className="portfolio-card__title">Montagem In Situ</h3>
                  <p className="portfolio-card__desc">Equipa própria de montadores com certificação de segurança</p>
                </div>
              </div>
              <div className="portfolio-card reveal reveal--delay-2" tabIndex="0" role="figure" aria-label="Tanques e reservatórios metálicos">
                <img className="portfolio-card__img" src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80" alt="Tanques metálicos industriais de grande capacidade" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__category">Tanques</span>
                  <h3 className="portfolio-card__title">Reservatórios Industriais</h3>
                  <p className="portfolio-card__desc">Tanques em aço carbono e inox com certificação de estanquidade</p>
                </div>
              </div>
              <div className="portfolio-card reveal reveal--delay-3" tabIndex="0" role="figure" aria-label="Manutenção e reforço estrutural">
                <img className="portfolio-card__img" src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80" alt="Trabalho de manutenção e reforço de estruturas existentes" loading="lazy" />
                <div className="portfolio-card__overlay">
                  <span className="portfolio-card__category">Manutenção</span>
                  <h3 className="portfolio-card__title">Reforço Estrutural</h3>
                  <p className="portfolio-card__desc">Inspeção, diagnóstico e reforço de infraestrutura industrial</p>
                </div>
              </div>
            </div>
            <div className="text-center-mt">
              <Link to="/siderurgica" className="btn btn--outline">
                {t('home.verTodosServicos')}
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
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
