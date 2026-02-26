import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { submitFormData } from '../services/formService';
import { sanitize } from '../services/utils';

const HOME_HERO_SERVICES = [
  {
    to: '/siderurgica',
    title: 'Siderúrgica',
    icon: 'fa-industry',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80',
  },
  {
    to: '/construccion',
    title: 'Construcción',
    icon: 'fa-hard-hat',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
  },
  {
    to: '/mantenimiento',
    title: 'Mantenimiento',
    icon: 'fa-wrench',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&q=80',
  },
];

export default function HomePage() {
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
          {HOME_HERO_SERVICES.map(({ to, title, icon, image }) => (
            <div key={to} className="home-hero__column">
              <div className="home-hero__bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
              <div className="home-hero__overlay" aria-hidden="true" />
              <div className="home-hero__content">
                <span className="home-hero__title">{title}</span>
                <div className="home-hero__actions">
                  <Link to={to} className="home-hero__btn home-hero__btn--secondary">
                    <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
                    Ver Serviço
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
              <span className="section-label section-label--light">Ciclo Completo</span>
              <h2 id="cycle-heading" className="section-heading--white">O que fazemos de <em className="em--secondary">forma completa</em></h2>
              <p>Da conceção ao produto final instalado, a SIMALIAN assume todas as etapas com equipa própria — garantindo controlo total da qualidade e cumprimento dos prazos.</p>
            </div>
            <div className="cycle-grid">
              <div className="cycle-card reveal">
                <span className="cycle-card__step">Etapa 01</span>
                <div className="cycle-card__icon"><i className="fa-solid fa-compass-drafting" aria-hidden="true"></i></div>
                <h3 className="cycle-card__title">Engenharia &amp; Projeto</h3>
                <p className="cycle-card__desc">Modelação 3D, cálculo estrutural, otimização de materiais e dimensionamento segundo normas europeias (EN) e internacionais (ASTM).</p>
              </div>
              <div className="cycle-card reveal reveal--delay-1">
                <span className="cycle-card__step">Etapa 02</span>
                <div className="cycle-card__icon"><i className="fa-solid fa-industry" aria-hidden="true"></i></div>
                <h3 className="cycle-card__title">Fabricação Metálica</h3>
                <p className="cycle-card__desc">Corte plasma e laser CNC, dobra, calandragem, usinagem e soldadura MIG/MAG/TIG — tudo em instalações próprias com controlo rigoroso.</p>
              </div>
              <div className="cycle-card reveal reveal--delay-2">
                <span className="cycle-card__step">Etapa 03</span>
                <div className="cycle-card__icon"><i className="fa-solid fa-helmet-safety" aria-hidden="true"></i></div>
                <h3 className="cycle-card__title">Montagem com Equipa Própria</h3>
                <p className="cycle-card__desc">Montadores qualificados para estruturas, tubulações e plataformas. Alinhamento de precisão, solda in situ e supervisão técnica permanente.</p>
              </div>
              <div className="cycle-card reveal reveal--delay-3">
                <span className="cycle-card__step">Etapa 04</span>
                <div className="cycle-card__icon"><i className="fa-solid fa-wrench" aria-hidden="true"></i></div>
                <h3 className="cycle-card__title">Manutenção &amp; Reforços</h3>
                <p className="cycle-card__desc">Inspeções periódicas, reparações estruturais, reforços, modernização de equipamentos e aumento de capacidade das instalações existentes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--deep home-contact-institutional" id="fale-projeto" aria-labelledby="home-contact-heading">
          <div className="container">
            <div className="section-header section-header--center home-contact-institutional__header">
              <h2 id="home-contact-heading" className="section-heading--white reveal">Vamos falar sobre o seu projeto?</h2>
              <p className="home-contact-institutional__subtitle reveal reveal--delay-1">Nossa equipa técnica está pronta para analisar a sua necessidade.</p>
            </div>
            <div className="home-contact-institutional__grid reveal reveal--delay-1">
              <div className="home-contact-institutional__form-wrap">
                <form ref={contactFormRef} onSubmit={handleHomeContactSubmit} className="home-contact-form" noValidate>
                  <div className="home-contact-form__group">
                    <label htmlFor="home-contact-nome">Nome</label>
                    <input type="text" id="home-contact-nome" name="nome" className="home-contact-form__input" placeholder="Seu nome" required autoComplete="name" />
                  </div>
                  <div className="home-contact-form__group">
                    <label htmlFor="home-contact-empresa">Empresa</label>
                    <input type="text" id="home-contact-empresa" name="empresa" className="home-contact-form__input" placeholder="Empresa" autoComplete="organization" />
                  </div>
                  <div className="home-contact-form__row">
                    <div className="home-contact-form__group">
                      <label htmlFor="home-contact-email">E-mail</label>
                      <input type="email" id="home-contact-email" name="email" className="home-contact-form__input" placeholder="email@empresa.com" required autoComplete="email" />
                    </div>
                    <div className="home-contact-form__group">
                      <label htmlFor="home-contact-telefone">Telefone</label>
                      <input type="tel" id="home-contact-telefone" name="telefone" className="home-contact-form__input" placeholder="+351 000 000 000" autoComplete="tel" />
                    </div>
                  </div>
                  <div className="home-contact-form__group">
                    <label htmlFor="home-contact-mensagem">Mensagem</label>
                    <textarea id="home-contact-mensagem" name="mensagem" className="home-contact-form__input home-contact-form__textarea" placeholder="Breve descrição do seu projeto..." rows={3} required></textarea>
                  </div>
                  <button type="submit" className="btn btn--orcamento home-contact-form__btn">
                    <i className="fa-solid fa-headset" aria-hidden="true"></i>
                    Falar com Especialista
                  </button>
                  {contactFeedback === 'success' && (
                    <p className="home-contact-form__feedback home-contact-form__feedback--success" role="alert">
                      <i className="fa-solid fa-circle-check" aria-hidden="true"></i> Mensagem enviada. Entraremos em contacto em breve.
                    </p>
                  )}
                  {contactFeedback === 'error' && (
                    <p className="home-contact-form__feedback home-contact-form__feedback--error" role="alert">
                      <i className="fa-solid fa-circle-exclamation" aria-hidden="true"></i> Erro ao enviar. Tente novamente ou contacte-nos diretamente.
                    </p>
                  )}
                </form>
              </div>
              <div className="home-contact-institutional__card">
                <div className="home-contact-institutional__item">
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  <div>
                    <span className="home-contact-institutional__label">Telefone</span>
                    <a href="tel:+351000000000">+351 000 000 000</a>
                  </div>
                </div>
                <div className="home-contact-institutional__item">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                  <div>
                    <span className="home-contact-institutional__label">E-mail</span>
                    <a href="mailto:geral@simalian.com">geral@simalian.com</a>
                  </div>
                </div>
                <div className="home-contact-institutional__item">
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                  <div>
                    <span className="home-contact-institutional__label">Localização</span>
                    <span>Portugal</span>
                  </div>
                </div>
                <div className="home-contact-institutional__item">
                  <i className="fa-solid fa-clock" aria-hidden="true"></i>
                  <div>
                    <span className="home-contact-institutional__label">Horário</span>
                    <span>Seg – Sex: 8h30 – 18h00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--primary highlight-section" aria-labelledby="highlight-heading">
          <div className="container">
            <span className="section-label section-label--light reveal" id="highlight-heading">Filosofia de Trabalho</span>
            <blockquote className="highlight-section__quote reveal reveal--delay-1">
              &quot;Se a SIMALIAN conduz o processo completo — do projeto à montagem final — o resultado é <em>inevitavelmente preciso</em>.&quot;
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
                <div className="stat-item__label">Projetos Concluídos</div>
              </div>
              <div className="stat-item reveal reveal--delay-1">
                <div className="stat-item__number" data-count="15">0</div>
                <div className="stat-item__label">Anos de Experiência</div>
              </div>
              <div className="stat-item reveal reveal--delay-2">
                <div className="stat-item__number" data-count="98">0</div>
                <div className="stat-item__label">% Clientes Satisfeitos</div>
              </div>
              <div className="stat-item reveal reveal--delay-3">
                <div className="stat-item__number" data-count="50">0</div>
                <div className="stat-item__label">Profissionais Especializados</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="clientes" aria-labelledby="clients-heading">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="section-label">Quem Servimos</span>
              <h2 id="clients-heading">Soluções para <em className="em--primary">qualquer escala</em></h2>
              <p>Desde grandes complexos industriais até projetos menores — a mesma precisão, o mesmo rigor técnico, a mesma dedicação.</p>
            </div>
            <div className="segment-grid">
              <div className="segment-card reveal">
                <div className="segment-card__icon"><i className="fa-solid fa-building" aria-hidden="true"></i></div>
                <h3 className="segment-card__title">Grandes Indústrias &amp; Construtoras</h3>
                <p className="segment-card__desc">
                  Parceiro técnico para projetos de alta complexidade. Assumimos o ciclo completo — engenharia, fabricação, montagem e manutenção — com equipas dedicadas, garantindo prazos e qualidade documentada.
                </p>
                <ul className="segment-card__list">
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> Estruturas metálicas de grande porte</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> Montagem industrial com equipa própria</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> Dossiês técnicos e certificações</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> Manutenção programada e preventiva</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> Gestão de projeto integrada</li>
                </ul>
              </div>
              <div className="segment-card reveal reveal--delay-2">
                <div className="segment-card__icon"><i className="fa-solid fa-store" aria-hidden="true"></i></div>
                <h3 className="segment-card__title">Empresas que Não Podem Errar</h3>
                <p className="segment-card__desc">
                  Projetos menores merecem a mesma excelência. A SIMALIAN oferece atendimento dedicado a empresas médias e pequenas que precisam de soluções profissionais, sem complicações e com acompanhamento completo.
                </p>
                <ul className="segment-card__list">
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> Peças sob medida e estruturas personalizadas</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> Escadas, guarda-corpos e mezaninos</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> Orçamentos claros e transparentes</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> Prazos compatíveis com a sua operação</li>
                  <li><i className="fa-solid fa-check" aria-hidden="true"></i> Qualidade industrial acessível</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--soft" id="portfolio" aria-labelledby="portfolio-heading">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="section-label">Portfólio</span>
              <h2 id="portfolio-heading">Projetos que demonstram <em className="em--primary">a nossa capacidade</em></h2>
              <p>Cada projeto é uma prova da nossa engenharia e execução. Do aço bruto à estrutura instalada — resultados que falam por si.</p>
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
                Ver Todos os Serviços
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </section>

        <section className="cta-banner" aria-labelledby="cta-heading">
          <div className="container">
            <h2 id="cta-heading" className="reveal">Pronto para um resultado <em className="em--secondary">preciso</em>?</h2>
            <p className="reveal reveal--delay-1">Contacte a SIMALIAN para discutir o seu projeto. Atendemos grandes indústrias e empresas de menor dimensão com o mesmo rigor técnico.</p>
            <Link to="/contato" className="btn btn--primary btn--orcamento btn--lg reveal reveal--delay-2">
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              Solicitar Orçamento
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
