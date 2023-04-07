import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Tela4dimensoesITIL() {
  return (
    <ScrollView
      backgroundColor="white"
      contentInsetAdjustmentBehavior="automatic"
    >
      <Image
        source={require('../assets/4dimensoesITIL.png')}
        style={{ width: "100%", height: 250 ,
        resizeMode: 'contain',
      }}
      ></Image>

      <View style={[styles.caixa, { backgroundColor: "lightgreen" }]}>
        <Text style={styles.purple}>Organizações e Pessoas</Text>
        <Text style={styles.sectionDescription}>
          Esta dimensão cobre papéis, responsabilidades, estruturas
          organizacionais, cultura, equipes e competências necessárias para
          criar e entregar serviços.{"\n"}{"\n"}Cada pessoa na organização deve ter um
          claro entendimento da sua contribuição para os serviços.{"\n"}{"\n"} É importante
          que o foco seja na criação de valor, e não em “ilhas organizacionais”.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "lightgreen" }]}>
        <Text style={styles.purple}>Informação e Tecnologia</Text>
        <Text style={styles.sectionDescription}>
          Inclui toda informação e conhecimento técnico necessário para o
          gerenciamento de serviços. {"\n"}{"\n"}
          As tecnologias específicas dependem da
         natureza do serviço sendo oferecido, podendo incluir tecnologias “de
          ponta” como: {"\n"}{"\n"}
          • Blockchain {"\n"}
          • Inteligência Artificial {"\n"}
          • Aprendizado de Máquina {"\n"}
          • Cloud Computing
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "lightgreen" }]}>
        <Text style={styles.purple}>Parceiros e Fornecedores</Text>
        <Text style={styles.sectionDescription}>
          Toda organização depende, em algum nível, de serviços oferecidos por
          outras organizações.{"\n"}{"\n"} Esta dimensão inclui os relacionamentos da
          organização com outras que ajudam a projetar, desenvolver, implantar,
          entregar, suportar e melhorar os serviços.{"\n"}{"\n"}Também incorpora
          contratos e outros acordos com parceiros e fornecedores.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "lightgreen" }]}>
        <Text style={styles.purple}>Fluxo de Valor e Processos</Text>
        <Text style={styles.sectionDescription}>
          Definem como as várias partes de uma organização trabalham de uma
          maneira coordenada e integrada para gerar valor na forma de produtos e
          serviços.{"\n"}{"\n"} Focam em quais atividades são desempenhadas e como elas
          estão organizadas.{"\n"}{"\n"}Fluxo de Valor é uma série de passos que a
          organização segue para criar e entregar produtos e serviços a seus
          consumidores.{"\n"}{"\n"}Um Processo é uma série de atividades
          inter-relacionadas que transforma entradas em saídas.{"\n"}{"\n"} • Definem uma
          sequência de ações e suas dependências. {"\n"}• Geralmente são detalhados na
          forma de procedimentos ou práticas.
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
