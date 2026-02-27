import { useLanguage } from '../contexts/LanguageContext';

/* Bandeiras em SVG: ES, FR, EN, CA */
const FLAG_ES = (
  <svg className="language-selector__flag-svg" viewBox="0 0 20 14" aria-hidden="true">
    <rect width="20" height="14" fill="#c60b1e" />
    <rect y="3" width="20" height="8" fill="#ffc400" />
    <rect y="5" width="20" height="4" fill="#c60b1e" />
  </svg>
);
const FLAG_FR = (
  <svg className="language-selector__flag-svg" viewBox="0 0 20 14" aria-hidden="true">
    <rect width="20" height="14" fill="#002395" />
    <rect x="6.67" width="6.66" height="14" fill="#fff" />
    <rect x="13.33" width="6.67" height="14" fill="#ed2939" />
  </svg>
);
const FLAG_EN = (
  <svg className="language-selector__flag-svg" viewBox="0 0 20 14" aria-hidden="true">
    <rect width="20" height="14" fill="#fff" />
    <rect y="0" width="20" height="1.08" fill="#bf0a30" />
    <rect y="2.15" width="20" height="1.08" fill="#bf0a30" />
    <rect y="4.3" width="20" height="1.08" fill="#bf0a30" />
    <rect y="6.45" width="20" height="1.08" fill="#bf0a30" />
    <rect y="8.6" width="20" height="1.08" fill="#bf0a30" />
    <rect y="10.75" width="20" height="1.08" fill="#bf0a30" />
    <rect y="12.9" width="20" height="1.1" fill="#bf0a30" />
    <rect width="7.7" height="7.5" fill="#3c3b6e" />
    <circle cx="1.9" cy="1.9" r="0.45" fill="#fff" />
    <circle cx="3.85" cy="1.9" r="0.45" fill="#fff" />
    <circle cx="5.8" cy="1.9" r="0.45" fill="#fff" />
    <circle cx="2.9" cy="2.95" r="0.45" fill="#fff" />
    <circle cx="4.85" cy="2.95" r="0.45" fill="#fff" />
    <circle cx="1.9" cy="4" r="0.45" fill="#fff" />
    <circle cx="3.85" cy="4" r="0.45" fill="#fff" />
    <circle cx="5.8" cy="4" r="0.45" fill="#fff" />
    <circle cx="2.9" cy="5.05" r="0.45" fill="#fff" />
    <circle cx="4.85" cy="5.05" r="0.45" fill="#fff" />
    <circle cx="1.9" cy="6.1" r="0.45" fill="#fff" />
    <circle cx="3.85" cy="6.1" r="0.45" fill="#fff" />
    <circle cx="5.8" cy="6.1" r="0.45" fill="#fff" />
  </svg>
);
const FLAG_CA = (
  <svg className="language-selector__flag-svg" viewBox="0 0 20 14" aria-hidden="true">
    <rect width="20" height="14" fill="#fcdd09" />
    <rect y="2.8" width="20" height="2.8" fill="#da121a" />
    <rect y="5.6" width="20" height="2.8" fill="#da121a" />
    <rect y="8.4" width="20" height="2.8" fill="#da121a" />
    <rect y="11.2" width="20" height="2.8" fill="#da121a" />
  </svg>
);

const LANGUAGES = [
  { code: 'es', flag: FLAG_ES, label: 'Español' },
  { code: 'fr', flag: FLAG_FR, label: 'Français' },
  { code: 'en', flag: FLAG_EN, label: 'English' },
  { code: 'ca', flag: FLAG_CA, label: 'Català' },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-selector" role="group" aria-label="Seleção de idioma">
      {LANGUAGES.map(({ code, flag, label }) => (
        <button
          key={code}
          type="button"
          className={`language-selector__btn ${language === code ? 'language-selector__btn--active' : ''}`}
          onClick={() => setLanguage(code)}
          title={label}
          aria-label={label}
          aria-pressed={language === code}
        >
          <span className="language-selector__flag" aria-hidden="true">{flag}</span>
        </button>
      ))}
    </div>
  );
}
