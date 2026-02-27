import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const NAV_SERVICES = [
  { to: '/siderurgica', key: 'siderurgica', icon: 'fa-industry' },
  { to: '/construccion', key: 'construccion', icon: 'fa-hard-hat' },
  { to: '/mantenimiento', key: 'mantenimiento', icon: 'fa-wrench' },
];

export default function NavFloat() {
  const location = useLocation();
  const { t } = useLanguage();
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
    <nav className="nav-float" role="navigation" aria-label={t('nav.ariaNav')}>
      <div className="nav-float__inner">
        <Link
          to="/#hero"
          className="nav-float__logo"
          aria-label={t('nav.ariaHero')}
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
          <span>{path === '/' || path === '' ? t('nav.principal') : t('nav.home')}</span>
        </Link>
        {NAV_SERVICES.map(({ to, key, icon }) => (
          <Link key={to} to={to} className={linkClass(to)} aria-current={ariaCurrent(to) ? 'page' : undefined}>
            <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
            <span>{t(`nav.${key}`)}</span>
          </Link>
        ))}
        <Link to="/contato" className={linkClass('/contato')} aria-current={ariaCurrent('/contato') ? 'page' : undefined}>
          <i className="fa-solid fa-envelope" aria-hidden="true"></i>
          <span>{t('nav.contato')}</span>
        </Link>
      </div>
    </nav>
  );
}
