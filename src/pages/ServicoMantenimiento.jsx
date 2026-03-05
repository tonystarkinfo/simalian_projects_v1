import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceAreaLayout from '../components/ServiceAreaLayout';

const CARD_CONFIG = [
  { modalId: 'mantenimiento-electrico', key: 'electrico', icon: 'fa-bolt', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-mecanico', key: 'mecanico', icon: 'fa-gears', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-soldadura', key: 'soldadura', icon: 'fa-fire-flame-curved', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-soldadura-tig', key: 'soldaduraTig', icon: 'fa-wand-magic-sparkles', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }, { icon: 'fa-list', n: 4 }, { icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-caldereria', key: 'caldereria', icon: 'fa-industry', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }, { icon: 'fa-list', n: 4 }, { icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-preventivo', key: 'preventivo', icon: 'fa-calendar-check', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-intervenciones', key: 'intervenciones', icon: 'fa-screwdriver-wrench', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }] },
  { modalId: 'mantenimiento-mano-obra', key: 'manoObra', icon: 'fa-people-group', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }] },
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
