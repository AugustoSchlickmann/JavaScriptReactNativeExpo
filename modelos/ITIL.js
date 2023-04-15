export default class ITIL {
  
  listaDePraticas() {
    let praticas = [
      {
        tipo: "Gerais",
        nome: "Arquitetura",
        descricao:
          "Propicia o entendimento de todos os diferentes elementos que compõem uma organização e do modo como esses elementos se relacionam entre si",
      },
      {
        tipo: "Gerais",
        nome: "Portfólio",
        descricao:
          " Garante a uma organização a combinação certa de programas, projetos, produtos e serviços para executar sua estratégia dentro de suas restrições de orçamento e de recursos.",
      },
      {
        tipo: "Gerais",
        nome: "Estratégia",
        descricao:
          " Formulação das metas de uma organização, adoção dos cursos de ação e alocação de recursos necessários para atingir essas metas. Estabelece  o direcionamento da organização, as prioridades, a alocação derecursos, e orientações consistentes em resposta ao ambiente",
      },
      {
        tipo: "Gerais",
        nome: "Projetos",
        descricao:
          "Garante que todos os projetos de uma organização sejam entregues a  contento, ou seja, com sucesso.",
      },
      {
        tipo: "Gerais",
        nome: "Financeiro",
        descricao:
          "Linguagem comum que possibilita a organização conversar com seus stakeholders  Apoiar as estratégias e planos de gerenciamento de serviços uma  organização garantindo que seus recursos e investimentos financeiros estejam sendo usados com eficácia. Orçamentação; Contabilização; Cobrança.",
      },
      {
        tipo: "Gerais",
        nome: "Relacionamento",
        descricao:
          " Estabelece e reforça vínculos entre uma organização e as respectivas partes interessadas em níveis estratégicos e táticos.",
      },
      {
        tipo: "Gerais",
        nome: "Fornecedores",
        descricao:
          " Garante que os fornecedores de uma organização e seus níveis de desempenho são gerenciados adequadamente para oferecer suporte a produtos e serviços de qualidade contínua; • Insourcing; • Outsourcing; • Single Source; • Multi-Sourcing",
      },
      {
        tipo: "Gerais",
        nome: "Mudança Organizacional",
        descricao:
          " Garante que as mudanças em uma organização sejam implementadas de maneira contínua e bem-sucedida visando à obtenção de benefícios duradouros por meio do gerenciamento dos aspectos humanos dessasmudanças, removendo resistências, eliminando impactos adversos e provendo treinamento e conscientização.",
      },
      {
        tipo: "Gerais",
        nome: "Conhecimento",
        descricao:
          "Assegura que os stakeholders têm a informação certa, no formato correto, no nível adequado, e no tempo exato de acordo com a necessidade de cada um.",
      },
      {
        tipo: "Gerais",
        nome: "Força de Trabalho e Talentos",
        descricao:
          "Prática que garante que uma organização tenha as pessoas certas com as habilidades e o conhecimento adequados nos papéis corretos para suportar seus objetivos de negócio. Inclui atividades de planejamento, recrutamento, treinamento, avaliação de desempenho, etc.",
      },
      {
        tipo: "Gerais",
        nome: "Risco",
        descricao:
          " Garante a uma organização a compreensão e o tratamento eficaz dos riscos. Risco é um possível evento que pode causar perdas ou danos, ou dificultar o atingimento de objetivos. Também pode ser apenas uma incerteza, com probabilidade de resultados positivos ou negativos. As principais atividades do gerenciamento de riscos são três: Identificar, Avaliar, Tratar.",
      },
      {
        tipo: "Gerais",
        nome: "Segurança da Informação",
        descricao:
          "  Prática que visa proteger as informações necessárias para a organização conduzir seus negócios. Assim como gerenciar os riscos de confidencialidade, integridade e disponibilidade de informação além degarantir a autenticidade e não-repúdio de transações.",
      },
      {
        tipo: "Gerais",
        nome: "Medição e Relatórios",
        descricao:
          "Prática que apoia a tomada de decisão e melhoria contínua por meio da diminuição de incertezas. Alcançado por meio da coleta de dados relevantes seguida de sua avaliação em determinados contextos",
      },

      {
        tipo: "Gerais",
        nome: "Melhoria Contínua",
        descricao:
          "Alinhar as práticas e serviços da organização às necessidades de negócio em constante mudança.",
      },

      // SERVIÇOS

      {
        tipo: "Servicos",
        nome: "Análise de Negócio",
        descricao:
          "Analisar as necessidades de negócio e recomendar soluções pararesolver os problemas identificados e criar valor para as partes interessadas.",
      },

      {
        tipo: "Servicos",
        nome: "Projeto de Serviço",
        descricao:
          "Projetar produtos e serviços que sejam adequados ao propósito e ao uso e possam ser fornecidos pela organização e seu ecossistema. Projeta arquitetura de modo a definir como os produtos ou serviços vão funcionar para que eles possam ser entregues a contento.",
      },

      {
        tipo: "Servicos",
        nome: "Gerenciamento de Nível de Serviço",
        descricao:
          "Define metas claras e baseadas no negócio para o desempenho dosserviços, permitindo que a entrega de um serviço seja devidamente avaliada, monitorada e gerenciada com relação a essas metas",
      },

      {
        tipo: "Servicos",
        nome: "Gerenciamento de Catálogo de Serviço",
        descricao:
          " Além de propiciar uma única fonte de informação consistente sobretodos os serviços e as ofertas de serviços, garante que ela esteja disponível para o público-alvo pertinente.",
      },

      {
        tipo: "Servicos",
        nome: "Gerenciamento de Capacidade e Desempenho",
        descricao:
          " Garante que os serviços alcancem os níveis de desempenho acordados eprevistos, atendendo à demanda atual e futura de maneira eficaz em custo.",
      },

      {
        tipo: "Servicos",
        nome: "Gerenciamento de Disponibilidade",
        descricao:
          " Garante que os serviços entreguem os níveis de disponibilidade  acordados para atender às necessidades de clientes e usuários. A habilidade de um serviço de TI ou algum item de configuração de desempenhar sua função quando requerido.",
      },

      {
        tipo: "Servicos",
        nome: "Gerenciamento da Continuidade do Serviço",
        descricao:
          "Garante que os níveis de disponibilidade e de desempenho dos serviços sejam suficientes em caso de desastre.",
      },

      {
        tipo: "Servicos",
        nome: "Controle de Mudanças",
        descricao:
          " Garante que os riscos sejam devidamente avaliados, autoriza o  prosseguimento das mudanças e gerencia a calendário de mudanças para maximizar o número de mudanças bem-sucedidas de serviços e produtos. • Padrão; • Normal; • Emergencial;",
      },

      {
        tipo: "Servicos",
        nome: "Gerenciamento de Ativos de TI",
        descricao:
          "Planejamento e gerenciamento do ciclo de vida completo de todos os ativos de TI.",
      },

      {
        tipo: "Servicos",
        nome: "Gerenciamento de Configuração",
        descricao:
          " Garante que informações precisas e confiáveis sobre a configuração dos serviços e sobre os itens de configuração que suportam os serviços estejam disponíveis quando e onde necessário. Lida com a BDGC, que nada mais é do que um banco de dados para lidar com itens de configuração que estão instalados. Possui atributos como tipo, dono, versão, status, etc.",
      },

      {
        tipo: "Servicos",
        nome: "Gerenciamento de Liberações",
        descricao:
          "Prática de disponibilizar serviços e características novos e modificados para uso. Podem ocorrer em diferentes ambientes como: Tradicional ou Cascata e Ágil ou DevOps.",
      },

      {
        tipo: "Servicos",
        nome: "Monitoramento e Gerenciamento de Eventos",
        descricao:
          " Observação sistemática de serviços e componentes de serviços, e de registro e relato de determinadas mudanças de estado identificadas como eventos. Um evento é qualquer mudança de estado que tem significado para umserviço ou item de configuração. Eventos podem ser de tiposdiferentes, e normalmente são reconhecidos por meio de notificações e ferramentas de monitoramento.",
      },

      {
        tipo: "Servicos",
        nome: "Gerenciamento de Incidentes",
        descricao:
          " Minimizar o impacto negativo de incidentes restaurando a operaçãonormal do serviço o mais rápido possível. Incidente é uma interrupção não planejada a qual reduz aqualidade de um serviço. Incidentes podem ter diferentes tipos e podem ser resolvidos por diferentes grupos ou pessoas",
      },

      {
        tipo: "Servicos",
        nome: "Gerenciamento de Problemas",
        descricao:
          "Reduz a probabilidade e o impacto de incidentes por meio da identificação de suas causas reais e potenciais e do gerenciamento de soluções de contorno e erros conhecidos. Essa prática realiza a análise da causa raiz dos incidentes",
      },

      {
        tipo: "Servicos",
        nome: "Gerenciamento de Requisições de Serviço",
        descricao:
          "Suporta a qualidade acordada de um serviço por meio do tratamento de todas as requisições de serviço pré definidas e iniciadas pelos usuários de maneira eficaz e fácil de usar.",
      },

      {
        tipo: "Servicos",
        nome: "Central de Serviços",
        descricao:
          "Captura a demanda de resolução de incidentes e requisições de serviço. Ponto único de entrada e contato com os usuários dos serviços. Capturar demandas de  incidentes e requisições de serviço. Podem ser utilizadas várias tecnologias de comunicação",
      },

      {
        tipo: "Servicos",
        nome: "Validação e Testes de Serviço",
        descricao: "Garante que produtos e serviços novos ou modificados atendam aos requisitos definidos. Foca em estabelecer critérios de aceitação. Verificando as condições que devem ser realizadas em ambiente de produção.",
      },

      //TÉCNICAS

      {
        tipo: "Tecnicas",
        nome: "Desenvolvimento e Gerenciamento de Softwares",
        descricao: " Garante que os aplicativos atendam às necessidades das partes  interessadas em termos de funcionalidade, confiabilidade, capacidade de manutenção, conformidade e auditabilidade "
     },

     {
        tipo: "Tecnicas",
        nome: "Gerenciamento de Infraestrutura e Plataformas",
        descricao: "Supervisionar a infraestrutura e as plataformas usadas por umaorganização. Ela permite a monitoração das soluções de tecnologia disponíveis, incluindo as de terceiros."
     },

     {
        tipo: "Tecnicas",
        nome: "Gerenciamento de Implantação",
        descricao: "Gerencia a implantação de hardware, software, documentação, processosou qualquer outro componente de serviço novo ou alterado em ambientes de produção. • Phased; • Big Bang; • Continuous; • Pull;"
     },

    ];
    
    return praticas;
  }
}
