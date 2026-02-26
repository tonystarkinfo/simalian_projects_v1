import ServiceAreaLayout from '../components/ServiceAreaLayout';

const CARDS = [
  {
    modalId: 'construccion-montagem',
    title: 'Montagem de Estruturas',
    desc: 'Equipa própria de montadores para estruturas metálicas de grande e médio porte no local.',
    icon: 'fa-hard-hat',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Montagem de estruturas',
    modalContent: {
      description: 'Equipa própria de montadores para estruturas metálicas de grande e médio porte. Montagem no local com supervisão técnica e cumprimento de normas de segurança.',
      sections: [
        { heading: 'Serviços', icon: 'fa-list', items: ['Montagem de pórticos e vigas', 'Ligações parafusadas e soldadas', 'Alinhamento e nivelamento', 'Testes de aceitação'] },
      ],
    },
  },
  {
    modalId: 'construccion-tubulacoes',
    title: 'Tubulações e Suportes',
    desc: 'Instalação de tubulações industriais, suportes e ancoragens com supervisão técnica.',
    icon: 'fa-plug',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Tubulações e suportes',
    modalContent: {
      description: 'Instalação de tubulações industriais, suportes e ancoragens. Projeto e montagem de linhas de tubagem com supervisão técnica permanente.',
      sections: [
        { heading: 'Capacidades', icon: 'fa-list', items: ['Tubagem em aço carbono e inox', 'Suportes e ancoragens', 'Válvulas e acessórios', 'Ensaios de estanquidade'] },
      ],
    },
  },
  {
    modalId: 'construccion-plataformas',
    title: 'Plataformas e Mezaninos',
    desc: 'Montagem de plataformas, mezaninos e passagens em aço conforme projeto.',
    icon: 'fa-layer-group',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Plataformas e mezaninos',
    modalContent: {
      description: 'Montagem de plataformas, mezaninos e passagens em aço conforme projeto de engenharia. Pavimentos em grelha ou chapa antiderrapante.',
      sections: [
        { heading: 'Serviços', icon: 'fa-list', items: ['Plataformas de acesso', 'Mezaninos industriais', 'Passagens e passadeiras', 'Guarda-corpos integrados'] },
      ],
    },
  },
  {
    modalId: 'construccion-soldadura',
    title: 'Soldadura in Situ',
    desc: 'Soldadura MIG/MAG/TIG no local para reparações, reforços e ligações de campo.',
    icon: 'fa-fire',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Soldadura in situ',
    modalContent: {
      description: 'Soldadura MIG/MAG/TIG no local para reparações, reforços e ligações de campo. Soldadores certificados e procedimentos qualificados.',
      sections: [
        { heading: 'Processos', icon: 'fa-list', items: ['Soldadura em obra (campo)', 'Reparações e reforços', 'Ligações de montagem', 'Ensaio visual e dimensional'] },
      ],
    },
  },
  {
    modalId: 'construccion-escadas',
    title: 'Escadas e Guarda-corpos',
    desc: 'Instalação de escadas metálicas, guarda-corpos e acessórios de segurança.',
    icon: 'fa-bars-staggered',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Escadas e guarda-corpos',
    modalContent: {
      description: 'Instalação de escadas metálicas, guarda-corpos e acessórios de segurança. Conformidade com normas de segurança e acesso.',
      sections: [
        { heading: 'Elementos', icon: 'fa-list', items: ['Escadas fixas e móveis', 'Guarda-corpos e rodapés', 'Acessórios de segurança', 'Pintura e proteção'] },
      ],
    },
  },
  {
    modalId: 'construccion-supervisao',
    title: 'Supervisão Técnica',
    desc: 'Acompanhamento técnico permanente em obra para cumprimento de normas e prazos.',
    icon: 'fa-user-helmet-safety',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Supervisão técnica',
    modalContent: {
      description: 'Acompanhamento técnico permanente em obra para cumprimento de normas, especificações e prazos. Coordenação com cliente e subcontratados.',
      sections: [
        { heading: 'Funções', icon: 'fa-list', items: ['Supervisão de montagem', 'Controlo de qualidade em obra', 'Planeamento e segurança', 'Relatórios de progresso'] },
      ],
    },
  },
  {
    modalId: 'construccion-elevacao',
    title: 'Elevação e Gruas',
    desc: 'Coordenação de meios de elevação e gruas para montagem de elementos pesados.',
    icon: 'fa-truck',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Elevação e gruas',
    modalContent: {
      description: 'Coordenação de meios de elevação e gruas para montagem de elementos pesados. Planeamento de içamentos e segurança.',
      sections: [
        { heading: 'Meios', icon: 'fa-list', items: ['Gruas telescópicas e lattice', 'Empilhadores e pontes rolantes', 'Planeamento de içamentos', 'Certificação e segurança'] },
      ],
    },
  },
  {
    modalId: 'construccion-fixacoes',
    title: 'Acessórios e Fixações',
    desc: 'Fornecimento e montagem de parafusos, chumbadores e sistemas de fixação.',
    icon: 'fa-bolt',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Acessórios e fixações',
    modalContent: {
      description: 'Fornecimento e montagem de parafusos de alta resistência, chumbadores e sistemas de fixação. Especificação conforme projeto.',
      sections: [
        { heading: 'Produtos', icon: 'fa-list', items: ['Parafusos HV e estruturais', 'Chumbadores químicos e mecânicos', 'Chapas de base e consolas', 'Aperto controlado (torque)'] },
      ],
    },
  },
  {
    modalId: 'construccion-commissioning',
    title: 'Commissioning',
    desc: 'Testes de aceitação, ajustes finais e entrega documentada da obra.',
    icon: 'fa-clipboard-check',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Commissioning',
    modalContent: {
      description: 'Testes de aceitação, ajustes finais e entrega documentada da obra. Dossiê de as-built e formação quando aplicável.',
      sections: [
        { heading: 'Entregas', icon: 'fa-list', items: ['Testes de aceitação', 'Ajustes e correções', 'Dossiê as-built', 'Formação e manuais'] },
      ],
    },
  },
];

export default function ServicoObra() {
  return (
    <ServiceAreaLayout
      sectionLabel="Construcción"
      title="Montagem e Construção no Local"
      subtitle="Equipa própria de montadores para estruturas, tubulações e plataformas. Alinhamento de precisão, solda in situ e supervisão técnica. Do projeto à estrutura instalada no local."
      cards={CARDS}
    />
  );
}
