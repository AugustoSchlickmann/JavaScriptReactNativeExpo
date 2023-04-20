import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import PadraoGOF from "../modelos/PadraoGOF";

function createInitialTodos() {
  const padroesSelecionados = [];
  return padroesSelecionados;
}

const padrao = new PadraoGOF();
const listaTodosPadroes = padrao.criarPadroes();
var resposta;

export default function TelaRandomizerGOF() {
  const [countAcertos, setCounterAcertos] = useState(0);
  const [countErros, setCounterErros] = useState(0);
  const [padroesSelecionados, setAdded] = useState(createInitialTodos);
  const [questao, setQuestao] = useState("Selecione o correto");

  function pick5RandomItem(selecionados, todos, tipoQuestao) {
    selecionados = [];
    let firstroll = Math.floor(Math.random() * todos.length);

    let primeiroItem = todos[firstroll];
    resposta = primeiroItem;
    selecionados.push(primeiroItem);

    if (tipoQuestao % 2 == 0) {
      for (let index = 0; index < 4; index++) {
        let availableItems = todos.filter(
          (item) =>
            !selecionados.includes(item) && item.tipo != primeiroItem.tipo
        );

        let randomIndex = Math.floor(Math.random() * availableItems.length);
        let randomItem = availableItems[randomIndex];
        selecionados.push(randomItem);
      }
    }else{
      for (let index = 0; index < 4; index++) {
        let availableItems = todos.filter(
          (item) =>
            !selecionados.includes(item)
        );

        let randomIndex = Math.floor(Math.random() * availableItems.length);
        let randomItem = availableItems[randomIndex];
        selecionados.push(randomItem);
      }
    }

    //EMBARALHAR OS 5
    embaralhado = [];
    for (let index = 0; index < 5; index++) {
      let randomIndex = Math.floor(Math.random() * selecionados.length);
      embaralhado.push(selecionados[randomIndex]);
      selecionados.splice(randomIndex, 1);
    }
    setAdded([...embaralhado]);
    tipoQuestao % 2 == 0
    ? setQuestao("Qual é o padrão " + primeiroItem.tipo)
    : setQuestao(primeiroItem.descricao);
  }

  return (
    <>
      <View
        style={[
          { backgroundColor: "pink" },
          {
            flexDirection: "row",
            textAlign: "center",
            justifyContent: "space-evenly",
          },
        ]}
      >
        <Text style={[{ color: "red", fontSize: 20 }]}>{countErros}</Text>
        <Text style={[{ color: "green", fontSize: 20 }]}>{countAcertos}</Text>
      </View>

      <View
        style={[
          {
            backgroundColor: "skyblue",
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 24,
          },
        ]}
      >
        <TouchableOpacity
          onPress={() =>
            pick5RandomItem(padroesSelecionados, listaTodosPadroes, 1)
          }
        >
          <View
            style={[{ borderRadius: 50, backgroundColor: "plum", padding: 16 }]}
          >
            <Text
              style={[
                {
                  textAlign: "center",
                  fontSize: 16,
                },
              ]}
            >
              Randomizar {"\n"}por Descrição
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            pick5RandomItem(padroesSelecionados, listaTodosPadroes, 2)
          }
        >
          <View
            style={[{ borderRadius: 50, backgroundColor: "plum", padding: 16 }]}
          >
            <Text
              style={[
                {
                  textAlign: "center",
                  fontSize: 16,
                },
              ]}
            >
              Randomizar {"\n"}por Tipo
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text
        style={[
          {
            backgroundColor: "skyblue",
            textAlign: "center",
            fontSize: 24,
            paddingBottom: 16,
            paddingHorizontal:4,
          },
        ]}
      >
        {questao}
      </Text>

      <FlatList
        style={[{ backgroundColor: "skyblue" }]}
        data={padroesSelecionados}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              item == resposta
                ? setCounterAcertos(countAcertos + 1)
                : setCounterErros(countErros + 1);
              pick5RandomItem(padroesSelecionados, listaTodosPadroes,Math.floor(Math.random() * 2));
            }}
          >
            <View
              style={[
                styles.caixa,
                { backgroundColor: "plum", borderRadius: 30 },
              ]}
            >
              <Text style={styles.blue}>{item.nome}</Text>
            </View>
          </TouchableOpacity>
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
  blue: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 4,
  },
});
