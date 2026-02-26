import ServiceAreaLayout from '../components/ServiceAreaLayout';

const CARDS = [
  {
    modalId: 'mantenimiento-inspecoes',
    title: 'Inspeções Periódicas',
    desc: 'Inspeções programadas para avaliação do estado de estruturas e equipamentos.',
    icon: 'fa-magnifying-glass',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Inspeções periódicas',
    modalContent: {
      description: 'Inspeções programadas para avaliação do estado de estruturas e equipamentos. Relatórios com recomendações e priorização de intervenções.',
      sections: [
        { heading: 'Serviços', icon: 'fa-list', items: ['Inspeção visual e dimensional', 'Registo fotográfico', 'Relatório de condição', 'Plano de manutenção recomendado'] },
      ],
    },
  },
  {
    modalId: 'mantenimiento-diagnostico',
    title: 'Diagnóstico Estrutural',
    desc: 'Análise técnica e relatórios de condição para tomada de decisão.',
    icon: 'fa-clipboard-list',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Diagnóstico estrutural',
    modalContent: {
      description: 'Análise técnica e relatórios de condição para tomada de decisão. Avaliação de segurança e vida útil residual.',
      sections: [
        { heading: 'Entregas', icon: 'fa-list', items: ['Análise de integridade estrutural', 'Cálculo de capacidade residual', 'Relatório de diagnóstico', 'Proposta de intervenção'] },
      ],
    },
  },
  {
    modalId: 'mantenimiento-reparacoes',
    title: 'Reparações e Reforços',
    desc: 'Reparações estruturais, reforços e reabilitação de infraestruturas existentes.',
    icon: 'fa-wrench',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Reparações e reforços',
    modalContent: {
      description: 'Reparações estruturais, reforços e reabilitação de infraestruturas existentes. Execução com equipa própria e documentação completa.',
      sections: [
        { heading: 'Intervenções', icon: 'fa-list', items: ['Substituição de elementos degradados', 'Reforço de ligações e nós', 'Soldadura de reparação', 'Tratamento anticorrosivo'] },
      ],
    },
  },
  {
    modalId: 'mantenimiento-modernizacao',
    title: 'Modernização de Equipamentos',
    desc: 'Atualização e modernização de equipamentos e sistemas industriais.',
    icon: 'fa-gears',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Modernização de equipamentos',
    modalContent: {
      description: 'Atualização e modernização de equipamentos e sistemas industriais. Aumento de capacidade e melhoria de eficiência.',
      sections: [
        { heading: 'Serviços', icon: 'fa-list', items: ['Estudo de viabilidade', 'Projeto de modificação', 'Fabricação e montagem', 'Commissioning e formação'] },
      ],
    },
  },
  {
    modalId: 'mantenimiento-programada',
    title: 'Manutenção Programada',
    desc: 'Planos de manutenção preventiva e corretiva com documentação completa.',
    icon: 'fa-calendar-check',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Manutenção programada',
    modalContent: {
      description: 'Planos de manutenção preventiva e corretiva com documentação completa. Acompanhamento e histórico de intervenções.',
      sections: [
        { heading: 'Entregas', icon: 'fa-list', items: ['Plano de manutenção anual', 'Registos de intervenções', 'Gestão de peças de reposição', 'Indicadores de desempenho'] },
      ],
    },
  },
  {
    modalId: 'mantenimiento-pintura',
    title: 'Pintura e Proteção',
    desc: 'Tratamento de superfícies, pintura e proteção anticorrosiva.',
    icon: 'fa-paint-roller',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Pintura e proteção',
    modalContent: {
      description: 'Tratamento de superfícies, pintura e proteção anticorrosiva. Preparação de superfície e sistemas de pintura industriais.',
      sections: [
        { heading: 'Processos', icon: 'fa-list', items: ['Jateamento e preparação', 'Primários e acabamentos', 'Pintura em pó e líquida', 'Sistemas de alta durabilidade'] },
      ],
    },
  },
  {
    modalId: 'mantenimiento-substituicao',
    title: 'Substituição de Componentes',
    desc: 'Substituição de elementos degradados com garantia de qualidade.',
    icon: 'fa-arrows-rotate',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Substituição de componentes',
    modalContent: {
      description: 'Substituição de elementos degradados com garantia de qualidade. Fornecimento e montagem de componentes sob medida ou de catálogo.',
      sections: [
        { heading: 'Serviços', icon: 'fa-list', items: ['Identificação e especificação', 'Fornecimento ou fabricação', 'Montagem e ajustes', 'Testes e documentação'] },
      ],
    },
  },
  {
    modalId: 'mantenimiento-relatorios',
    title: 'Relatórios Técnicos',
    desc: 'Documentação técnica, certificados e dossiês de acompanhamento.',
    icon: 'fa-file-lines',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Relatórios técnicos',
    modalContent: {
      description: 'Documentação técnica, certificados e dossiês de acompanhamento. Relatórios de inspeção, reparação e conformidade.',
      sections: [
        { heading: 'Documentos', icon: 'fa-list', items: ['Relatórios de inspeção', 'Certificados de soldadura', 'Registos de manutenção', 'Dossiês de obra'] },
      ],
    },
  },
  {
    modalId: 'mantenimiento-gestao',
    title: 'Gestão de Ativos',
    desc: 'Apoio à gestão do ciclo de vida de ativos industriais e estruturas.',
    icon: 'fa-chart-line',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Gestão de ativos',
    modalContent: {
      description: 'Apoio à gestão do ciclo de vida de ativos industriais e estruturas. Inventário, condição e planeamento de investimento.',
      sections: [
        { heading: 'Serviços', icon: 'fa-list', items: ['Inventário de ativos', 'Avaliação de condição', 'Projeção de vida útil', 'Plano de investimento'] },
      ],
    },
  },
];

export default function ServicoMantenimiento() {
  return (
    <ServiceAreaLayout
      sectionLabel="Mantenimiento"
      title="Manutenção e Reparações"
      subtitle="Inspeções periódicas, reparações estruturais, reforços e modernização de equipamentos. Aumento de capacidade das instalações existentes com garantia de qualidade e segurança."
      cards={CARDS}
    />
  );
}
