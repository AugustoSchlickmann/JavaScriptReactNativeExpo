import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ComponentePadraoGOF = ({ titulo, descricao, palavrachave, }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Descricao", {
          nomeGOF: titulo,
          descricaoGOF: descricao,
          palavrachaveGOF: palavrachave,
        })
      }
    >
      <View style={[styles.caixa, { backgroundColor: "crimson" }]}>
        <Text style={styles.blue}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ComponentePadraoGOF;

const styles = StyleSheet.create({
  blue: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 4,
  },
  caixa: {
    borderRadius: 30,
    marginHorizontal: 24,
    paddingVertical: 4,
    marginVertical: 10,
  },
});
