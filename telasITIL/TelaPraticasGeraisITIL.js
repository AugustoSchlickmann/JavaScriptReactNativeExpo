import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function TelaPraticasGeraisITIL() {
  return (
    <ScrollView
      backgroundColor="white"
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Arquitetura</Text>
        <Text style={styles.sectionDescription}>
          Propicia o entendimento de todos os diferentes elementos que compõem
          uma organização e do modo como esses elementos se relacionam entre si
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Portfólio</Text>
        <Text style={styles.sectionDescription}>
          Garante a uma organização a combinação certa de programas, projetos,
          produtos e serviços para executar sua estratégia dentro de suas
          restrições de orçamento e de recursos. Inclui:
        </Text>

        <View style={styles.linha}></View>
        <Text style={styles.sectionDescription}>
          Portfólio de Produtos/Serviços;
        </Text>
        <View style={styles.linha}></View>
        <Text style={styles.sectionDescription}>Portfólio de Projetos;</Text>
        <View style={styles.linha}></View>
        <Text style={styles.sectionDescription}> Portfólio de Clientes.</Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Estratégia</Text>
        <Text style={styles.sectionDescription}>
          Formulação das metas de uma organização, adoção dos cursos de ação e
          alocação de recursos necessários para atingir essas metas. Estabelece
          o direcionamento da organização, as prioridades, a alocação de
          recursos, e orientações consistentes em resposta ao ambiente
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Projetos</Text>
        <Text style={styles.sectionDescription}>
          Garante que todos os projetos de uma organização sejam entregues a
          contento, ou seja, com sucesso.{"\n"}
          {"\n"}A ITIL aborda dois modos diferentes de gerenciar projetos:
          Cascata e Ágil
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Financeiro</Text>
        <Text style={styles.sectionDescription}>
          Linguagem comum que possibilita a organização conversar com seus
          stakeholders{"\n"}
          Apoiar as estratégias e planos de gerenciamento de serviços uma
          organização garantindo que seus recursos e investimentos financeiros
          estejam sendo usados com eficácia{"\n"}A gestão financeira realiza as
          seguintes atividades nesta prática:{"\n"}
          {"\n"} Orçamentação; {"\n"}Contabilização;{"\n"}
          Cobrança.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Relacionamento</Text>
        <Text style={styles.sectionDescription}>
          Estabelece e reforça vínculos entre uma organização e as respectivas
          partes interessadas em níveis estratégicos e táticos.{"\n"}
          {"\n"} Inclui a identificação de stakeholders, o monitoramento da
          relação e a melhoria contínua do relacionamento. {"\n"}Ela assegura
          que: {"\n"}
          {"\n"}• As necessidades dos stakeholders são conhecidas;{"\n"} • Os
          serviços são priorizados corretamente; {"\n"}• Existe alta satisfação
          de clientes;{"\n"} • Reclamações em nível tático e/ou estratégico são
          gerenciadas corretamente;{"\n"} • Conflitos entre stakeholders são
          mediados apropriadamente.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Fornecedores</Text>
        <Text style={styles.sectionDescription}>
          Garante que os fornecedores de uma organização e seus níveis de
          desempenho são gerenciados adequadamente para oferecer suporte a
          produtos e serviços de qualidade contínua.{"\n"} Além disso cria
          relacionamentos mais próximos e colaborativos com fornecedores-chave
          para reduzir o risco de falha.{"\n"}
          {"\n"}• Insourcing: Produtos e serviços são entregues internamente
          pela organização. {"\n"}
          {"\n"}• Outsourcing Produtos e serviços são entregues por um
          fornecedor externo. {"\n"}
          {"\n"}• Single Source ou Partnership (Parceria): Aquisição de produtos
          ou serviços de um único fornecedor. Tem como vantagem confiabilidade e
          cooperação. {"\n"}
          {"\n"}• Multi-Sourcing: Aquisição de produtos ou serviços de vários
          fornecedores independentes. Tem como vantagem a especialização
          (escolher o melhor fornecedor dentre várias opções).
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Mudança Organizacional</Text>
        <Text style={styles.sectionDescription}>
          Garante que as mudanças em uma organização sejam implementadas de
          maneira contínua e bem-sucedida visando à obtenção de benefícios
          duradouros por meio do gerenciamento dos aspectos humanos dessas
          mudanças, removendo resistências, eliminando impactos adversos e
          provendo treinamento e conscientização.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Conhecimento</Text>
        <Text style={styles.sectionDescription}>
          Prática que mantém e aprimora o uso eficaz, eficiente e conveniente da
          informação e do conhecimento no âmbito de uma organização.{"\n"}
          {"\n"}
          Assegura que os stakeholders têm a informação certa, no formato
          correto, no nível adequado, e no tempo exato de acordo com a
          necessidade de cada um.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Força de Trabalho e Talentos</Text>
        <Text style={styles.sectionDescription}>
          Prática que garante que uma organização tenha as pessoas certas com as
          habilidades e o conhecimento adequados nos papéis corretos para
          suportar seus objetivos de negócio. {"\n"}Inclui atividades de
          planejamento, recrutamento, treinamento, avaliação de desempenho, etc.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Risco</Text>
        <Text style={styles.sectionDescription}>
          Garante a uma organização a compreensão e o tratamento eficaz dos
          riscos. {"\n"}
          {"\n"}Risco é um possível evento que pode causar perdas ou danos, ou
          dificultar o atingimento de objetivos. Também pode ser apenas uma
          incerteza, com probabilidade de resultados positivos ou negativos.
          {"\n"}
          {"\n"}As principais atividades do gerenciamento de riscos são três:
        </Text>
        <View style={styles.linha}></View>
        <Text style={styles.sectionDescription}>
          Identificar: As incertezas devem ser identificadas e descritas, para
          entender o seu significado.
        </Text>
        <View style={styles.linha}></View>
        <Text style={styles.sectionDescription}>
          Avaliar: Estimar probabilidade, impacto e tendência de cada risco.
        </Text>
        <View style={styles.linha}></View>
        <Text style={styles.sectionDescription}>
          Tratar: Planejar respostas aos riscos, implementar e monitorar as
          ações
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Segurança da Informação</Text>
        <Text style={styles.sectionDescription}>
          Prática que visa proteger as informações necessárias para a
          organização conduzir seus negócios. Assim como gerenciar os riscos de
          confidencialidade, integridade e disponibilidade de informação além de
          garantir a autenticidade e não-repúdio de transações. {"\n"} {"\n"}A
          segurança necessária é alcançada por meio de políticas, processos,
          comportamentos, gestão de riscos e controles. É necessário manter um
          equilíbrio entre:
        </Text>
        <View style={styles.linha}></View>
        <Text style={styles.sectionDescription}>
          • Prevenção: garantir que um incidente de segurança não ocorra
        </Text>
        <View style={styles.linha}></View>
        <Text style={styles.sectionDescription}>
          • Detecção: detectar um incidente de segurança que não foi prevenido.
        </Text>
        <View style={styles.linha}></View>
        <Text style={styles.sectionDescription}>
          • Correção: recuperar-se de incidentes de segurança após sua
          ocorrência.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Medição e Relatórios</Text>
        <Text style={styles.sectionDescription}>
          Prática que apoia a tomada de decisão e melhoria contínua por meio da
          diminuição de incertezas. Alcançado por meio da coleta de dados
          relevantes seguida de sua avaliação em determinados contextos.{"\n"}
          {"\n"}• Fator Crítico de Sucesso (CSF): Uma precondição necessária
          para o atingimento de resultados esperados.{"\n"}
          {"\n"}• Indicador Chave de Desempenho (KPI): Uma métrica importante
          para avaliar a probabilidade de se atingir um resultado esperado.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Melhoria Contínua</Text>
        <Text style={styles.sectionDescription}>
          Alinhar as práticas e serviços da organização às necessidades de
          negócio em constante mudança.{"\n"}
          {"\n"} Melhorar Produtos, Serviços, Práticas ou qualquer elemento
          envolvido no gerenciamento de serviços.{"\n"}
          {"\n"} São exemplos de atividades típicas da prática melhoria
          contínua:{"\n"}
          {"\n"} • Identificar oportunidades de melhoria; {"\n"}• Fazer um plano
          para a implementação de melhorias; {"\n"}• Medir e avaliar os
          resultados de melhoria; {"\n"}• Coordenar atividades de melhoria na
          organização.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  purple: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginTop: 4,
  },
  sectionDescription: {
    marginTop: 4,
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  caixa: {
    borderRadius: 30,
    marginHorizontal: 5,
    paddingBottom: 10,
    marginVertical: 10,
  },
  linha: {
    height: 1,
    backgroundColor: "black",
    marginVertical: 5,
  },
});
