import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand-col">
            <Link to="/" className="footer__brand" aria-label="SIMALIAN INDUSTRIAL PROJECTS — Início">
              <img src="/assets/img/servicos/imagens-logos/Logo_maior.png" alt="SIMALIAN INDUSTRIAL PROJECTS" className="footer__brand-logo" />
            </Link>
            <p className="footer__brand-desc">{t('footer.brandDesc')}</p>
          </div>
          <nav className="footer__nav-col" aria-label={t('footer.nav')}>
            <h4 className="footer__col-title">{t('footer.nav')}</h4>
            <ul className="footer__links">
              <li><Link to="/">{t('footer.home')}</Link></li>
              <li><Link to="/servicos">{t('footer.servicos')}</Link></li>
              <li><Link to="/contato">{t('footer.contacto')}</Link></li>
            </ul>
          </nav>
          <nav className="footer__nav-col" aria-label={t('footer.servicos')}>
            <h4 className="footer__col-title">{t('footer.servicos')}</h4>
            <ul className="footer__links">
              <li><Link to="/servicos#fabricacao">{t('footer.fabricacao')}</Link></li>
              <li><Link to="/servicos#projetos">{t('footer.projetosEspeciais')}</Link></li>
              <li><Link to="/servicos#montagem">{t('footer.montagem')}</Link></li>
              <li><Link to="/servicos#manutencao">{t('footer.manutencao')}</Link></li>
              <li><Link to="/servicos#tratamentos">{t('footer.tratamentos')}</Link></li>
            </ul>
          </nav>
          <div className="footer__contact-col">
            <h4 className="footer__col-title">{t('footer.contacto')}</h4>
            <ul className="footer__links footer__contact-list">
              <li><a href={`tel:${t('contact.contactPhone').replace(/\s/g, '')}`}>{t('contact.contactPhone')}</a></li>
              <li><a href={`mailto:${t('contact.contactEmail')}`}>{t('contact.contactEmail')}</a></li>
              <li className="footer__address">{t('contact.contactAddress')}</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__copyright">{t('footer.copyright')}</span>
          <nav className="footer__legal" aria-label="Legal">
            <a href="#privacidade">{t('footer.privacidade')}</a>
            <span className="footer__legal-sep" aria-hidden="true">·</span>
            <a href="#termos">{t('footer.termos')}</a>
            <span className="footer__legal-sep" aria-hidden="true">·</span>
            <a href="#cookies">{t('footer.cookies')}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
