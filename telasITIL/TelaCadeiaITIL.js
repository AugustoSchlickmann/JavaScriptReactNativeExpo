import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import React from "react";

export default function TelaCadeiaITIL() {
  return (
    <ScrollView
      backgroundColor="white"
      contentInsetAdjustmentBehavior="automatic"
      
    >
      <Image
          source={require('../assets/cadeiaITIL.png')}
          style={{ width: "100%", height: 250 ,
           resizeMode: 'contain',  }}
        ></Image>

      <View style={[styles.caixa, { backgroundColor: "lightcoral" }]}>
        <Text style={styles.purple}>Engajar</Text>
        <Text style={styles.sectionDescription}>
          Prover entendimento sobre as necessidades dos stakeholders,
          transparência e bom relacionamento com as partes interessadas.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "lightcoral" }]}>
        <Text style={styles.purple}>Planejar</Text>
        <Text style={styles.sectionDescription}>
          Garantir entendimento da visão, estado atual, e direcionamento para
          produtos e serviços da organização
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "lightcoral" }]}>
        <Text style={styles.purple}>Projeto e Transição</Text>
        <Text style={styles.sectionDescription}>
          Garantir que as especificações (projeto/arquitetura) de produtos e
          serviços atendem às expectativas de qualidade, custo e prazos.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "lightcoral" }]}>
        <Text style={styles.purple}>Obter/Construir</Text>
        <Text style={styles.sectionDescription}>
          Produzir os componentes dos serviços, desenvolver softwares, adquirir
          infraestrutura, montar arquitetura de rede etc
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "lightcoral" }]}>
        <Text style={styles.purple}>Entregar e Suportar</Text>
        <Text style={styles.sectionDescription}>
          Garantir que os serviços estão sendo entregues aos usuários de acordo
          com os níveis acordados (atendimento e suporte).
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "lightcoral" }]}>
        <Text style={styles.purple}>Melhorar</Text>
        <Text style={styles.sectionDescription}>
          Garantir a melhoria contínua dos serviços e descobrir oportunidades de
          aperfeiçoamento por meio de medições.
        </Text>
      </View>
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
