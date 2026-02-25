import { Link } from 'react-router-dom';

export default function ServicoMantenimiento() {
  return (
    <main>
      <section className="section" aria-labelledby="mantenimiento-heading">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Mantenimiento / Reparaciones</span>
            <h2 id="mantenimiento-heading">Manutenção e Reparações</h2>
            <p>Inspeções periódicas, reparações estruturais, reforços e modernização de equipamentos. Aumento de capacidade das instalações existentes com garantia de qualidade e segurança.</p>
          </div>
          <div className="tech-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3>Serviços</h3>
            <ul>
              <li>Inspeções e diagnóstico</li>
              <li>Reparações estruturais</li>
              <li>Reforços e reabilitação</li>
              <li>Modernização de equipamentos</li>
              <li>Manutenção programada</li>
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
