import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link to="/" className="footer__brand-name">SIMALIAN PROJECTS</Link>
            <p className="footer__brand-desc">
              {t('footer.brandDesc')}
            </p>
          </div>
          <div>
            <h4 className="footer__col-title">{t('footer.nav')}</h4>
            <ul className="footer__links">
              <li><Link to="/">{t('footer.home')}</Link></li>
              <li><Link to="/servicos">{t('footer.servicos')}</Link></li>
              <li><Link to="/contato">{t('footer.contacto')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__col-title">{t('footer.servicos')}</h4>
            <ul className="footer__links">
              <li><Link to="/servicos#fabricacao">{t('footer.fabricacao')}</Link></li>
              <li><Link to="/servicos#projetos">{t('footer.projetosEspeciais')}</Link></li>
              <li><Link to="/servicos#montagem">{t('footer.montagem')}</Link></li>
              <li><Link to="/servicos#manutencao">{t('footer.manutencao')}</Link></li>
              <li><Link to="/servicos#tratamentos">{t('footer.tratamentos')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__col-title">{t('footer.contacto')}</h4>
            <ul className="footer__links">
              <li><a href="tel:+351000000000">+351 000 000 000</a></li>
              <li><a href="mailto:info@simalian.pt">info@simalian.pt</a></li>
              <li>{t('home.portugal')}</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>{t('footer.copyright')}</span>
          <div className="footer__legal">
            <a href="#privacidade">{t('footer.privacidade')}</a>
            <a href="#termos">{t('footer.termos')}</a>
            <a href="#cookies">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
