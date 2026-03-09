import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceAreaLayout from '../components/ServiceAreaLayout';

const IMG = '/assets/img/servicos';
const IMG_M = `${IMG}/Imagens_simalian/mantienimento`;

const CARD_CONFIG = [
  {
    modalId: 'mantenimiento-electrico',
    key: 'electrico',
    icon: 'fa-bolt',
    image: `${IMG_M}/eletricista (1).png`,
    images: [`${IMG_M}/eletricista (1).png`, `${IMG_M}/eletricista (3).png`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-mecanico',
    key: 'mecanico',
    icon: 'fa-gears',
    image: `${IMG_M}/mecanico (1).png`,
    images: [`${IMG_M}/mecanico (1).png`, `${IMG_M}/mecanico (2).png`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-soldadura',
    key: 'soldadura',
    icon: 'fa-fire-flame-curved',
    image: `${IMG_M}/reparatione.png`,
    images: [`${IMG_M}/reparatione.png`, `${IMG_M}/reparatione2.png`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-soldadura-tig',
    key: 'soldaduraTig',
    icon: 'fa-wand-magic-sparkles',
    image: `${IMG_M}/soldati1.png`,
    images: [`${IMG_M}/soldati1.png`, `${IMG_M}/soldati2.png`],
    sections: [{ icon: 'fa-list', n: 4 }, { icon: 'fa-list', n: 4 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-caldereria',
    key: 'caldereria',
    icon: 'fa-industry',
    image: `${IMG_M}/caldeira (1).png`,
    images: [`${IMG_M}/caldeira (1).png`, `${IMG_M}/caldeira (2).png`],
    sections: [{ icon: 'fa-list', n: 4 }, { icon: 'fa-list', n: 4 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-preventivo',
    key: 'preventivo',
    icon: 'fa-calendar-check',
    image: `${IMG_M}/mantenimento1.png`,
    images: [`${IMG_M}/mantenimento1.png`, `${IMG_M}/manteniemento2.png`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-intervenciones',
    key: 'intervenciones',
    icon: 'fa-screwdriver-wrench',
    image: `${IMG_M}/intervetion1 (1).png`,
    images: [`${IMG_M}/intervetion1 (1).png`, `${IMG_M}/intervetion1 (2).png`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-mano-obra',
    key: 'manoObra',
    icon: 'fa-people-group',
    image: `${IMG_M}/mqodeobra1 (1).png`,
    images: [`${IMG_M}/mqodeobra1 (1).png`, `${IMG_M}/mqodeobra1 (2).png`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }],
  },
];

function buildCards(t, prefix) {
  return CARD_CONFIG.map(({ modalId, key, icon, image, images, sections }) => {
    const p = `${prefix}.${key}`;
    const content = {
      description: t(`${p}_modalDesc`),
      images: Array.isArray(images) && images.length > 0 ? images : undefined,
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
      image: image,
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
