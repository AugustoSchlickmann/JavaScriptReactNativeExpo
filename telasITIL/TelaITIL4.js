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

export default function TelaITIL4() {
  const navigation = useNavigation();
  return (
    <ScrollView
      backgroundColor="white"
      contentInsetAdjustmentBehavior="automatic"
      
    >
      <TouchableOpacity onPress={() => navigation.navigate("SVSITIL")}>
        <Text style={styles.purple}>SVS</Text>
        <Image
          source={require('../assets/SVSITIL.png')}
          style={{ width: "100%", height: 250 ,
           resizeMode: 'contain',  }}
        ></Image>
      </TouchableOpacity>

      <View style={[styles.caixa, { backgroundColor: "salmon" }]}>
        <Text style={styles.purple}>O que é</Text>
        <Text style={styles.sectionDescription}>
          Guia de melhores práticas para Gerenciamento de Serviços de TI
          {"\n"}{"\n"}NÃO É UMA METODOLOGIA
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "powderblue" }]}>
        <Text style={styles.purple}>Serviço</Text>
        <Text style={styles.sectionDescription}>
          Meio que permite a cocriação de valor ao facilitar a obtenção dos
          resultados que os clientes desejam, sem que eles precisem gerenciar
          custos e riscos
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "skyblue" }]}>
        <Text style={styles.purple}>Gerenciamento de Serviços</Text>
        <Text style={styles.sectionDescription}>
          Conjunto de recursos organizacionais especializados para gerar valor para os clientes na forma de serviços.
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("4dimensoesITIL")}>
        <View style={[styles.caixa, { backgroundColor: "lightgreen" }]}>
          <Text style={styles.purple}>Modelo 4 Dimensões</Text>
          <Text style={styles.sectionDescription}>
            O modelo de quatro dimensões da ITIL existe para suportar uma
            abordagem holística.{"\n"} A ITIL define quatro dimensões que são
            críticas para o gerenciamento de serviços. {"\n"}Este modelo
            apresenta quatro perspectivas críticas para a promoção eficiente e
            eficaz de valor, para os clientes e outras partes interessadas, na
            forma de produtos e serviços.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("PraticasITIL")}>
        <View style={[styles.caixa, { backgroundColor: "coral" }]}>
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
