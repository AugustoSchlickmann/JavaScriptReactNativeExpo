import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function TelaTemas() {
  const navigation = useNavigation();

  return (

    <ScrollView  backgroundColor="lightgray" contentInsetAdjustmentBehavior="automatic">
      
      <TouchableOpacity onPress={() => navigation.navigate("ITIL")}>
        <View style={[styles.caixa, { backgroundColor: "yellowgreen"}]}>
          <Text style={styles.sectionTitle}>ITIL 4</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Cobit")} >
      <View style={[styles.caixa, { backgroundColor: "crimson",  }]}>
          <Text style={styles.sectionTitle}>Cobit 2019</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Padroes GOF")}>
        <View style={[styles.caixa, { backgroundColor: "rosybrown",  }]}>
          <Text style={styles.sectionTitle}>Design Patterns GOF</Text>
        </View>
      </TouchableOpacity>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: "black",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
  },
  green: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 4,
  },
  purple: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 4,
  },
  caixa: {
    borderRadius: 30,
    marginHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 10,
  },
});
