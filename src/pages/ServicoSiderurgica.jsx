import { Link } from 'react-router-dom';

export default function ServicoSiderurgica() {
  return (
    <main>
      <section className="section" aria-labelledby="siderurgica-heading">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Siderúrgica</span>
            <h2 id="siderurgica-heading">Fabricação Metálica e Siderúrgica</h2>
            <p>Instalações equipadas com tecnologia CNC de última geração para corte plasma e laser, conformação e soldadura. Peças e estruturas em aço carbono, inox e alumínio, com rastreabilidade do material bruto ao produto acabado.</p>
          </div>
          <div className="tech-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3>Capacidades</h3>
            <ul>
              <li>Corte plasma e laser CNC</li>
              <li>Dobra e calandragem</li>
              <li>Usinagem de precisão</li>
              <li>Soldadura MIG/MAG/TIG</li>
              <li>Tratamentos superficiais</li>
            </ul>
          </div>
          <div className="text-center-mt">
            <Link to="/servicos" className="btn btn--outline">Voltar ao catálogo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
