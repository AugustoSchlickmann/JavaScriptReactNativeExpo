export default class Cobit {
  principios() {
    let principios = [
      {
        tipo: "Estrutural",
        nome: "Baseado em um modelo conceitual",
        descricao:
          "Uma estrutura de governança deve ser baseada em um modelo conceitual identificando os principais componentes e relacionamentos entre os componentes,  para maximizar a consistência e permitir a automação.",
      },

      {
        tipo: "Estrutural",
        nome: "Aberto e Flexível",
        descricao:
          "Uma estrutura de governança deve ser aberta e flexível. Deve permitir a adição de novos conteúdos e a capacidade de abordar novos problemas da maneira mais flexível,  mantendo a integridade e consistência.",
      },

      {
        tipo: "Estrutural",
        nome: "Alinhado a Grandes Padrões",
        descricao:
          "Uma estrutura de governança deve estar alinhada aos principais padrões, estruturas e regulamentos relevantes.",
      },

      {
        tipo: "Sistema de Governança",
        nome: "Prover valor para as partes interessadas",
        descricao:
          "Cada empresa precisa de um sistema de governança para satisfazer as necessidades das partes interessadas e gerar valor a partir do uso de TI. Prover valor consiste emequilibrar a realização de benefícios, otimização de riscos e otimização de recursos, além disso as empresas precisam de uma estratégia acionável e de um sistema de governança para concretizar esse valor.",
      },

      {
        tipo: "Sistema de Governança",
        nome: "Abordagem holística",
        descricao:
          "O sistema de governança para TI corporativa é construído a partir de componentes que podem ser de diferentes tipos e que trabalham juntos de uma maneira holística.",
      },

      {
        tipo: "Sistema de Governança",
        nome: "Sistema de Governança Dinâmico",
        descricao:
          "Cada vez que um ou mais dos fatores de design são alterados, o impacto dessas mudanças no sistema deve ser considerado.",
      },

      {
        tipo: "Sistema de Governança",
        nome: "Distinção entre Governança e Gestão",
        descricao:
          "Um sistema de governança deve distinguir claramente entre as atividades e estruturas de Governança e Gestão. Governança está ligada à direção, enquanto gestão está ligada à execução.",
      },

      {
        tipo: "Sistema de Governança",
        nome: "Adaptado às necessidades da empresa",
        descricao:
          "Um sistema de Governança deve ser adaptado às necessidades da empresa, usandoum conjunto de fatores de projeto como parâmetros para personalizar e priorizar os componentes do Sistema de Governança.",
      },

      {
        tipo: "Sistema de Governança",
        nome: "Sistema de governança de ponta a ponta",
        descricao:
          "Um sistema de governança deve abranger a empresa de ponta a ponta, focando não somente na função de TI, mas em toda a tecnologia e processamento de informações que a empresa utiliza para atingir seus objetivos, independentemente de onde o processamento esteja localizado na empresa.",
      },
    ];

    return principios;
  }

  componentes() {
    let componentes = [
      {
        nome: "Processos",
        descricao:
          "Um conjunto de práticas e atividades para atingir um determinado objetivo ou produzir um resultado específico",
      },
      {
        nome: "Estruturas Organizacioanais",
        descricao:
          "Entidades, comitês, grupos que tomam decisões na organização. Entidades-chave no processo decisório em uma organização.",
      },
      {
        nome: "Princípios, Políticas e Frameworks",
        descricao: "Traduzem comportamentos desejados em ações do dia-a-dia.",
      },
      {
        nome: "Informação",
        descricao:
          "Inclui toda informação que é produzida e utilizada na organização. O COBIT concentra seu foco nas informações necessárias para o efetivo funcionamento do sistema de governança de I&T.",
      },
      {
        nome: "Cultura, Ética e Comportamento",
        descricao:
          "Incluindo os indivíduos e a própria organização. Cultura, ética e comportamento dos indivíduos e da organização são, frequentemente, fatores subestimados para o sucesso das atividades de governança e gestão.",
      },
      {
        nome: "Pessoas, Habilidades e Competências",
        descricao:
          "São necessários para a boa tomada de decisão e execução de ações corretivas e a conclusão bem-sucedida de todas as atividades.",
      },
      {
        nome: "Serviços, Infraestrutura e Aplicações",
        descricao: "Tecnologias que realizam o processamento da informação.",
      },
    ];
    return componentes;
  }

  fatoresdeprojeto() {
    let fatores = [
      {
        nome: "Estratégia Organizacional",
        descricao:
          "O que a empresa visa \nCrescimento/Aquisição \nInovação/Diferenciação \nLiderança em Custo \nEstabilidade.",
        descricaoDetalhada:
          "As organizações podem ter diferentes estratégias, as quais podem ser expressas por meio de um ou mais arquétipos: Crescimento/Aquisição, Inovação/Diferenciação, Liderança em Custo, e Serviço ao Cliente/Estabilidade. Normalmente as organizações possuem uma estratégia primária e, na maioria dos casos, uma estratégia secundária. Devem ser definidos níveis de importância (1 a 5) para cada um dos 4 arquétipos",
      },
      {
        nome: "Objetivos Organizacionais",
        descricao:
          "São o desdobramento da Estratégia organizacional. \n\nDimensões do BSC:\n\n4 Financeiras\n3 Cliente\n4 Internas\n2 Crescimento",
        descricaoDetalhada:
          "A estratégia organizacional é concretizada pelo alcance de (um conjunto de) objetivos organizacionais. Esses objetivos estão definidos na estrutura do COBIT, modelados nas dimensões do Balanced Scorecard (BSC). Devem ser definidos níveis de importância (1 a 5) para cada um dos 13 objetivos.",
      },
      {
        nome: "Perfil de Risco",
        descricao:
          "Identifica os 19 tipos de risco aos quais a organização está exposta",
        descricaoDetalhada:
          "É um conjunto de riscos ao qual a organização está exposta e mostra quais áreas de risco estão excedendo o apetite de riscos da organização\n\nO perfil de risco consiste na avaliação da probabilidade e do impacto de cada categoria de cenário de risco. São 19 categorias de cenários de risco, cobrindo os principais tipos de risco que afetam as organizações",
      },
      {
        nome: "Problemas relacionados à TI",
        descricao:
          "Quando os riscos se materializam (A-T)\n\nDevem ser definidos níveis de severidade (1 a 3) para cada um dos pontos de dor.",
        descricaoDetalhada:
          "O risco é uma incerteza que pode acontecer, caso esse risco se materialize ele se torna um problema que efetivamente ocorreu.\n\n O fator de projeto Problemas relacionados a I&T consiste em uma lista de problemas para que a empresa considere quais questões ela enfrenta atualmente, ou, em outras palavras, quais riscos relacionados a I&T se materializaram",
      },
      {
        nome: "Cenário de Ameaças",
        descricao:
          "O cenário de ameaças ou panorama de ameaças são as ameaças que a organização está exposta no mercado em que atua.\n\n Há basicamente dois cenários: normal ou alto",
        descricaoDetalhada:
          "Devem ser definidos percentuais para cada uma das classes, observando que o total deve dar exatamente 100%.\n\n Normal: A organização está operando sob níveis de ameaça considerado normais.\n\n Alto: Devido a situação geopolítica, setor industrial ou perfil especifico, a organização está operando em níveis altos de ameaça.",
      },
      {
        nome: "Requisitos de Conformidade",
        descricao:
          "Compliance aponta os requisitos aos quais a organização está sujeita.\n\nEsses requisitos são compostos de leis, regulamentos e outros",
        descricaoDetalhada:
          "Requisitos de Conformidade Baixos:\nA organização está sujeita a um conjunto mínimo de requisitos de conformidade, mais baixos do que a média.\n\nRequisitos de Conformidade Normais:\nA organização está sujeita a um conjunto de requisitos de conformidade que são comuns em vários setores.\n\nRequisitos de Conformidade Altos:\nA organização está sujeita a um conjunto de requisitos de conformidade mais altos do que a média, geralmente relacionados ao setor de indústria ou condições geopolíticas",
      },
      {
        nome: "Papel da TI",
        descricao:
          "Como a áre de TI é vista dentro da Organização\n\n►Suporte\n►Fábrica\n►Invoção\n►Estratégia.",
        descricaoDetalhada:
          "Suporte:\nA TI não é crucial para a execução e continuidade dos processos e serviços de negócios, nem para sua inovação aqui a TI é de o papel mais básico de todos\n\nFábrica:\nNeste papel a TI não é crucial ou inovadora, ela apenas entrega softwares, sistemas ou aplicações.\nQuando a TI falha, há um impacto imediato na execução e continuidade dos processos de negócios e serviços. No entanto, a TI não é vista como um impulsionador para inovar processos e serviços de negócios\n\nInovação:\n A TI é vista como um direcionador para inovar processos e serviços de negócios.\nA TI impulsiona inovações dentro da organização. No entanto, não há uma dependência crítica da TI para a execução e continuidade dos processos de negócios e serviços, portanto ela não é crucial para rodar projetos e serviços\n\nEstratégica:\n A TI é essencial ou crítica tanto para a execução quanto para inovação dos processos e serviços de negócios da organização.",
      },
      {
        nome: "Modelo de Provimento (Terceirização) de TI",
        descricao:
          "Como a área da TI terceiriza alguma de suas atividades e faz parceirias\n\n Outsourcing\nNuvem\nInsourced\nHíbrido",
        descricaoDetalhada: " ",
      },
      {
        nome: "Métodos de Implementação",
        descricao:
          "Define qual método é utilizado pela organização na área de TI\n\n→ Ágil\n→ DevOps\n→ Tradicional (Cascata)\n→ Hybrid",
      },
      {
        nome: "Estratégia de Adoção de Tecnologia",
        descricao:
          "As estratégias de adoção de tecnologias definem quão rápido a área de TI adota novas tecnologias.\n\n↑ Fisrt Mover\n↕ Follower\n↓ Slower Adopter",
      },
      {
        nome: "Tamanho da Organização",
        descricao:
          "Tamanho da organização define como o tamanho da organização afeta a governança.\n\nGrande:\nMais de 250 funcionários em tempo integral.\n\nPequenas e Médias:\n 50 a 250 funcionários em tempo integral.",
      },
    ];
    return fatores;
  }

  objetivos() {
    let objetivos = [
      //ADM
      {
        tipo: "Avaliar Dirigir Monitorar",
        nome: "Garantir a Definição e Manutenção do Modelo de Governança",
        descricao:
          "Fornecer ou estabelecer uma abordagem consistente, integrada e alinhada com a abordagem de governança corporativa. As decisões relacionadas à I&T devem ser tomadas em consonância com as estratégias e os objetivosdo negócio para que o valor desejado seja realizado.\n\n Para tanto, deve ser garantido que os processos relacionados à I&T sejam supervisionados de forma efetiva e transparente; que o cumprimento dos requisitos legais, contratuais e regulatórios sejam realizados; e que os requisitos de governança para os membros do conselho sejam atendidos.",
      },
      {
        tipo: "Avaliar Dirigir Monitorar",
        nome: "Garantir a Realização de Benefícios",
        descricao:
          "Garantir o melhor valor das iniciativas, serviços e ativos habilitados por I&T; entrega econômica de soluções e serviços. Assegurar uma imagem confiável e precisa dos custos e prováveis benefícios para que as necessidades dos negócios sejam suportadas de forma efetiva e eficiente.",
      },
      {
        tipo: "Avaliar Dirigir Monitorar",
        nome: "Garantir a Otimização de Riscos",
        descricao:
          "Garantir que o risco corporativo relacionado à I&T não exceda o apetite e a tolerância ao risco da organização. O impacto do risco de I&T para o valor da organização é identificado e gerenciado, e o potencial de falhas de conformidade é minimizado",
      },
      {
        tipo: "Avaliar Dirigir Monitorar",
        nome: "Garantir a Otimização de Recursos",
        descricao:
          "Garantir que as necessidades de recursos da organização sejam atendidas da maneira ideal, que os custos de I&T sejam otimizados e que haja um aumento da probabilidade de realização de benefícios e prontidão para mudanças futuras.",
      },

      {
        tipo: "Avaliar Dirigir Monitorar",
        nome: "Garantir a Transparência para as Partes Interessadas",
        descricao:
          "Garantir que as partes interessadas apoiem a estratégia de I&T, que acomunicação com as partes interessadas seja eficaz e oportuna, e que a base para relatórios seja estabelecida a fim de melhorar o desempenho. Identificar áreas para melhorias e confirmar que os objetivos e estratégias de I&T estejam em consonância com a estratégia da organização.",
      },

      //APO
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar a Estrutura de Gestão de TI",
        descricao:
          "Implementar uma abordagem de gestão consistente para que os requisitos de governança sejam atendidos, abrangendo todos os Componentes da Governança",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Estratégia",
        descricao:
          "Apoiar a estratégia de transformação digital da organização e entregar o valor desejado através de um roteiro incremental de mudanças",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Arquitetura",
        descricao:
          "Representar os diferentes blocos de construção que compõem a empresa e suas inter-relações",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Inovação",
        descricao:
          "Obter vantagem competitiva, inovação nos negócios, experiência do clienteaprimorada e eficácia e eficiência operacional aprimoradas, explorando desenvolvimentos de TI e tecnologias emergentes",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Portifólio",
        descricao:
          "Otimizar o desempenho do portfólio global de programas e projetos em resposta ao desempenho individual de programas, projetos, serviços e mudança de prioridades das demandas organizacionais",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Orçamento e Custos",
        descricao:
          "Promover uma parceria entre a TI e as partes interessadas da empresa para permitir o uso eficaz e eficiente dos recursos relacionados à TI e fornecer transparência e responsabilidade sobre o custo e o valor comercial de soluções e serviços. Permitir que a empresa tome decisões fundamentadas sobre o uso de soluções e serviços de TI",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Recursos Humanos",
        descricao:
          "Otimizar os recursos de recursos humanos para atender aos objetivos da empresa.",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Relacionamentos",
        descricao:
          "Criar melhores resultados, maior confiança, confiança mútua e uso eficaz de recursos que estimulam um relacionamento produtivo com as partes interessadas do negócio.",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Contratos",
        descricao:
          "Garantir que os produtos, serviços e níveis de serviço de TI atendam às necessidades atuais e futuras da empresa.",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Fornecedores",
        descricao:
          "Minimizar o risco associado a fornecedores com desempenho incorreto ou não conformes e garantir preços justos e competitivos. ",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Qualidade",
        descricao:
          "Garantir a entrega consistente de soluções e serviços de tecnologia para atender aos requisitos de qualidade da empresa e satisfazer as necessidades das partes interessadas.",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Riscos",
        descricao:
          "Integrar o gerenciamento de riscos corporativos relacionados a TI com o gerenciamento geral de riscos corporativos e equilibrar os custos e benefícios do gerenciamento de riscos corporativos relacionados a TI",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Segurança",
        descricao:
          "CID Manter o impacto e a ocorrência de incidentes de segurança da informação dentro dos níveis de apetite de risco da empresa.",
      },
      {
        tipo: "Alinhar Planejar Organizar",
        nome: "Gerenciar Dados",
        descricao:
          "Garantir a utilização eficaz dos ativos de dados críticos para atingir as metas e objetivos da empresa.",
      },

      //CAI BAI
      {
        tipo: "Construir Adquirir Implementar",
        nome: "Gerenciar Programas",
        descricao:
          "Obter o valor de negócio desejado e reduzir o risco de atrasos inesperados, custos e erosão de valor. Para isso, melhorar a comunicação e o envolvimento dos negócios e usuários finais, garantindo o valor e a qualidade dos resultados do programa e o acompanhamento dos projetos dentro dos programas e maximizando a contribuição do programa para a carteira de investimentos",
      },
      {
        tipo: "Construir Adquirir Implementar",
        nome: "Gerenciar Requisitos",
        descricao:
          "Criar soluçoes otimizadas e que atendam às necessidades da Organização",
      },
      {
        tipo: "Construir Adquirir Implementar",
        nome: "Gerenciar Identificação e Desenvolvimento de Soluçoes",
        descricao:
          "Garantir a entrega ágil e escalonável de produtos e serviços digitais.\n\nEstabelecer soluções oportunas e econômicas capazes de apoiar os objetivos estratégicos e operacionais da empresa",
      },
      {
        tipo: "Construir Adquirir Implementar",
        nome: "Gerenciar Disponibilidade e Capacidade",
        descricao:
          "Manter a disponibilidade do serviço, gerenciamento eficiente de recursos e otimização do desempenho do sistema por meio da previsão de desempenho futuro e requisitos de capacidade",
      },
      {
        tipo: "Construir Adquirir Implementar",
        nome: "Gerenciar Mudança Organizacional",
        descricao:
          "Preparar e comprometer as partes interessadas para mudanças nos negócios e reduzir o risco de fracasso",
      },
      {
        tipo: "Construir Adquirir Implementar",
        nome: "Gerenciar Mudanças de TI",
        descricao:
          "Permitir a entrega rápida e confiável de mudanças para a empresa. Mitigar o risco de impactar negativamente a estabilidade ou integridade do ambiente alterado.",
      },
      {
        tipo: "Construir Adquirir Implementar",
        nome: "Gerenciar Aceitação e Transição de Mudança de TI",
        descricao:
          "Implementar soluções com segurança e em linha com as expectativas e resultados acordados.",
      },
      {
        tipo: "Construir Adquirir Implementar",
        nome: "Gerenciar Conhecimento",
        descricao:
          "Fornecer o conhecimento e as informações de gerenciamento necessárias para apoiar toda a equipe na governança e gerenciamento de TI corporativa e permitir a tomada de decisões fundamentadas",
      },
      {
        tipo: "Construir Adquirir Implementar",
        nome: "Gerenciar Ativos",
        descricao:
          "Considerar todos os ativos de TI e otimizar o valor fornecido por seu uso",
      },
      {
        tipo: "Construir Adquirir Implementar",
        nome: "Gerenciar Configuração",
        descricao:
          "Fornecer informações suficientes sobre os ativos do serviço para permitir que o serviço seja gerenciado com eficácia. Avaliar o impacto das mudanças e lidar com os incidentes de serviço.",
      },
      {
        tipo: "Construir Adquirir Implementar",
        nome: "Gerenciar Projetos",
        descricao:
          "Realizar projetos dentro dos custos prazos e valores.\n\n Garantir o valor e a qualidade dos resultados do projeto e maximizar sua contribuição para os programas definidos e a carteira de investimentos",
      },

      //ESS DSS
      {
        tipo: "Entregar Servir Suportar",
        nome: "Gerenciar Operações",
        descricao:
          "Treinar e Educar Usuários\n\nEntregar produtos operacionais de TI e resultados de serviço conforme planejado.",
      },
      {
        tipo: "Entregar Servir Suportar",
        nome: "Gerenciar Requisiçoes de Serviços e Incidentes",
        descricao:
          "Aumentar a produtividade e minimizar as interrupções por meio da resoluçãorápida de dúvidas e incidentes do usuário. Avaliar o impacto das mudanças e lidar com os incidentes de serviço. Resolver as solicitações do usuário e restaurar o serviço em resposta a incidentes.",
      },
      {
        tipo: "Entregar Servir Suportar",
        nome: "Gerenciar Problemas",
        descricao:
          "Aumentar a disponibilidade, melhorar os níveis de serviço, reduzir custos,melhorar a conveniência e satisfação do cliente reduzindo o número de problemas operacionais e identificando as causas raiz da resolução de problemas",
      },
      {
        tipo: "Entregar Servir Suportar",
        nome: "Gerenciar Continuidade",
        descricao:
          "Continuar as operações de negócios e manter a disponibilidade de recursos e informações em um nível aceitável para a empresa no caso de uma interrupção significativa ",
      },
      {
        tipo: "Entregar Servir Suportar",
        nome: "Gerenciar Serviços de Segurança",
        descricao:
          "Minimizar o impacto comercial das vulnerabilidades e incidentes de segurança da informação operacional.",
      },
      {
        tipo: "Entregar Servir Suportar",
        nome: "Gerenciar Controles de Processo de Negócio",
        descricao: "Manter a integridade das informações e a segurança dos ativos de informações manipulados nos processos de negócios na empresa ou em suas operações terceirizadas.",
      },

      //MAM MEA
      {
        tipo: "Monitorar Avaliar Medir",
        nome: "Gerenciar Monitoramento do Desempenho e da Conformidade",
        descricao: "Fornecer transparência de desempenho e conformidade e estimular o cumprimento de metas.",
      },
      {
        tipo: "Monitorar Avaliar Medir",
        nome: "Gerenciar o Sistema de Controle Interno",
        descricao: "Obter transparência para as principais partes interessadas sobre a adequaçãodo sistema de controles internos e, assim, proporcionar confiança nas operações, confiança no cumprimento dos objetivos da empresa e um entendimento adequado do risco residual.",
      },
      {
        tipo: "Monitorar Avaliar Medir",
        nome: "Gerenciar Conformidade com Requisitos Externos",
        descricao: "Certificar-se de que a empresa está em conformidade com todos os requisitos externos aplicáveis",
      },
      {
        tipo: "Monitorar Avaliar Medir",
        nome: "Gerenciar Garantia",
        descricao: "Capacitar a organização a projetar e desenvolver iniciativas de garantia eficientes e eficazes, fornecendo orientação sobre planejamento, definição do escopo, execução e acompanhamento das revisões de garantia, usando um roteiro baseado em abordagens de garantia bem aceitas.",
      },
    ];
    return objetivos;
  }

  capacidade(){
    let capacidades = [
      {
        nome:"Nível 0",
        descricao:"O processo não tem nenhuma capacidade básica e não atinge seu propósito.",

      },
      {
        nome:"Nível 1",
        descricao:"O processo atinge seu propósito de maneira não muito organizada, com atividades incompleta",

      },
      {
        nome:"Nível 2",
        descricao:"O processo atinge seu propósito com atividades básicas, porém completas. É considerado Executado.",

      },
      {
        nome:"Nível 3",
        descricao:"O processo atinge seu propósito utilizando ativos organizacionais. É considerado definido",

      },
      {
        nome:"Nível 4",
        descricao:"O precesso atinge seu propósito e é quantitativamente mensurado",

      },
      {
        nome:"Nível 5",
        descricao:"O processo atinge seu propósito e recebe melhorias",

      },
    ]
    return capacidades;
  }

  maturidade(){
    let maturidades = [
      {
        nome:"Nível 0",
        descricao:"Incompleto\n\n o trabalho ainda não está completo para alcançar os objetivos da área focal.",

      },
      {
        nome:"Nível 1",
        descricao:"Inicial\n\n o trabalho está completo, mas a totalidade dos objetivos da área focalainda não foi alcançada ",

      },
      {
        nome:"Nível 2",
        descricao:"Gerenciado\n\n planejamento e medições de desempenho, mas ainda de uma maneira não padronizada.",

      },
      {
        nome:"Nível 3",
        descricao:"Definido\n\npadrões da organização guiam o trabalho",

      },
      {
        nome:"Nível 4",
        descricao:"Quantitativo\n\nmelhorias de desempenho quantitativas ",

      },
      {
        nome:"Nível 5",
        descricao:"Em otimização\n\na organização é focada em melhorias contínuas",

      },
    ]
    return maturidades;
  }
}
