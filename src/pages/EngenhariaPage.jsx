import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initTechNav } from '../services/initEffects';

export default function EngenhariaPage() {
  useEffect(() => {
    const t = setTimeout(() => initTechNav(), 0);
    return () => clearTimeout(t);
  }, []);

  function handleDownload(e) {
    e.preventDefault();
    alert('Download em breve disponível.');
  }

  return (
    <>
      <header className="page-header">
        <div className="container page-header__content">
          <span className="section-label section-label--light">Dossiê Técnico</span>
          <h1 className="page-header__title">Engenharia &amp; Competência Técnica</h1>
          <p className="page-header__subtitle">Documentação técnica, processos, materiais e metodologias que sustentam a excelência dos nossos projetos.</p>
        </div>
      </header>

      <main>
        <section className="section section--no-padding-bottom">
          <div className="container">
            <nav className="tech-nav" aria-label="Navegação técnica">
              <a href="#estudos" className="tech-nav__link tech-nav__link--active">Estudos Técnicos</a>
              <a href="#materiais" className="tech-nav__link">Materiais &amp; Processos</a>
              <a href="#montagem-metodos" className="tech-nav__link">Montagem &amp; Métodos</a>
              <a href="#qualidade-proc" className="tech-nav__link">Qualidade</a>
              <a href="#diagramas" className="tech-nav__link">Diagramas &amp; Fluxos</a>
              <a href="#downloads" className="tech-nav__link">Downloads</a>
            </nav>
          </div>
        </section>

        <section className="section" id="estudos" aria-labelledby="estudos-heading">
          <div className="container">
            <div className="tech-content">
              <div className="tech-content__text reveal">
                <span className="section-label">01 — Estudos Técnicos</span>
                <h2 id="estudos-heading">Cálculo Estrutural &amp; Simulações</h2>
                <p>
                  A SIMALIAN realiza modelação tridimensional completa, cálculo estrutural segundo as normas europeias (Eurocódigos) e internacionais (ASTM), e simulações de carga que garantem a segurança e otimização de cada projeto.
                </p>
                <p>
                  O nosso departamento de engenharia utiliza ferramentas de análise por elementos finitos (FEM) para validar o comportamento estrutural sob todas as combinações de ações — incluindo peso próprio, sobrecargas, vento, sismo e temperatura.
                </p>
                <p>
                  Cada projeto é acompanhado de memória de cálculo detalhada, desenhos de fabricação e montagem, e lista de materiais (BOM) otimizada.
                </p>
                <h4 className="mt-xl">Normas de Referência</h4>
                <ul className="mt-md">
                  <li className="tech-list-item">
                    <i className="fa-solid fa-file-lines tech-list-icon" aria-hidden="true"></i>
                    EN 1990 — Bases de projeto estrutural
                  </li>
                  <li className="tech-list-item">
                    <i className="fa-solid fa-file-lines tech-list-icon" aria-hidden="true"></i>
                    EN 1991 — Ações em estruturas
                  </li>
                  <li className="tech-list-item">
                    <i className="fa-solid fa-file-lines tech-list-icon" aria-hidden="true"></i>
                    EN 1993 — Projeto de estruturas de aço
                  </li>
                  <li className="tech-list-item">
                    <i className="fa-solid fa-file-lines tech-list-icon" aria-hidden="true"></i>
                    EN 1998 — Projeto de estruturas resistentes ao sismo
                  </li>
                  <li className="tech-list-item">
                    <i className="fa-solid fa-file-lines tech-list-icon" aria-hidden="true"></i>
                    EN 1090 — Execução de estruturas de aço e alumínio
                  </li>
                </ul>
              </div>
              <div className="tech-visual reveal reveal--delay-2">
                <svg className="svg-diagram" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama de análise estrutural" role="img">
                  <title>Diagrama esquemático de análise estrutural</title>
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#006C93" strokeWidth="0.3" opacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="400" height="350" fill="url(#grid)" />
                  <line x1="50" y1="300" x2="50" y2="100" stroke="#006C93" strokeWidth="3" />
                  <line x1="350" y1="300" x2="350" y2="100" stroke="#006C93" strokeWidth="3" />
                  <line x1="50" y1="100" x2="350" y2="100" stroke="#006C93" strokeWidth="3" />
                  <line x1="50" y1="200" x2="350" y2="200" stroke="#006C93" strokeWidth="2" strokeDasharray="8,4" />
                  <line x1="50" y1="200" x2="200" y2="100" stroke="#CBD9A5" strokeWidth="2" />
                  <line x1="200" y1="100" x2="350" y2="200" stroke="#CBD9A5" strokeWidth="2" />
                </svg>
                <p className="caption-center">Fig. 1 — Esquema de análise estrutural com cargas e contraventamento</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="diagramas" aria-labelledby="diagramas-heading">
          <div className="container">
            <div className="section-header section-header--center">
              <span className="section-label">05 — Diagramas &amp; Fluxos</span>
              <h2 id="diagramas-heading">Fluxo de Processo SIMALIAN</h2>
              <p>Visão integrada de todo o ciclo produtivo — da consulta do cliente à entrega final com documentação completa.</p>
            </div>
            <div className="process-flow reveal">
              <div className="process-step">
                <span className="process-step__number">1</span>
                <span className="process-step__label">Consulta</span>
              </div>
              <span className="process-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right"></i></span>
              <div className="process-step">
                <span className="process-step__number">2</span>
                <span className="process-step__label">Proposta</span>
              </div>
              <span className="process-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right"></i></span>
              <div className="process-step">
                <span className="process-step__number">3</span>
                <span className="process-step__label">Engenharia</span>
              </div>
              <span className="process-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right"></i></span>
              <div className="process-step">
                <span className="process-step__number">4</span>
                <span className="process-step__label">Fabricação</span>
              </div>
              <span className="process-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right"></i></span>
              <div className="process-step">
                <span className="process-step__number">5</span>
                <span className="process-step__label">Montagem</span>
              </div>
              <span className="process-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right"></i></span>
              <div className="process-step">
                <span className="process-step__number">6</span>
                <span className="process-step__label">Entrega</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--soft" id="downloads" aria-labelledby="downloads-heading">
          <div className="container">
            <div className="section-header">
              <span className="section-label">06 — Downloads</span>
              <h2 id="downloads-heading">Documentação Técnica</h2>
              <p>Ficheiros de referência, catálogos e fichas técnicas disponíveis para download.</p>
            </div>
            <div className="downloads-grid">
              <a href="#" className="download-card reveal" onClick={handleDownload} aria-label="Descarregar Catálogo Geral SIMALIAN">
                <div className="download-card__icon"><i className="fa-solid fa-file-pdf" aria-hidden="true"></i></div>
                <div className="download-card__info">
                  <div className="download-card__name">Catálogo Geral SIMALIAN</div>
                  <div className="download-card__meta">PDF — 2.4 MB</div>
                </div>
              </a>
              <a href="#" className="download-card reveal reveal--delay-1" onClick={handleDownload} aria-label="Descarregar Ficha Técnica de Materiais">
                <div className="download-card__icon"><i className="fa-solid fa-file-pdf" aria-hidden="true"></i></div>
                <div className="download-card__info">
                  <div className="download-card__name">Ficha Técnica — Materiais</div>
                  <div className="download-card__meta">PDF — 1.1 MB</div>
                </div>
              </a>
              <a href="#" className="download-card reveal reveal--delay-2" onClick={handleDownload} aria-label="Descarregar Certificações e Normas">
                <div className="download-card__icon"><i className="fa-solid fa-file-pdf" aria-hidden="true"></i></div>
                <div className="download-card__info">
                  <div className="download-card__name">Certificações &amp; Normas</div>
                  <div className="download-card__meta">PDF — 890 KB</div>
                </div>
              </a>
              <a href="#" className="download-card reveal reveal--delay-3" onClick={handleDownload} aria-label="Descarregar Procedimentos de Montagem">
                <div className="download-card__icon"><i className="fa-solid fa-file-pdf" aria-hidden="true"></i></div>
                <div className="download-card__info">
                  <div className="download-card__name">Procedimentos de Montagem</div>
                  <div className="download-card__meta">PDF — 1.5 MB</div>
                </div>
              </a>
              <a href="#" className="download-card reveal" onClick={handleDownload} aria-label="Descarregar Tabela de Perfis Metálicos">
                <div className="download-card__icon"><i className="fa-solid fa-file-excel" aria-hidden="true"></i></div>
                <div className="download-card__info">
                  <div className="download-card__name">Tabela de Perfis Metálicos</div>
                  <div className="download-card__meta">XLSX — 320 KB</div>
                </div>
              </a>
              <a href="#" className="download-card reveal reveal--delay-1" onClick={handleDownload} aria-label="Descarregar Esquemas de Pintura">
                <div className="download-card__icon"><i className="fa-solid fa-file-pdf" aria-hidden="true"></i></div>
                <div className="download-card__info">
                  <div className="download-card__name">Esquemas de Pintura (ISO 12944)</div>
                  <div className="download-card__meta">PDF — 650 KB</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="cta-banner" aria-labelledby="cta-eng">
          <div className="container">
            <h2 id="cta-eng" className="reveal">Tem dúvidas <em className="em--secondary">técnicas</em>?</h2>
            <p className="reveal reveal--delay-1">A nossa equipa de engenharia está disponível para discutir requisitos técnicos, normas e soluções construtivas.</p>
            <Link to="/contato" className="btn btn--primary btn--lg reveal reveal--delay-2">
              <i className="fa-solid fa-message" aria-hidden="true"></i>
              Contactar Engenharia
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
