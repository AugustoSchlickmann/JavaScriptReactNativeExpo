import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function InicioCobit() {
  const navigation = useNavigation();

  return (
    <ScrollView
      backgroundColor="lightgray"
      contentInsetAdjustmentBehavior="automatic"
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("TelaPrincipiosCobit")}
      >
        <View style={[styles.caixa, { backgroundColor: "plum" }]}>
          <Text style={styles.sectionTitle}>Randomizer</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("TelaPrincipiosCobit")}
      >
        <View style={[styles.caixa, { backgroundColor: "yellowgreen" }]}>
          <Text style={styles.sectionTitle}>Princípios Cobit</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TelaComponentesCobit")}
      >
        <View style={[styles.caixa, { backgroundColor: "yellowgreen" }]}>
          <Text style={styles.sectionTitle}>
            Componentes de um Sistema de Governança
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TelaFatoresCobit")}
      >
        <View style={[styles.caixa, { backgroundColor: "yellowgreen" }]}>
          <Text style={styles.sectionTitle}>Fatores de Projeto</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TelaPrincipiosCobit")}
      >
        <View style={[styles.caixa, { backgroundColor: "crimson" }]}>
          <Text style={styles.sectionTitle}>Avaliar Dirigir Monitorar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TelaPrincipiosCobit")}
      >
        <View style={[styles.caixa, { backgroundColor: "gold" }]}>
          <Text style={styles.sectionTitle}>Alinhar Planejar Organizar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TelaPrincipiosCobit")}
      >
        <View style={[styles.caixa, { backgroundColor: "gold" }]}>
          <Text style={styles.sectionTitle}>
            Construir Adquirir Implementar
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TelaPrincipiosCobit")}
      >
        <View style={[styles.caixa, { backgroundColor: "gold" }]}>
          <Text style={styles.sectionTitle}>Entregar Servir Suportar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TelaPrincipiosCobit")}
      >
        <View style={[styles.caixa, { backgroundColor: "gold" }]}>
          <Text style={styles.sectionTitle}>Monitorar Avaliar Analisar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TelaPrincipiosCobit")}
      >
        <View style={[styles.caixa, { backgroundColor: "powderblue" }]}>
          <Text style={styles.sectionTitle}>Níveis de Capacidade</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TelaPrincipiosCobit")}
      >
        <View style={[styles.caixa, { backgroundColor: "powderblue" }]}>
          <Text style={styles.sectionTitle}>Níveis de Maturidade</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  caixa: {
    borderRadius: 30,
    marginHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 10,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    color: "black",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
  },
});
