import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ComponentePadraoGOF from "../componentes/ComponentePadraoGOF";
import PadraoGOF from "../modelos/PadraoGOF";
import { useNavigation } from "@react-navigation/native";

const TelaPadroesGOF = () => {
  const padrao = new PadraoGOF();
  const lista = padrao.criarPadroes();
  const navigation = useNavigation();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <TouchableOpacity onPress={() => navigation.navigate("RandomizerGOF")}>
        <View style={[styles.caixa, { backgroundColor: "plum" }]}>
          <Text style={styles.sectionTitle}>Randomizer</Text>
        </View>
      </TouchableOpacity>
      {lista.map((item, index) => (
        <View>
          {index == 0 && (
            <Text style={[styles.sectionTitle, {}]}>Criacionais</Text>
          )}
          {index == 5 && (
            <Text style={[styles.sectionTitle, {}]}>Estruturais</Text>
          )}
          {index == 12 && (
            <Text style={[styles.sectionTitle, {}]}>Comportamentais</Text>
          )}

          <ComponentePadraoGOF
            key={index}
            tipo={item.tipo}
            titulo={index + 1 + " " + item.nome}
            descricao={item.descricao}
            palavrachave={item.palavrachave}
          ></ComponentePadraoGOF>
        </View>
      ))}
    </ScrollView>
  );
};

export default TelaPadroesGOF;

const styles = StyleSheet.create({
  sectionTitle: {
    color: "black",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 8,
  },
  caixa: {
    borderRadius: 30,
    marginHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 10,
  },
});
