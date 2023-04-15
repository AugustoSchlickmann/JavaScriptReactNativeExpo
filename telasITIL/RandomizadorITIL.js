import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import ITIL from "../modelos/ITIL";

function createInitialTodos() {
  const praticasSelecionados = [];
  return praticasSelecionados;
}

const itil4 = new ITIL();
const listaTodasPraticas = itil4.listaDePraticas();
var resposta;

export default function RandomizerITIL() {
  const [countAcertos, setCounterAcertos] = useState(0);
  const [countErros, setCounterErros] = useState(0);
  const [praticasSelecionados, setAdded] = useState(createInitialTodos);
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
    } else {
      for (let index = 0; index < 4; index++) {
        let availableItems = todos.filter(
          (item) => !selecionados.includes(item)
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
      ? setQuestao("Qual é a prática " + primeiroItem.tipo)
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
      <Button
        onPress={() =>
          pick5RandomItem(praticasSelecionados, listaTodasPraticas, 2)
        }
        title="Randomizar Por Categoria"
      ></Button>

      <Button
        onPress={() =>
          pick5RandomItem(praticasSelecionados, listaTodasPraticas, 1)
        }
        title="Randomizar Por Descrição"
      ></Button>

      <Text
        style={[
          {
            backgroundColor: "pink",
            textAlign: "center",
            fontSize: 20,
            marginHorizontal: 4,
          },
        ]}
      >
        {questao}
      </Text>

      <FlatList
        style={[{ backgroundColor: "skyblue" }]}
        data={praticasSelecionados}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              item == resposta
                ? setCounterAcertos(countAcertos + 1)
                : setCounterErros(countErros + 1);
              pick5RandomItem(
                praticasSelecionados,
                listaTodasPraticas,
                Math.floor(Math.random() * 2)
              );
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
