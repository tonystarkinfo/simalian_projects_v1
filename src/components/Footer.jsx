import { Link } from 'react-router-dom';

/**
 * Footer — same structure and classes as original.
 */
export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link to="/" className="footer__brand-name">SIMALIAN PROJECTS</Link>
            <p className="footer__brand-desc">
              Engenharia metálica completa: projeto, fabricação, montagem e manutenção com equipa própria. Precisão industrial para quem não pode falhar.
            </p>
          </div>
          <div>
            <h4 className="footer__col-title">Navegação</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/servicos">Serviços</Link></li>
              <li><Link to="/engenharia">Engenharia</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__col-title">Serviços</h4>
            <ul className="footer__links">
              <li><Link to="/servicos#fabricacao">Fabricação Metálica</Link></li>
              <li><Link to="/servicos#projetos">Projetos Especiais</Link></li>
              <li><Link to="/servicos#montagem">Montagem Industrial</Link></li>
              <li><Link to="/servicos#manutencao">Manutenção</Link></li>
              <li><Link to="/servicos#tratamentos">Tratamentos</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__col-title">Contacto</h4>
            <ul className="footer__links">
              <li><a href="tel:+351000000000">+351 000 000 000</a></li>
              <li><a href="mailto:info@simalian.pt">info@simalian.pt</a></li>
              <li>Portugal</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>&copy; 2026 SIMALIAN PROJECTS. Todos os direitos reservados.</span>
          <div className="footer__legal">
            <a href="#privacidade">Política de Privacidade</a>
            <a href="#termos">Termos de Uso</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
