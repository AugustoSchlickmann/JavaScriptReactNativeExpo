import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Cobit from "../modelos/Cobit";

export default function InicioCobit() {
  const navigation = useNavigation();
  const cobit = new Cobit();
  const principios = cobit.principios();
  const componentes = cobit.componentes();
  const fatores = cobit.fatoresdeprojeto();
  const objetivos = cobit.objetivos();
  const capacidades = cobit.capacidade();
  const maturidades = cobit.maturidade();

  return (
    <ScrollView
      backgroundColor="lightgray"
      contentInsetAdjustmentBehavior="automatic"
    >
      <TouchableOpacity onPress={() => navigation.navigate("TelaRandomizerCobit")}>
        <View style={[styles.caixa, { backgroundColor: "plum" }]}>
          <Text style={styles.sectionTitle}>Randomizer</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TelaPrincipiosCobit", {
            lista: principios,
            titulo: "Princípios Cobit",
          })
        }
      >
        <View style={[styles.caixa, { backgroundColor: "yellowgreen" }]}>
          <Text style={styles.sectionTitle}>Princípios Cobit</Text>
          <Text style={styles.sectionDescription}>
            Princípios do COBIT 2019 foram divididos em dois grupos: {"\n"}▪
            Princípios do Framework de Governança;{"\n"} ▪ Princípios do Sistema
            de Governança.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TelaPrincipiosCobit", {
            lista: componentes,
            titulo: "Componentes da Governança",
          })
        }
      >
        <View style={[styles.caixa, { backgroundColor: "yellowgreen" }]}>
          <Text style={styles.sectionTitle}>
            Componentes de um Sistema de Governança
          </Text>
          <Text style={styles.sectionDescription}>
            Para satisfazer seus objetivos de governança, cada organização deve
            estabelecer e utilizar um conjunto de componentes personalizados.
            {"\n\n"}
            Os componentes são fatores que contribuem para a boa operação do
            sistema de governança de I&T da organização que interagem entre si,
            resultando numa visão holística da I&T.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TelaPrincipiosCobit", {
            lista: fatores,
            titulo: "Design Factors",
          })
        }
      >
        <View style={[styles.caixa, { backgroundColor: "yellowgreen" }]}>
          <Text style={styles.sectionTitle}>Fatores de Projeto</Text>
          <Text style={styles.sectionDescription}>
            Os Fatores de Projeto (Design Factors) são fatores que podem
            influenciar o sistema de governança de uma organização e
            posicioná-lo para o sucesso no uso da I&T. {"\n\n"}Fatores de
            projetos podem ser qualquer combinação dos elementos listados
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TelaPrincipiosCobit", {
            lista: objetivos.slice(0, 5),
            titulo: "ADM / EDM",
          })
        }
      >
        <View style={[styles.caixa, { backgroundColor: "crimson" }]}>
          <Text style={styles.sectionTitle}>Avaliar Dirigir Monitorar</Text>
          <Text style={styles.sectionDescription}>
            Avaliação de opções estratégicas{"\n"}Direcionamento das Ações
            {"\n\n"}Tripé da Governança:{"\n"}Garantir a realização de
            benefícios{"\n"} Garantir a Otimização de riscos {"\n"} Garantir a
            Otimização de recursos
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TelaPrincipiosCobit", {
            lista: objetivos.slice(5, 19),
            titulo: "APO / APO",
          })
        }
      >
        <View style={[styles.caixa, { backgroundColor: "gold" }]}>
          <Text style={styles.sectionTitle}>Alinhar Planejar Organizar</Text>
          <Text style={styles.sectionDescription}>
            - Visão abrangente da organização; {"\n"} Organização do portfólio,
            arquitetura, RH{"\n"}
            {"\n"}Preocupa-se em estabelecer um framework de gestão. Com
            processos, estruturas organizacionais, papéis e responsabilidades.
            {"\n"} Esse domínio envolve a estratégia, arquitetura, inovação e
            outros objetivos para alcançar a gestão de I&T.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TelaPrincipiosCobit", {
            lista: objetivos.slice(19, 30),
            titulo: "CAI / BAI",
          })
        }
      >
        <View style={[styles.caixa, { backgroundColor: "gold" }]}>
          <Text style={styles.sectionTitle}>
            Construir Adquirir Implementar
          </Text>
          <Text style={styles.sectionDescription}>
            Definição, aquisição e implementação de soluções de I&T. {"\n"}
            {"\n"}Aborda a definição, aquisição e implementação de soluções de
            TI e suas integrações nos processos de negócio.{"\n"}
            {"\n"} Nesse domínio adquire-se, implementa-se ou constrói-se
            soluções, projetos ou programas de acordo com os planos definidos
            nos domínios anteriores
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TelaPrincipiosCobit", {
            lista: objetivos.slice(30, 36),
            titulo: "ESS / DSS",
          })
        }
      >
        <View style={[styles.caixa, { backgroundColor: "gold" }]}>
          <Text style={styles.sectionTitle}>Entregar Servir Suportar</Text>
          <Text style={styles.sectionDescription}>
            Entrega e suporte operacional de serviços de I&T. {"\n"}
            {"\n"} Esse domínio possui os objetivos mais operacionais do COBIT.
            {"\n"}
            Em que o produto desenvolvido entra em operação e a organização dá
            suporte ao usuário por meio do gerenciamento de operações,
            problemas, continuidade, e os outros objetivos do domínio ESS.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TelaPrincipiosCobit", {
            lista: objetivos.slice(36),
            titulo: "MAA / MEA",
          })
        }
      >
        <View style={[styles.caixa, { backgroundColor: "gold" }]}>
          <Text style={styles.sectionTitle}>Monitorar Avaliar Analisar</Text>
          <Text style={styles.sectionDescription}>
            Monitoramento do desempenho;{"\n"}Controles internos;{"\n"}
            Conformidade;
            {"\n"}
            {"\n"} Este domínio tem objetivos com foco no monitoramento do
            desempenho e na conformidade da TI com os objetivos de controles
            internos e os requisitos externos. Nele é realizado o
            acompanhamento, a medição e a gestão de desempenho
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TelaPrincipiosCobit", {
            lista: capacidades,
            titulo: "Níveis de Capacidade",
          })
        }
      >
        <View style={[styles.caixa, { backgroundColor: "powderblue" }]}>
          <Text style={styles.sectionTitle}>Níveis de Capacidade</Text>
          <Text style={styles.sectionDescription}>
            O COBIT® 2019 suporta um esquema de avaliação de capacidade de
            processo baseado no CMMI.{"\n"}
            {"\n"} O processo de cada objetivo de governança e gestão pode ter
            um nível de capacidade, variando de 0 a 5. O nível de capacidade é
            uma medida de quão bem um processo é implementado e está atingindo
            sua finalidade, ou seja, uma medida da qualidade de implementação e
            desempenho do processo
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TelaPrincipiosCobit", {
            lista: maturidades,
            titulo: "Níveis de Maturidade",
          })
        }
      >
        <View style={[styles.caixa, { backgroundColor: "powderblue" }]}>
          <Text style={styles.sectionTitle}>Níveis de Maturidade</Text>
          <Text style={styles.sectionDescription}>
            Associados a Áreas Focais. {"\n"}
            {"\n"}Um nível de maturidade em determinada área focal é alcançado
            quando todos os processos daquela área atingem um determinado nível
            de capacidade.
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  caixa: {
    borderRadius: 30,
    marginHorizontal: 8,
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 4,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    color: "black",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
});
