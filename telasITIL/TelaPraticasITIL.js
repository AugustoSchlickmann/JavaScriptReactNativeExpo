import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function TelaPraticasITIL() {
  const navigation = useNavigation();
  return (
    <ScrollView
      backgroundColor="white"
      contentInsetAdjustmentBehavior="automatic"
    >
      <TouchableOpacity onPress={() => navigation.navigate("RandomizerITIL")}>
        <View style={[styles.caixa, { backgroundColor: "plum" }]}>
          <Text style={styles.purple}>Randomizador</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("PraticasGeraisITIL")}
      >
        <View style={[styles.caixa, { backgroundColor: "plum" }]}>
          <Text style={styles.purple}>Gerais</Text>
          <Text style={styles.sectionDescription}>
            As 14 Práticas de Gerenciamento Geral são associadas ao
            gerenciamento geral (administrativo) mais voltadas a administração
            geral, ou seja, são práticas que se aplicam a toda organização,
            ligadas ao gerenciamento geral do negócio
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("PraticasServicoITIL")}
      >
        <View style={[styles.caixa, { backgroundColor: "plum" }]}>
          <Text style={styles.purple}>Serviços</Text>
          <Text style={styles.sectionDescription}>
            As 17 práticas de Gerenciamento de Serviços são voltadas ao
            gerenciamento do serviço propriamente dito, ou seja, para serviços
            de TI
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("PraticasTecnicoITIL")}
      >
        <View style={[styles.caixa, { backgroundColor: "plum" }]}>
          <Text style={styles.purple}>Técnicos</Text>
          <Text style={styles.sectionDescription}>
            As 3 práticas de Gerenciamento Técnico são mais ligadas ao
            gerenciamento de tecnologias envolvendo desenvolvimento de software,
            infraestrutura e implantação
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
