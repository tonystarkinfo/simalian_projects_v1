import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceAreaLayout from '../components/ServiceAreaLayout';

const CARD_CONFIG = [
  { modalId: 'siderurgica-corte', key: 'corte', icon: 'fa-bolt', image: '/assets/img/servicos/corte-plasma-laser/01.jpg', images: ['/assets/img/servicos/corte-plasma-laser/01.jpg', '/assets/img/servicos/corte-plasma-laser/02.jpg', '/assets/img/servicos/corte-plasma-laser/03.jpg'], sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-cog', n: 4 }], modalDesc: false },
  { modalId: 'siderurgica-dobra', key: 'dobra', icon: 'fa-arrows-to-dot', image: '/assets/img/servicos/dobra-calandragem/01.jpg', images: ['/assets/img/servicos/dobra-calandragem/01.jpg', '/assets/img/servicos/dobra-calandragem/02.jpg', '/assets/img/servicos/dobra-calandragem/03.jpg'], sections: [{ icon: 'fa-list', n: 5 }], modalDesc: false },
  { modalId: 'siderurgica-soldadura', key: 'soldadura', icon: 'fa-fire', image: '/assets/img/servicos/soldadura-mig-mag-tig/01.jpg', images: ['/assets/img/servicos/soldadura-mig-mag-tig/01.jpg', '/assets/img/servicos/soldadura-mig-mag-tig/02.jpg', '/assets/img/servicos/soldadura-mig-mag-tig/03.jpg'], sections: [{ icon: 'fa-list', n: 5 }, { icon: 'fa-shield-halved', n: 2 }], modalDesc: false },
  { modalId: 'siderurgica-usinagem', key: 'usinagem', icon: 'fa-screwdriver-wrench', image: '/assets/img/servicos/placeholder.jpg', images: [], sections: [{ icon: 'fa-list', n: 4 }], modalDesc: true },
  { modalId: 'siderurgica-tratamentos', key: 'tratamentos', icon: 'fa-paint-roller', image: '/assets/img/servicos/placeholder.jpg', images: [], sections: [{ icon: 'fa-list', n: 4 }], modalDesc: true },
  { modalId: 'siderurgica-estruturas', key: 'estruturas', icon: 'fa-industry', image: '/assets/img/servicos/placeholder.jpg', images: [], sections: [{ icon: 'fa-list', n: 4 }], modalDesc: true },
  { modalId: 'siderurgica-tubos', key: 'tubos', icon: 'fa-pipe', image: '/assets/img/servicos/placeholder.jpg', images: [], sections: [{ icon: 'fa-list', n: 4 }], modalDesc: true },
  { modalId: 'siderurgica-qualidade', key: 'qualidade', icon: 'fa-magnifying-glass', image: '/assets/img/servicos/placeholder.jpg', images: [], sections: [{ icon: 'fa-list', n: 4 }], modalDesc: true },
  { modalId: 'siderurgica-rastreabilidade', key: 'rastreabilidade', icon: 'fa-clipboard-check', image: '/assets/img/servicos/placeholder.jpg', images: [], sections: [{ icon: 'fa-list', n: 4 }], modalDesc: true },
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
    />
  );
}
