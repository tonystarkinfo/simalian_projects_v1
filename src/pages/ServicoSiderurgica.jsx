import ServiceAreaLayout from '../components/ServiceAreaLayout';

const CARDS = [
  {
    modalId: 'siderurgica-corte',
    title: 'Corte Plasma & Laser CNC',
    desc: 'Corte de precisão em chapas e perfis com tolerâncias mínimas, controlado por programação CNC.',
    icon: 'fa-bolt',
    image: '/assets/img/servicos/corte-plasma-laser/01.jpg',
    alt: 'Corte plasma e laser CNC',
    modalContent: {
      images: ['/assets/img/servicos/corte-plasma-laser/01.jpg', '/assets/img/servicos/corte-plasma-laser/02.jpg', '/assets/img/servicos/corte-plasma-laser/03.jpg'],
      sections: [
        { heading: 'Processos Disponíveis', icon: 'fa-list', items: ['Corte plasma CNC em chapas até 50 mm de espessura', 'Corte laser CNC para alta precisão em chapas finas e médias', 'Corte oxicorte para grandes espessuras', 'Programação CAD/CAM para otimização de material', 'Nesting automático para redução de desperdício'] },
        { heading: 'Materiais', icon: 'fa-cog', items: ['Aço carbono (S235, S275, S355)', 'Aço inoxidável (304, 316L)', 'Alumínio e ligas especiais', 'Chapas antidesgaste (Hardox, Raex)'] },
      ],
    },
  },
  {
    modalId: 'siderurgica-dobra',
    title: 'Dobra & Calandragem',
    desc: 'Conformação de chapas e perfis em quinadoras CNC e calandras de alta capacidade.',
    icon: 'fa-arrows-to-dot',
    image: '/assets/img/servicos/dobra-calandragem/01.jpg',
    alt: 'Dobra e calandragem',
    modalContent: {
      images: ['/assets/img/servicos/dobra-calandragem/01.jpg', '/assets/img/servicos/dobra-calandragem/02.jpg', '/assets/img/servicos/dobra-calandragem/03.jpg'],
      sections: [
        { heading: 'Capacidades', icon: 'fa-list', items: ['Quinadoras CNC até 4000 mm e 400 toneladas', 'Calandras de 3 e 4 rolos para perfis e chapas', 'Dobra de tubos e perfis em geometrias complexas', 'Programação automática de sequências de dobra', 'Controlo angular por laser integrado'] },
      ],
    },
  },
  {
    modalId: 'siderurgica-soldadura',
    title: 'Soldadura MIG/MAG/TIG',
    desc: 'Soldadores certificados em processos MIG, MAG e TIG para aço carbono, inox e alumínio.',
    icon: 'fa-fire',
    image: '/assets/img/servicos/soldadura-mig-mag-tig/01.jpg',
    alt: 'Soldadura MIG MAG TIG',
    modalContent: {
      images: ['/assets/img/servicos/soldadura-mig-mag-tig/01.jpg', '/assets/img/servicos/soldadura-mig-mag-tig/02.jpg', '/assets/img/servicos/soldadura-mig-mag-tig/03.jpg'],
      sections: [
        { heading: 'Processos de Soldadura', icon: 'fa-list', items: ['Soldadura MIG/MAG (GMAW) — aço carbono e inox', 'Soldadura TIG (GTAW) — inox, alumínio e titânio', 'Soldadura por arco submerso (SAW) para grandes espessuras', 'Soldadores certificados segundo EN ISO 9606', 'Procedimentos qualificados (WPS/PQR) segundo EN ISO 15614'] },
        { heading: 'Qualidade', icon: 'fa-shield-halved', items: ['Ensaios visuais, radiográficos e ultrassónicos', 'Rastreabilidade completa de consumíveis'] },
      ],
    },
  },
  {
    modalId: 'siderurgica-usinagem',
    title: 'Usinagem de Precisão',
    desc: 'Torneamento e fresagem CNC para peças e componentes com tolerâncias exigentes.',
    icon: 'fa-screwdriver-wrench',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Usinagem de precisão',
    modalContent: {
      description: 'Usinagem CNC de torneamento e fresagem para peças e componentes com tolerâncias exigentes. Equipamentos de última geração e programação CAD/CAM.',
      sections: [
        { heading: 'Capacidades', icon: 'fa-list', items: ['Torneamento CNC de pequeno e médio porte', 'Fresagem 3 e 5 eixos', 'Tolerâncias até IT7', 'Materiais: aço, inox, alumínio, ligas'] },
      ],
    },
  },
  {
    modalId: 'siderurgica-tratamentos',
    title: 'Tratamentos Superficiais',
    desc: 'Jateamento, zincagem, pintura industrial e revestimentos de proteção.',
    icon: 'fa-paint-roller',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Tratamentos superficiais',
    modalContent: {
      description: 'Jateamento abrasivo, zincagem por imersão ou eletrolítica, pintura industrial e revestimentos de proteção anticorrosiva.',
      sections: [
        { heading: 'Processos', icon: 'fa-list', items: ['Jateamento com granalha ou corindo', 'Zincagem por imersão a quente', 'Pintura em pó e líquida', 'Revestimentos epóxi e poliuretano'] },
      ],
    },
  },
  {
    modalId: 'siderurgica-estruturas',
    title: 'Estruturas Metálicas',
    desc: 'Projeto, fabricação e montagem de estruturas em aço para indústria siderúrgica.',
    icon: 'fa-industry',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Estruturas metálicas',
    modalContent: {
      description: 'Projeto, fabricação e montagem de estruturas em aço para a indústria siderúrgica. Do desenho à instalação no local.',
      sections: [
        { heading: 'Serviços', icon: 'fa-list', items: ['Cálculo estrutural e dimensionamento', 'Fabricação em instalações próprias', 'Montagem com equipa própria', 'Documentação e certificação'] },
      ],
    },
  },
  {
    modalId: 'siderurgica-tubos',
    title: 'Tubos e Perfis',
    desc: 'Corte, conformação e soldadura de tubos e perfis em aço carbono e inox.',
    icon: 'fa-pipe',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Tubos e perfis',
    modalContent: {
      description: 'Corte, conformação e soldadura de tubos e perfis em aço carbono e inox. Linhas de tubagem e estruturas em perfil.',
      sections: [
        { heading: 'Capacidades', icon: 'fa-list', items: ['Corte e maquinagem de tubos', 'Dobra de tubos e perfis', 'Soldadura de tubos e conexões', 'Perfis laminados e soldados'] },
      ],
    },
  },
  {
    modalId: 'siderurgica-qualidade',
    title: 'Controlo de Qualidade',
    desc: 'Ensaios visuais, dimensional e rastreabilidade do material ao produto acabado.',
    icon: 'fa-magnifying-glass',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Controlo de qualidade',
    modalContent: {
      description: 'Ensaios visuais, dimensional e rastreabilidade completa do material ao produto acabado. Relatórios e certificados.',
      sections: [
        { heading: 'Ensaios', icon: 'fa-list', items: ['Inspeção visual e dimensional', 'Ensaio de dureza', 'Rastreabilidade de materiais', 'Relatórios de conformidade'] },
      ],
    },
  },
  {
    modalId: 'siderurgica-rastreabilidade',
    title: 'Rastreabilidade',
    desc: 'Documentação e certificação desde o material bruto até à entrega final.',
    icon: 'fa-clipboard-check',
    image: '/assets/img/servicos/placeholder.jpg',
    alt: 'Rastreabilidade',
    modalContent: {
      description: 'Documentação e certificação desde o material bruto até à entrega final. Dossiês técnicos e declarações de conformidade.',
      sections: [
        { heading: 'Documentação', icon: 'fa-list', items: ['Certificados de material (3.1, 3.2)', 'Registos de soldadura', 'Relatórios de ensaio', 'Dossiê de fabricação'] },
      ],
    },
  },
];

export default function ServicoSiderurgica() {
  return (
    <ServiceAreaLayout
      sectionLabel="Siderúrgica"
      title="Fabricação Metálica e Siderúrgica"
      subtitle="Instalações equipadas com tecnologia CNC de última geração para corte, conformação e soldadura de alta precisão. Cada peça é rastreada do material bruto ao produto acabado — para grandes indústrias e empresas de menor dimensão."
      cards={CARDS}
    />
  );
}
