import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";

export default function TelaPrincipiosITIL() {
  return (
    <ScrollView
      backgroundColor="white"
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={[styles.caixa, { backgroundColor: "goldenrod" }]}>
        <Text style={styles.purple}>Foque no Valor</Text>
        <Text style={styles.sectionDescription}>
          Mapear o que realmente tem valor, ou seja, aquilo que importa para o
          cliente. O serviço deve representar valor para o cliente.
          {"\n"}
          Como o produto ou serviço ajuda o consumidor a realizar e alcançar
          seus objetivos.
          {"\n"}
          {"\n"}Quem determina o que é valor é o CONSUMIDOR, não a organização.
          (provedor).
          {"\n"}
          {"\n"}
          Portanto tudo que a organização faz é com foco em gerar valor para o
          cliente de forma direta ou indireta.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "goldenrod" }]}>
        <Text style={styles.purple}>Comece Onde Você Está</Text>
        <Text style={styles.sectionDescription}>
          Não comece “do zero” sem antes considerar o que pode ser aproveitado
          na organização.
          {"\n"}
          {"\n"}O estado atual deve ser investigado e completamente entendido.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "goldenrod" }]}>
        <Text style={styles.purple}>Progrida Iterativamente Com Feedback</Text>
        <Text style={styles.sectionDescription}>
          Esse princípio apresenta a cultura ágil dentro da ITIL. {"\n"}
          {"\n"}
          Não faça tudo ao mesmo tempo.{"\n"} {"\n"}
          Organize o trabalho em seções menores e mais facilmente gerenciáveis.
          {"\n"}
          {"\n"} Utilize feedback em cada etapa do processo.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "goldenrod" }]}>
        <Text style={styles.purple}>Colabore e Promova a Visibilidade</Text>
        <Text style={styles.sectionDescription}>
          Trabalhar em parceria produz melhores resultados e sucesso de longo
          prazo.{"\n"} {"\n"}O trabalho deve ser transparente e as informações
          devem ser o mais visíveis possível.
          {"\n"} {"\n"}Traduz alguns conceitos da filosofia ágil como
          transparência, comunicação, colaboração, visibilidade, informação
          compartilhada.
          {"\n"} {"\n"}Esse princípio também está associado a filosofia
          DevOps, já que, há uma necessidade de colaboração entre equipes.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "goldenrod" }]}>
        <Text style={styles.purple}>Pense e Trabalhe de Forma Holística</Text>
        <Text style={styles.sectionDescription}>
          Considere o serviço como um todo, e não apenas suas partes isoladas.
          {"\n"} {"\n"}Integre tecnologia, informações, pessoas, organizações,
          parceiros, acordos (tudo deve ser coordenado).{"\n"} {"\n"} Os
          princípios interagem entre si, dessa forma, pensar e trabalhar
          holisticamente também está ligado a colabore e promova a visibilidade.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "goldenrod" }]}>
        <Text style={styles.purple}>Mantenha a Simplicidade e Praticidade</Text>
        <Text style={styles.sectionDescription}>
          KISS{"\n"} {"\n"}
          Se um processo, serviço, ação ou métrica não produzir nenhum valor,
          elimine-o.{"\n"} {"\n"}Use o menor número de passos possível para
          completar uma tarefa.{"\n"} {"\n"}
          Se há uma abordagem simples para solucionar um problema ela deve ser
          adotada.
        </Text>
      </View>

      <View style={[styles.caixa, { backgroundColor: "goldenrod" }]}>
        <Text style={styles.purple}>Otimize e Automatize</Text>
        <Text style={styles.sectionDescription}>
          Recursos de todos os tipos, principalmente de RH, devem ser usados da
          melhor forma.{"\n"} {"\n"}Elimine tudo que for desperdício e use a
          tecnologia sempre que possível.{"\n"} {"\n"}
          Encoraja-se definir limites na otimização de serviços e práticas,
          buscando alinhamento com as restrições impostas. Deve-se ponderar os
          princípios.
          {"\n"} {"\n"}
          Enfim, a organização deve maximizar o valor do trabalho realizado de
          forma a entregar valor. Otimizar e automatizar em um grau razoável.
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
