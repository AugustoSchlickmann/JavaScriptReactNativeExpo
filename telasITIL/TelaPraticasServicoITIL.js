import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

export default function TelaPraticasServicoITIL() {
  return (
    <ScrollView
      backgroundColor="white"
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Análise de Negócio</Text>
        <Text style={styles.sectionDescription}>
          Analisar as necessidades de negócio e recomendar soluções para
          resolver os problemas identificados e criar valor para as partes
          interessadas.{"\n"}
          {"\n"}A análise de negócio pode ser focada em Requisitos de Utilidade
          ou Garantia.{"\n"}
          {"\n"} Requisitos de Utilidade são tipicamente funcionais e foram
          definidos pelo cliente além de ser únicos para um determinado produto.
          Os requisitos de utilidade definem para que o serviço serve.
          {"\n"}
          {"\n"} Requisitos de Garantia são tipicamente não-funcionais e
          geralmente atrelados a critérios de aceitação. Podem ser restrições,
          características.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Projeto de Serviço</Text>
        <Text style={styles.sectionDescription}>
          Projetar produtos e serviços que sejam adequados ao propósito e ao uso
          e possam ser fornecidos pela organização e seu ecossistema.{"\n"}
          {"\n"}
          Projeta arquitetura de modo a definir como os produtos ou serviços vão
          funcionar para que eles possam ser entregues a contento.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Gerenciamento de Nível de Serviço</Text>
        <Text style={styles.sectionDescription}>
          Define metas claras e baseadas no negócio para o desempenho dos
          serviços, permitindo que a entrega de um serviço seja devidamente
          avaliada, monitorada e gerenciada com relação a essas metas.{"\n"}
          {"\n"}É um nível quase operacional estabelecendo metas de negócio para
          os níveis de serviço como desempenho, disponibilidade, segurança,
          tempo de resposta, etc.
          {"\n"}
          {"\n"} • Nível de Serviço: Uma métrica que define a qualidade de
          serviço esperada.
          {"\n"}
          {"\n"} • Acordo de Nível de Serviço (SLA): Um acordo documentado entre
          o provedor e o cliente que identifica os serviços entregues e seus
          respectivos níveis.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Gerenciamento de Catálogo de Serviço</Text>
        <Text style={styles.sectionDescription}>
          Além de propiciar uma única fonte de informação consistente sobre
          todos os serviços e as ofertas de serviços, garante que ela esteja
          disponível para o público-alvo pertinente.{"\n"}
          {"\n"}A lista de serviços do catálogo representa aqueles que estão
          disponíveis e visíveis aos clientes e é um subconjunto do portfólio de
          serviços.{"\n"}
          {"\n"}O catálogo deve ser flexível quanto aos detalhes e atributos que
          ele apresenta, de acordo com cada público por meio de visões
          personalizadas.
          {"\n"}
          {"\n"} • Usuário: Serviços que podem ser requisitados diretamente pelo
          usuário;
          {"\n"}
          {"\n"}• Cliente: Níveis de serviço, parâmetros financeiros, desempenho
          de serviço;
          {"\n"}
          {"\n"} • TI para TI: Tecnologias, segurança da informação e detalhes
          técnicos.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>
          Gerenciamento de Capacidade e Desempenho
        </Text>
        <Text style={styles.sectionDescription}>
          Garante que os serviços alcancem os níveis de desempenho acordados e
          previstos, atendendo à demanda atual e futura de maneira eficaz em
          custo.
          {"\n"}
          {"\n"} • Desempenho é uma medida do que é alcançado ou entregue por um
          sistema, pessoa, equipe, prática ou serviço.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Gerenciamento de Disponibilidade</Text>
        <Text style={styles.sectionDescription}>
          Garante que os serviços entreguem os níveis de disponibilidade
          acordados para atender às necessidades de clientes e usuários.{"\n"}
          {"\n"} • Disponibilidade: A habilidade de um serviço de TI ou algum
          item de configuração de desempenhar sua função quando requerido.
          {"\n"}
          {"\n"} • MTBF Mean Time Between Failures
          {"\n"}
          {"\n"} • MTRS Mean Time To Restore Service
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>
          Gerenciamento da Continuidade do Serviço
        </Text>
        <Text style={styles.sectionDescription}>
          Garante que os níveis de disponibilidade e de desempenho dos serviços
          sejam suficientes em caso de desastre.
          {"\n"}
          {"\n"} • Desastre é um evento súbito, não planejado, que causa um
          grande dano ou perda à organização. Resulta na falha da organização em
          prover funções críticas de negócio durante um período de tempo.
          {"\n"}
          {"\n"} • Recovery Time Objective (RTO): O tempo máximo em que um
          serviço deve ser recuperado.
          {"\n"}
          {"\n"} • Recovery Point Objective (RPO): O ponto até o qual as
          informações devem ser recuperadas.
          {"\n"}
          {"\n"} • Plano de recuperação de desastre: Detalha como uma
          organização vai se recuperar de um desastre e retornar às condições
          normais.
          {"\n"}
          {"\n"} • Análise de Impacto no Negócio Identifica as Funções Vitais de
          Negócio e suas dependências.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Controle de Mudanças</Text>
        <Text style={styles.sectionDescription}>
          Garante que os riscos sejam devidamente avaliados, autoriza o
          prosseguimento das mudanças e gerencia a calendário de mudanças para
          maximizar o número de mudanças bem-sucedidas de serviços e produtos.
          {"\n"}
          {"\n"}A ideia é controlar as mudanças de forma que não sejam
          realizadas mudanças não aprovadas. Ademais, deve-se analisar o impacto
          das mudanças, principalmente as de maior impacto. A definição de
          mudança para ITIL consiste na adição, modificação ou remoção de
          qualquer coisa que possa ter um efeito direto ou indireto em um
          serviço.
          {"\n"}
          {"\n"} • Padrão: Mudança de baixo risco e pré-autorizadas.
          {"\n"}
          {"\n"} • Normal: Mudança que precisa ser agendada, avaliada e
          autorizada de acordo com um processo formal. O nível de autorização
          varia de acordo com o risco da mudança.
          {"\n"}
          {"\n"} • Emergencial: Mudança que precisa ser implementada o mais
          rápido possível. Algumas etapas podem ser ignoradas.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Gerenciamento de Ativos de TI</Text>
        <Text style={styles.sectionDescription}>
          Planejamento e gerenciamento do ciclo de vida completo de todos os
          ativos de TI. {"\n"}
          {"\n"} Um ativo de TI é qualquer componente que tem valor financeiro e
          pode contribuir para a entrega de um produto ou serviço.
          {"\n"}
          {"\n"}• Maximizar valor, controlar custos e gerenciar riscos;
          {"\n"}
          {"\n"}• Tomar decisões sobre ativos (compra, reuso, aposentadoria,
          etc.);{"\n"}
          {"\n"} • Cumprir requisitos regulatórios e contratuais.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Gerenciamento de Configuração</Text>
        <Text style={styles.sectionDescription}>
          Garante que informações precisas e confiáveis sobre a configuração dos
          serviços e sobre os itens de configuração que suportam os serviços
          estejam disponíveis quando e onde necessário.
          {"\n"}
          {"\n"}Lida com a BDGC, que nada mais é do que um banco de dados para
          lidar com itens de configuração que estão instalados. Possui atributos
          como tipo, dono, versão, status, etc
          {"\n"}
          {"\n"}Item de configuração é qualquer componente que precise ser
          gerenciado para entregar um serviço de TI. Já o Sistema de
          Configuração é um conjunto de ferramentas, dados e informação que é
          usado para suportar o gerenciamento de configuração.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Gerenciamento de Liberações</Text>
        <Text style={styles.sectionDescription}>
          Prática de disponibilizar serviços e características novos e
          modificados para uso.{"\n"}
          {"\n"}
          Liberações podem ocorrer em diferentes ambientes como:{"\n"}
          {"\n"} Tradicional ou Cascata e Ágil ou DevOps.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>
          Monitoramento e Gerenciamento de Eventos
        </Text>
        <Text style={styles.sectionDescription}>
          Observação sistemática de serviços e componentes de serviços, e de
          registro e relato de determinadas mudanças de estado identificadas
          como eventos.{"\n"}
          {"\n"}
          Um evento é qualquer mudança de estado que tem significado para um
          serviço ou item de configuração. Eventos podem ser de tipos
          diferentes, e normalmente são reconhecidos por meio de notificações e
          ferramentas de monitoramento.
          {"\n"}
          {"\n"} • Informação: Normalmente não precisam de uma ação imediata ao
          serem identificados;{"\n"}São úteis para análise de dados posterior.
          {"\n"}
          {"\n"} • Alerta : Permitem que uma ação seja tomada antes de um
          impacto negativo.
          {"\n"}
          {"\n"} • Exceção : Indicam uma brecha em alguma norma ou acordo de
          nível de serviço;{"\n"}Necessitam de ação imediata, mesmo que os
          impactos ainda não tenham ocorrido.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Gerenciamento de Incidentes</Text>
        <Text style={styles.sectionDescription}>
          Minimizar o impacto negativo de incidentes restaurando a operação
          normal do serviço o mais rápido possível.{"\n"}
          {"\n"}Incidente é uma interrupção não planejada a qual reduz a
          qualidade de um serviço. Incidentes podem ter diferentes tipos
          (incidente “normal”, grave, de segurança, etc.) e podem ser resolvidos
          por diferentes grupos ou pessoas
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Gerenciamento de Problemas</Text>
        <Text style={styles.sectionDescription}>
          Reduz a probabilidade e o impacto de incidentes por meio da
          identificação de suas causas reais e potenciais e do gerenciamento de
          soluções de contorno e erros conhecidos. Essa prática realiza a
          análise da causa raiz dos incidentes.
          {"\n"}
          {"\n"} • Problema = Causa (em potencial) de um ou mais incidentes.
          {"\n"}
          {"\n"} • Erro Conhecido = Um problema que foi analisado (causa-raiz)
          mas ainda não foi resolvido.
          {"\n"}
          {"\n"} • Solução de Contorno = Solução para um problema que ainda não
          foi totalmente resolvido.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>
          Gerenciamento de Requisições de Serviço
        </Text>
        <Text style={styles.sectionDescription}>
          Suporta a qualidade acordada de um serviço por meio do tratamento de
          todas as requisições de serviço pré definidas e iniciadas pelos
          usuários de maneira eficaz e fácil de usar.{"\n"}
          {"\n"}
          Uma requisição de serviço consiste em uma requisição de um usuário, ou
          seu representante, que inicia uma ação considerada como parte normal
          do serviço
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Central de Serviços </Text>
        <Text style={styles.sectionDescription}>
          Captura a demanda de resolução de incidentes e requisições de serviço.
          {"\n"}
          {"\n"}O propósito da Central de Serviços é ser o ponto único de
          entrada e contato com os usuários dos serviços. Capturar demandas de
          incidentes e requisições de serviço. Podem ser utilizadas várias
          tecnologias de comunicação: {"\n"}
          {"\n"}• Telefone, Chat, E-mail;
          {"\n"}• Portal Online, Aplicações Mobile;
          {"\n"}• Rede Social, etc.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "aquamarine" }]}>
        <Text style={styles.purple}>Validação e Testes de Serviço</Text>
        <Text style={styles.sectionDescription}>
          Garante que produtos e serviços novos ou modificados atendam aos
          requisitos definidos.
          {"\n"}
          {"\n"}A Validação de Serviço foca em estabelecer critérios de
          aceitação. Verificando as condições que devem ser realizadas em
          ambiente de produção.{"\n"}
          {"\n"}Testes de Serviço são aplicados em ambientes, plataformas ou
          serviços como um todo, além disso, podem ser de diversos tipos, com
          caráter técnico:
          {"\n"}
          {"\n"}•teste de unidade {"\n"}•regressão {"\n"}•integração {"\n"}
          •sistema
          {"\n"}•etc...
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
    marginBottom: 4,
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
});
