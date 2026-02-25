import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SERVICOS_SUBLINKS = [
  { to: '/servicos/siderurgica', label: 'Siderúrgica', icon: 'fa-industry' },
  { to: '/servicos/obra-construccion', label: 'Obra / Construcción', icon: 'fa-hard-hat' },
  { to: '/servicos/mantenimiento-reparaciones', label: 'Mantenimiento / Reparaciones', icon: 'fa-wrench' },
];

/**
 * NavFloat — same structure and classes as original.
 * Serviços expands inline to show 3 sub-links (no dropdown).
 */
export default function NavFloat() {
  const location = useLocation();
  const path = location.pathname;
  const [isServicesExpanded, setServicesExpanded] = useState(false);

  useEffect(() => {
    if (path === '/servicos' || path.startsWith('/servicos/')) {
      setServicesExpanded(true);
    } else {
      setServicesExpanded(false);
    }
  }, [path]);

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

  const handleServicosClick = (e) => {
    if (isServicesExpanded && (path === '/servicos' || path.startsWith('/servicos/'))) {
      e.preventDefault();
      setServicesExpanded(false);
    } else {
      setServicesExpanded(true);
    }
  };

  return (
    <nav className="nav-float" role="navigation" aria-label="Navegação principal">
      <div className={`nav-float__inner ${isServicesExpanded ? 'nav-float__inner--services-expanded' : ''}`}>
        <Link
          to="/#hero"
          className="nav-float__logo"
          aria-label="Ir para imagem principal — Hero"
          onClick={(e) => {
            if (path === '/' || path === '') {
              e.preventDefault();
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <img src="/assets/img/servicos/imagens-logos/Nome+logo.png" alt="SIMALIAN PROJECTS" className="nav-float__logo-img" />
        </Link>
        <Link to="/" className={linkClass('/')} aria-current={ariaCurrent('/') ? 'page' : undefined}>
          <i className="fa-solid fa-house" aria-hidden="true"></i>
          <span>{path === '/' || path === '' ? 'Principal' : 'Home'}</span>
        </Link>
        <Link
          to="/servicos"
          className={linkClass('/servicos')}
          aria-current={ariaCurrent('/servicos') ? 'page' : undefined}
          aria-expanded={isServicesExpanded}
          onClick={handleServicosClick}
        >
          <i className="fa-solid fa-gear" aria-hidden="true"></i>
          <span>Serviços</span>
        </Link>
        <div className="nav-float__services-extra" aria-hidden={!isServicesExpanded}>
          {SERVICOS_SUBLINKS.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={linkClass(to)}
              aria-current={ariaCurrent(to) ? 'page' : undefined}
            >
              <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
              <span>{label}</span>
            </Link>
          ))}
        </div>
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
