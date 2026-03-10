import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceAreaLayout from '../components/ServiceAreaLayout';

const IMG_C = '/assets/img/servicos/contrutione';

const CARD_CONFIG = [
  {
    modalId: 'construccion-cubiertas',
    key: 'cubiertas',
    icon: 'fa-umbrella',
    image: `${IMG_C}/CubiertasMetálicas.png`,
    images: [`${IMG_C}/CubiertasMetálicas.png`, `${IMG_C}/Estacionamento Cobertura Metálica 4K.png`,],
    sections: [{ icon: 'fa-list', n: 3 }, { icon: 'fa-cog', n: 4 }],
  },
  {
    modalId: 'construccion-escadas',
    key: 'escadas',
    icon: 'fa-bars-staggered',
    image: `${IMG_C}/Escada Metálica Externa Azul 4K.png`,
    images: [`${IMG_C}/Escada Metálica Externa Azul 4K.png`, `${IMG_C}/Escada Incêndio Metálica 4K.png`],
    sections: [{ icon: 'fa-list', n: 3 }, { icon: 'fa-cog', n: 3 }],
  },
  {
    modalId: 'construccion-barandillas',
    key: 'barandillas',
    icon: 'fa-grip-lines',
    image: `${IMG_C}/proteção2.png`,
    images: [`${IMG_C}/proteção2.png`, `${IMG_C}/proteção.png`],
    sections: [{ icon: 'fa-list', n: 3 }, { icon: 'fa-cog', n: 3 }],
  },
  {
    modalId: 'construccion-refuerzos',
    key: 'refuerzos',
    icon: 'fa-wrench',
    image: `${IMG_C}/reforcoestrutural.jpg`,
    images: [`${IMG_C}/reforcoestrutural.jpg`,],
    sections: [{ icon: 'fa-list', n: 3 }, { icon: 'fa-cog', n: 3 }],
  },
  {
    modalId: 'construccion-entreplantas',
    key: 'entreplantas',
    icon: 'fa-layer-group',
    image: `${IMG_C}/Galpão Industrial Dois Níveis 4K.png`,
    images: [`${IMG_C}/Galpão Industrial Dois Níveis 4K.png`],
    sections: [{ icon: 'fa-list', n: 3 }, { icon: 'fa-cog', n: 3 }],
  },
  {
    modalId: 'construccion-herrajes',
    key: 'herrajes',
    icon: 'fa-bolt',
    image: `${IMG_C}/usinagem.webp`,
    images: [`${IMG_C}/usinagem.webp`,],
    sections: [{ icon: 'fa-list', n: 3 }, { icon: 'fa-cog', n: 3 }],
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
      image,
      alt: t(`${p}_alt`),
      modalContent: content,
    };
  });
}

export default function ServicoObra() {
  const { t } = useLanguage();
  const cards = useMemo(() => buildCards(t, 'cardsConstruccion'), [t]);
  return (
    <ServiceAreaLayout
      sectionLabel={t('servicosConstruccion.sectionLabel')}
      title={t('servicosConstruccion.title')}
      subtitle={t('servicosConstruccion.subtitle')}
      cards={cards}
      bannerImage="/assets/img/servicos/banner-imagem/bannermao-deobra.png"
    />
  );
}
