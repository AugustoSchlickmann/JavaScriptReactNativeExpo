import { View, Text, StyleSheet,} from 'react-native'
import React from 'react'

const TelaDescricaoGOF = ({route}) => {
    
  return (
    <View style={[styles.caixa, { backgroundColor: "plum"}]}>
      <Text style ={styles.red}>{route.params.palavrachaveGOF}</Text>
      <Text style ={styles.sectionDescription}>{route.params.descricaoGOF}</Text>
    </View>
  )
}

export default TelaDescricaoGOF


const styles = StyleSheet.create({
  red: {
    color: "red",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 4,
  },
  sectionDescription: {
    marginTop: 8,
    marginHorizontal:18,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  caixa: {
    borderRadius: 30,
    marginHorizontal: 24,
    paddingVertical: 24,
    marginVertical: 10,
    borderColor: "green",
    borderWidth: 4,
    
  },
});