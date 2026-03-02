import { useLanguage } from '../contexts/LanguageContext';

/* Bandeiras em SVG: ES, FR, EN, CA — Espanha: proporção oficial 1:2:1, cores oficiais */
const FLAG_ES = (
  <svg className="language-selector__flag-svg" viewBox="0 0 20 14" aria-hidden="true">
    <rect y="0" width="20" height="3.5" fill="#AA151B" />
    <rect y="3.5" width="20" height="7" fill="#F1BF00" />
    <rect y="10.5" width="20" height="3.5" fill="#AA151B" />
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
/* Senyera: 9 faixas iguais (amarelo, vermelho x4 alternados), cores oficiais */
const FLAG_CA = (
  <svg className="language-selector__flag-svg" viewBox="0 0 20 14" aria-hidden="true">
    <rect width="20" height="14" fill="#FCDD09" />
    <rect y="1.556" width="20" height="1.556" fill="#DA121A" />
    <rect y="4.667" width="20" height="1.556" fill="#DA121A" />
    <rect y="7.778" width="20" height="1.556" fill="#DA121A" />
    <rect y="10.889" width="20" height="1.556" fill="#DA121A" />
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
