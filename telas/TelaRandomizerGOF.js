import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import PadraoGOF from "../modelos/PadraoGOF";
import ComponentePadraoGOF from "../componentes/ComponentePadraoGOF";

function createInitialTodos() {
  const padroesSelecionados = [];
  return padroesSelecionados;
}

const padrao = new PadraoGOF();

const listaTodosPadroes = padrao.criarPadroes();

console.log("EU NAO ENTENDO 0");

export default function TelaRandomizerGOF() {
  console.log("EU NAO ENTENDOO 1");

  const [count, setCounter] = useState(listaTodosPadroes.length);
  const [padroesSelecionados, setAdded] = useState(createInitialTodos);

  function pickRandomItem(selecionados, todos) {
    if (selecionados.length < todos.length) {
      let availableItems = todos.filter((item) => !selecionados.includes(item));
      let randomIndex = Math.floor(Math.random() * availableItems.length);
      let randomItem = availableItems[randomIndex];
      setAdded([...selecionados, randomItem]);
      setCounter(count - 1);
    } else {
      console.log("ESGOTADO");
    }
  }

  return (
    <>
      <Text style={[{ backgroundColor: "pink" }, { textAlign: "center" }]}>
        {count}
      </Text>

      <View style={[{ backgroundColor: "skyblue" }]}>
        <Button
          onPress={() => pickRandomItem(padroesSelecionados, listaTodosPadroes)}
          title="Randomizar"
        ></Button>
      </View>

      <FlatList
        style={[{ backgroundColor: "skyblue" }]}
        data={padroesSelecionados}
        renderItem={({ item }) => (
          <ComponentePadraoGOF
            titulo={item.nome}
            descricao={item.descricao}
            palavrachave={item.palavrachave}
          ></ComponentePadraoGOF>
        )}
      ></FlatList>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: "black",
    fontSize: 20,
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
    marginHorizontal: 10,
    paddingBottom: 10,
    marginVertical: 10,
    padding: 5,
  },
});
