import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import Cobit from "../modelos/Cobit";
import ComponenteCobit from "../componentes/ComponenteCobit";

export default function TelaComponentesCobit() {
    
  const cobit = new Cobit();

  const principios = cobit.componentes();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {principios.map((item, index) => (
        <View>
          <ComponenteCobit
            key={index}
            tipo={index + 1 + " " + item.tipo}
            nome={item.nome}
            descricao={item.descricao}
          ></ComponenteCobit>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
