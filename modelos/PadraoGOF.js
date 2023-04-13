class PadraoGOF {
 
  constructor(nome, descricao, palavrachave) {
    this.nome = nome;
    this.descricao = descricao;
    this.palavrachave = palavrachave;
  }
  
 
 criarPadroes() {
  let lista = [
    {
      nome: "Singleton",
      descricao:
        "Esse padrão garante que uma classe tenha apenas uma instância e provê um ponto de acesso global a ela.",
      palavrachave: "Unico Global",
    },

    {
      nome: "Builder",
      descricao:
        "Esse padrão separa a construção de um objeto complexo da sua representação, de forma que o mesmo processo de construção possa criar diferentes tipos de representações.",
      palavrachave: "Criar objeto complexo",
    },

    {
      nome: "Prototype",
      descricao:
        "Esse padrão especifica os tipos de objetos para criar usando uma instância como protótipo e cria novos objetos copiando este protótipo. ",
      palavrachave: "Criar uma instância prototípica .clone()",
    },

    {
      nome: "Factory Method",
      descricao:
        "Esse padrão define uma interface para criar um objeto, mas deixa as subclasses decidirem qual classe instanciar.",
      palavrachave: "Deixar subclasses decidirem",
    },

    {
      nome: "Abstract Factory",
      descricao:
        "Esse padrão fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.",
      palavrachave: "Famílias de objetos",
    },

    {
      nome: "Adapter",
      descricao:
        "Esse padrão converte a interface de uma classe em outra interface que normalmente não poderiam trabalhar juntas por serem incompatíveis",
      palavrachave: "Conversão Incompatibilidade",
    },

    {
      nome: "Bridge",
      descricao:
        "Esse padrão desacopla uma interface de sua implementação, de forma que ambas possam variar independentemente",
      palavrachave: "Desacoplar interface da implementação",
    },

    {
      nome: "Composite",
      descricao:
        "Esse padrão compõe objetos em estruturas de árvore para representar hierarquias parte-todo permitindo aos clientes tratarem objetos individuais e composições de objetos uniformemente",
      palavrachave: "Árvore Hierarquia Parte-Todo",
    },

    {
      nome: "Decorator",
      descricao:
        "Esse padrão anexa responsabilidades adicionais a um objeto dinamicamente. Fornece uma alternativa flexível em relação à herança para estender funcionalidades. ",
      palavrachave: "Herança seria inviável, muita combinação diferente",
    },

    {
      nome: "Facade",
      descricao:
        "Esse padrão oferece uma interface unificada para um conjunto de interfaces em um subsistema, definindo uma interface de alto nível que facilita a utilização do subsistema. ",
      palavrachave: "Interface unificada",
    },

    {
      nome: "Fly Weight",
      descricao:
        "Esse padrão utiliza compartilhamento para suportar eficientemente grandes quantidades de objetos de baixa granularidade.",
      palavrachave:
        "Compartilhamento para suportar grandes quantidades de objetos.",
    },

    {
      nome: "Proxy",
      descricao:
        "Esse padrão provê um substituto ou ponto através do qual um objeto pode controlar o acesso a outro objeto.",
      palavrachave: "Prover substituto para controlar um objeto",
    },
    {
      nome: "Chain of Responsability",
      descricao:
        "Esse padrão evita o acoplamento do remetente de uma requisição ao seu receptor ao dar a mais de um objeto a chance de lidar com a requisição. ",
      palavrachave: "Evitar o acoplamento dando oportunidade a outros objetos",
    },

    {
      nome: "Command",
      descricao:
        "Esse padrão encapsula a requisição de um objeto, portanto permitindo que se parametrize os clientes com diferentes requisições. ",
      palavrachave: "Encapsula requisição de objetos",
    },

    {
      nome: "Strategy",
      descricao:
        "Esse padrão define uma família de algoritmos, encapsula cada um e faz deles intercambiáveis. ",
      palavrachave: "Família de algoritmos - Intercambiáveis",
    },

    {
      nome: "Visitor",
      descricao:
        "Esse padrão representa uma operação a ser realizada sobre elementos de uma estrutura de objetos e permite definir uma operação sem mudar as classes dos elementos sobre os quais opera.",
      palavrachave: "Operação a ser realizada sobre uma estrutura de objetos",
    },

    {
      nome: "State",
      descricao:
        "Esse padrão permite a um objeto alterar o seu comportamento quando o seu estado interno for modificado.",
      palavrachave: "Altera comportamentos quando modificar o estado interno",
    },

    {
      nome: "Interpreter",
      descricao:
        "Esse padrão, dada uma linguagem, define uma representação para sua gramática em conjunto com um interpretador que utiliza a representação para interpretar sentenças na linguagem.",
      palavrachave: "Gramática",
    },

    {
      nome: "Iterator",
      descricao:
        "Esse padrão fornece uma maneira de acessar elementos de um objeto agregado sequencialmente sem expor sua representação interna.",
      palavrachave: "Sequencialmente",
    },

    {
      nome: "Mediator",
      descricao:
        "Esse padrão define um objeto que encapsula a forma como um conjunto de objetos interagem, promovendo um fraco acoplamento ao evitar que objetos se refiram aos outros explicitamente",
      palavrachave: "Grupo Whatsapp - Chat Twitch",
    },

    {
      nome: "Observer",
      descricao:
        "Esse padrão define uma dependência um-para-muitos entre objetos para que, quando um objeto mudar de estado, os seus dependentes sejam notificados e atualizados automaticamente. ",
      palavrachave: "Notificação - 1:N",
    },

    {
      nome: "Memento",
      descricao:
        "Esse padrão captura e externaliza o estado interno de um objeto, sem violar seu encapsulamento, de maneira que o objeto possa ser restaurado posteriormente. ",
      palavrachave: "Snapshot Ctrl + z  Ctrl + y",
    },

    {
      nome: "Template Method",
      descricao:
        "Esse padrão define o esqueleto de um algoritmo dentro de uma operação, deixando alguns passos a serem preenchidos pelas subclasses. ",
      palavrachave: "Esqueleto",
    },
  ];

  return lista;
}

}

export default PadraoGOF;
