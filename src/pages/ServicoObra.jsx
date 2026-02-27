import { useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceAreaLayout from '../components/ServiceAreaLayout';

const CARD_CONFIG = [
  { modalId: 'construccion-montagem', key: 'montagem', icon: 'fa-hard-hat', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'construccion-tubulacoes', key: 'tubulacoes', icon: 'fa-plug', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'construccion-plataformas', key: 'plataformas', icon: 'fa-layer-group', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'construccion-soldadura', key: 'soldadura', icon: 'fa-fire', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'construccion-escadas', key: 'escadas', icon: 'fa-bars-staggered', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'construccion-supervisao', key: 'supervisao', icon: 'fa-user-helmet-safety', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'construccion-elevacao', key: 'elevacao', icon: 'fa-truck', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'construccion-fixacoes', key: 'fixacoes', icon: 'fa-bolt', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
  { modalId: 'construccion-commissioning', key: 'commissioning', icon: 'fa-clipboard-check', image: '/assets/img/servicos/placeholder.jpg', sections: [{ icon: 'fa-list', n: 4 }] },
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

export default function ServicoObra() {
  const { t } = useLanguage();
  const cards = useMemo(() => buildCards(t, 'cardsConstruccion'), [t]);
  return (
    <ServiceAreaLayout
      sectionLabel={t('servicosConstruccion.sectionLabel')}
      title={t('servicosConstruccion.title')}
      subtitle={t('servicosConstruccion.subtitle')}
      cards={cards}
    />
  );
}
