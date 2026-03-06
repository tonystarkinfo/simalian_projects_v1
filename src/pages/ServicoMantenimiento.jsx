import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceAreaLayout from '../components/ServiceAreaLayout';

const IMG = '/assets/img/servicos';
const IMG_M = `${IMG}/Imagens_simalian`;

const CARD_CONFIG = [
  {
    modalId: 'mantenimiento-electrico',
    key: 'electrico',
    icon: 'fa-bolt',
    image: `${IMG_M}/eletrecista1.png`,
    images: [`${IMG_M}/eletrecista1.png`, `${IMG_M}/eletricista2.png`, `${IMG_M}/eletricista3.png`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-mecanico',
    key: 'mecanico',
    icon: 'fa-gears',
    image: `${IMG_M}/mecanica.jpg`,
    images: [`${IMG_M}/mecanica.jpg`, `${IMG_M}/mecanico2.jpg`, `${IMG_M}/mecanico3.jpg`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-soldadura',
    key: 'soldadura',
    icon: 'fa-fire-flame-curved',
    image: `${IMG_M}/SoldadurayReparacionesPlanta1.jpg`,
    images: [`${IMG_M}/SoldadurayReparacionesPlanta1.jpg`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-soldadura-tig',
    key: 'soldaduraTig',
    icon: 'fa-wand-magic-sparkles',
    image: `${IMG_M}/soldatig1.png`,
    images: [`${IMG_M}/soldatig1.png`, `${IMG_M}/tig2.jpg`, `${IMG_M}/tig3.jpg`],
    sections: [{ icon: 'fa-list', n: 4 }, { icon: 'fa-list', n: 4 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-caldereria',
    key: 'caldereria',
    icon: 'fa-industry',
    image: `${IMG_M}/caldeira.jpg`,
    images: [`${IMG_M}/caldeira.jpg`, `${IMG_M}/caldeira2.jpg`, `${IMG_M}/cladeira3.jpg`],
    sections: [{ icon: 'fa-list', n: 4 }, { icon: 'fa-list', n: 4 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-preventivo',
    key: 'preventivo',
    icon: 'fa-calendar-check',
    image: `${IMG_M}/MantenimientoPreventivoIndustrial1.jpg`,
    images: [`${IMG_M}/MantenimientoPreventivoIndustrial1.jpg`, `${IMG_M}/MantenimientoPreventivoIndustrial2.jpg`, `${IMG_M}/MantenimientoPreventivoIndustrial1.jpg`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-intervenciones',
    key: 'intervenciones',
    icon: 'fa-screwdriver-wrench',
    image: `${IMG_M}/planta.png`,
    images: [`${IMG_M}/planta.png`, `${IMG_M}/planta2.png`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-list', n: 4 }],
  },
  {
    modalId: 'mantenimiento-mano-obra',
    key: 'manoObra',
    icon: 'fa-people-group',
    image: `${IMG_M}/maodeobra.jpg`,
    images: [`${IMG_M}/maodeobra.jpg`, `${IMG_M}/maodeobra2.jpg`, `${IMG_M}/maodeobra3.png`],
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
