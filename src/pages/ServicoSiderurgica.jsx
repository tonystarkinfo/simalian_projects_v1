import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceAreaLayout from '../components/ServiceAreaLayout';

const IMG_S = '/assets/img/servicos/imagens-siderurgica';

const CARD_CONFIG = [
  {
    modalId: 'siderurgica-tubulacao',
    key: 'tubulacao',
    icon: 'fa-pipe',
    image: `${IMG_S}/tubus1.avif`,
    images: [`${IMG_S}/tubus1.avif`, `${IMG_S}/tubulação2.jpg`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-cog', n: 3 }],
    modalDesc: true,
  },
  {
    modalId: 'siderurgica-estruturas',
    key: 'estruturas',
    icon: 'fa-industry',
    image: `${IMG_S}/estrtura.png`,
    images: [`${IMG_S}/estrtura.png`, `${IMG_S}/estrututa2.jpeg`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-cog', n: 3 }],
    modalDesc: true,
  },
  {
    modalId: 'siderurgica-plataformas',
    key: 'plataformas',
    icon: 'fa-layer-group',
    image: `${IMG_S}/plataforma.png`,
    images: [`${IMG_S}/plataforma.png`, `${IMG_S}/PlataformasPasarelasProteccionesIndustriales1.jpeg`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-cog', n: 3 }],
    modalDesc: true,
  },
  {
    modalId: 'siderurgica-depositos',
    key: 'depositos',
    icon: 'fa-droplet',
    image: `${IMG_S}/deposito.jpg`,
    images: [`${IMG_S}/deposito.jpg`, `${IMG_S}/deposito2.jpg`],
    sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-cog', n: 3 }],
    modalDesc: true,
  },
];

function buildCards(t, prefix) {
  return CARD_CONFIG.map(({ modalId, key, icon, image, images, sections, modalDesc }) => {
    const p = `${prefix}.${key}`;
    const content = {
      images: images.length ? images : undefined,
      description: modalDesc ? t(`${p}_modalDesc`) : undefined,
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

export default function ServicoSiderurgica() {
  const { t } = useLanguage();
  const cards = useMemo(() => buildCards(t, 'cardsSiderurgica'), [t]);
  return (
    <ServiceAreaLayout
      sectionLabel={t('servicosSiderurgica.sectionLabel')}
      title={t('servicosSiderurgica.title')}
      subtitle={t('servicosSiderurgica.subtitle')}
      cards={cards}
      bannerImage="/assets/img/servicos/banner-imagem/banner%20sinderugica.jpeg"
    />
  );
}
