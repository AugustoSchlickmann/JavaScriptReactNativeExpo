import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ComponenteCobit = ({ tipo, nome, descricao, descricaoDetalhada }) => {
  const navigation = useNavigation();

  return (
    <>
      {descricaoDetalhada ? (
        <TouchableOpacity onPress={() =>
          navigation.navigate("Descricao", {
            tipoGOF: descricao,
            nomeGOF: "Fator de Projeto",
            descricaoGOF: descricaoDetalhada,
            palavrachaveGOF: nome,
          })
        }>
          <View style={[styles.caixa, { backgroundColor: "plum" }]}>
            <Text style={styles.sectionTitle}>{nome}</Text>
            <Text style={styles.sectionDescription}>{descricao}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        
          <View style={[styles.caixa, { backgroundColor: "plum" }]}>
            <Text style={styles.sectionTitle}>{nome}</Text>
            <Text style={styles.sectionDescription}>{descricao}</Text>
          </View>
        
      )}
    </>
  );
};

export default ComponenteCobit;

const styles = StyleSheet.create({
  sectionTitle: {
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
    paddingVertical: 4,
    marginVertical: 10,
  },
});
