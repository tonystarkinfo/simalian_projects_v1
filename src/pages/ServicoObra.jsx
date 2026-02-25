import { Link } from 'react-router-dom';

export default function ServicoObra() {
  return (
    <main>
      <section className="section" aria-labelledby="obra-heading">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Obra / Construcción</span>
            <h2 id="obra-heading">Montagem e Construção no Local</h2>
            <p>Equipa própria de montadores para estruturas, tubulações e plataformas. Alinhamento de precisão, solda in situ e supervisão técnica. Do projeto à estrutura instalada no local.</p>
          </div>
          <div className="tech-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3>Serviços</h3>
            <ul>
              <li>Montagem de estruturas metálicas</li>
              <li>Tubulações e suportes</li>
              <li>Plataformas e mezaninos</li>
              <li>Soldadura in situ</li>
              <li>Supervisão técnica permanente</li>
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
