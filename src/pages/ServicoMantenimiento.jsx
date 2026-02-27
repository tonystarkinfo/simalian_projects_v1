import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceAreaLayout from '../components/ServiceAreaLayout';

const CARD_CONFIG = [
  { modalId: 'mantenimiento-inspecoes', key: 'inspecoes', icon: 'fa-magnifying-glass', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-diagnostico', key: 'diagnostico', icon: 'fa-clipboard-list', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-reparacoes', key: 'reparacoes', icon: 'fa-wrench', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-modernizacao', key: 'modernizacao', icon: 'fa-gears', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-programada', key: 'programada', icon: 'fa-calendar-check', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-pintura', key: 'pintura', icon: 'fa-paint-roller', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-substituicao', key: 'substituicao', icon: 'fa-arrows-rotate', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-relatorios', key: 'relatorios', icon: 'fa-file-lines', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-gestao', key: 'gestao', icon: 'fa-chart-line', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
];

function buildCards(t, prefix) {
  return CARD_CONFIG.map(({ modalId, key, icon, image, sections }) => {
    const p = `${prefix}.${key}`;
    const content = {
      description: t(`${p}_modalDesc`),
      sections: sections.map((sec, si) => ({
        heading: t(`${p}_sec${si}_head`),
        icon: sec.icon,
        items: Array.from({ length: sec.n }, (_, i) => t(`${p}_sec${si}_${i + 1}`)),
      })),
    };
    return {
      modalId,
      title: t(`${p}_title`),
      desc: t(`${p}_desc`),
      icon,
      image,
      alt: t(`${p}_alt`),
      modalContent: content,
    };
  });
}

export default function ServicoMantenimiento() {
  const { t } = useLanguage();
  const cards = useMemo(() => buildCards(t, 'cardsMantenimiento'), [t]);
  return (
    <ServiceAreaLayout
      sectionLabel={t('servicosMantenimiento.sectionLabel')}
      title={t('servicosMantenimiento.title')}
      subtitle={t('servicosMantenimiento.subtitle')}
      cards={cards}
    />
  );
}
