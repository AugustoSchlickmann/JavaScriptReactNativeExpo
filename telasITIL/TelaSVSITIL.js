import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function TelaSVSITIL() {
  const navigation = useNavigation();
  return (
    <ScrollView
      backgroundColor="white"
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Oportunidade e Demanda</Text>
        <Text style={styles.sectionDescription}>
          Acionam atividades dentro da SVS que levam à criação de valor.{"\n"}{" "}
          Nem toda oportunidade é explorada e nem toda demanda é atendida.{"\n"}
          Oportunidade: é a possibilidade de gerar valor ou melhorar a
          organização.{"\n"} Demanda: representa a necessidade ou desejo por
          produtos e serviços de clientes internos ou externos.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Valor</Text>
        <Text style={styles.sectionDescription}>
          Benefícios, utilidade ou importância percebidos em algo.
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("PrincipiosITIL")}>
        <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
          <Text style={styles.purple}>Pincípios Orientadores</Text>
          <Text style={styles.sectionDescription}>
            Recomendações que podem orientar uma organização em todas as
            circunstâncias, independentemente das mudanças em suas metas,
            estratégias, tipo de trabalho ou estrutura de gerenciamento. Um
            princípio orientador é universal e duradouro{"\n"} Assim como o
            COBIT, a ITIL também utiliza uma abordagem holística abordando a
            organização como um todo – não apenas a área de TI
          </Text>
        </View>
      </TouchableOpacity>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Governança</Text>
        <Text style={styles.sectionDescription}>
          Meio pelo qual uma organização é dirigida e controlada.{"\n"} A
          estrutura de governança está no mais alto nível da organização e é
          responsável pela direção, tomada de decisão e pela conformidade da
          organização com políticas e regulamentos externos{"\n"}
          As atividades de governança são: Avaliar, Dirigir e Monitorar
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("CadeiaITIL")}>
        <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
          <Text style={styles.purple}>Cadeia de Valor de Serviços</Text>
          <Text style={styles.sectionDescription}>
            A Cadeia de Valor de Serviços é o elemento central do Sistema de
            Valor de Serviço. Ela mostra as atividades-chave necessárias para
            atender à demanda e criar valor por meio do gerenciamento de
            produtos e serviços, possuindo 6 atividades-chave:{"\n"}
            {"\n"}• Engajar{"\n"} • Planejar{"\n"} • Projeto e Transição{"\n"} •
            Obter/Construir{"\n"} • Entregar e Suportar{"\n"} • Melhorar
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PraticasITIL")}>
        <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
          <Text style={styles.purple}>Práticas de Gerenciamento</Text>
          <Text style={styles.sectionDescription}>
            Conjunto de recursos organizacionais destinado a executar um
            trabalho ou atingir um objetivo{"\n"} ITIL apresenta 34 práticas.{" "}
            {"\n"} {"\n"}14 Práticas de Gerenciamento Geral
            {"\n"} {"\n"}17 Práticas de Gerenciamento de Serviços {"\n"}
            {"\n"} 3 Práticas de Gerenciamento Técnico
          </Text>
        </View>
      </TouchableOpacity>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Melhoria Contínua</Text>
        <Text style={styles.sectionDescription}>
          Prática que alinha as práticas e os serviços de uma organização com as
          necessidades de negócio em constante mudança através da identificação
          e das melhorias contínuas de todos os elementos envolvidos no
          gerenciamento efetivo de produtos e serviços
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
  blue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 4,
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
