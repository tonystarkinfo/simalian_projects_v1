import { Link, useLocation } from 'react-router-dom';

/**
 * NavFloat — same structure and classes as original.
 * Active link derived from current path (same behavior as initNavigation).
 */
export default function NavFloat() {
  const location = useLocation();
  const path = location.pathname;

  const linkClass = (to) => {
    const isRoot = path === '/' || path === '';
    const match = (to === '/' && (isRoot || path === '/index.html')) || (to !== '/' && path === to);
    return match ? 'nav-float__link nav-float__link--active' : 'nav-float__link';
  };

  const ariaCurrent = (to) => {
    const isRoot = path === '/' || path === '';
    const match = (to === '/' && (isRoot || path === '/index.html')) || (to !== '/' && path === to);
    return match ? 'page' : undefined;
  };

  return (
    <nav className="nav-float" role="navigation" aria-label="Navegação principal">
      <div className="nav-float__inner">
        <Link to="/" className="nav-float__logo" aria-label="SIMALIAN PROJECTS — Página inicial">
          <span className="nav-float__logo-text">{path === '/' || path === '' ? 'SIMALIAN PROJECTS' : 'SIMALIAN'}</span>
        </Link>
        <Link to="/" className={linkClass('/')} aria-current={ariaCurrent('/') ? 'page' : undefined}>
          <i className="fa-solid fa-house" aria-hidden="true"></i>
          <span>{path === '/' || path === '' ? 'Principal' : 'Home'}</span>
        </Link>
        <Link to="/servicos" className={linkClass('/servicos')} aria-current={ariaCurrent('/servicos') ? 'page' : undefined}>
          <i className="fa-solid fa-gear" aria-hidden="true"></i>
          <span>Serviços</span>
        </Link>
        {path === '/' || path === '' ? null : (
          <Link to="/engenharia" className={linkClass('/engenharia')} aria-current={ariaCurrent('/engenharia') ? 'page' : undefined}>
            <i className="fa-solid fa-compass-drafting" aria-hidden="true"></i>
            <span>Engenharia</span>
          </Link>
        )}
        <Link to="/contato" className={linkClass('/contato')} aria-current={ariaCurrent('/contato') ? 'page' : undefined}>
          <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          <span>Contato</span>
        </Link>
      </div>
    </nav>
  );
}
