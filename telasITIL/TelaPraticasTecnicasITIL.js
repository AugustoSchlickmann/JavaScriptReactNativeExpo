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

export default function TelaPraticasTecnicasITIL() {
  return (
    <ScrollView
      backgroundColor="white"
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={[styles.caixa, { backgroundColor: "cornflowerblue" }]}>
        <Text style={styles.purple}>
          Desenvolvimento e Gerenciamento de Softwares
        </Text>
        <Text style={styles.sectionDescription}>
          Garante que os aplicativos atendam às necessidades das partes
          interessadas em termos de funcionalidade, confiabilidade, capacidade
          de manutenção, conformidade e auditabilidade.
          {"\n"}
          {"\n"}São Atividades típicas:{"\n"} • Arquitetura de solução; {"\n"}•
          Modelagem de solução; {"\n"}• Desenvolvimento de Software;{"\n"} •
          Teste de Software (unidade, integração, sistema, etc.);{"\n"} •
          Gerenciamento de repositórios de código;
          {"\n"}• Criação de pacotes de implantação;{"\n"} • Controle de versão.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "cornflowerblue" }]}>
        <Text style={styles.purple}>
          Gerenciamento de Infraestrutura e Plataformas
        </Text>
        <Text style={styles.sectionDescription}>
          Supervisionar a infraestrutura e as plataformas usadas por uma
          organização. Ela permite a monitoração das soluções de tecnologia
          disponíveis, incluindo as de terceiros.
          {"\n"}
          {"\n"}
          Infraestrutura de TI são os recursos físicos ou virtuais de
          tecnologia, tais como Servidores, Storage, Rede, Hardware, Middleware,
          etc.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "cornflowerblue" }]}>
        <Text style={styles.purple}>Gerenciamento de Implantação</Text>
        <Text style={styles.sectionDescription}>
          Gerencia a implantação de hardware, software, documentação, processos
          ou qualquer outro componente de serviço novo ou alterado em ambientes
          de produção.
          {"\n"}
          {"\n"}Esta prática apresenta 4 tipos de implantação, são eles:
          {"\n"}
          {"\n"}• Phased: Os componentes são implantados por fases, em apenas
          parte do ambiente de produção.{"\n"}
          {"\n"}• Big Bang: Os componentes são implantados em todos os alvos de
          uma única vez.{"\n"}
          {"\n"}• Continuous: Os componentes são integrados, testados e
          implantados sempre que necessário.{"\n"}
          {"\n"}• Pull: Os componentes são disponibilizados em um repositório e
          os usuários fazem o download quando escolherem.
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
