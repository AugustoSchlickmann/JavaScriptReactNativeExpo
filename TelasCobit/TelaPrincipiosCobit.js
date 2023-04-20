import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import ComponenteCobit from "../componentes/ComponenteCobit";

export default function TelaPrincipiosCobit({route}) {
    

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {route.params.lista.map((item, index) => (
        <View>
          <ComponenteCobit
            key={index}
            tipo={item.tipo}
            nome={item.nome}
            descricao={item.descricao}
            descricaoDetalhada={item.descricaoDetalhada}
          ></ComponenteCobit>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
