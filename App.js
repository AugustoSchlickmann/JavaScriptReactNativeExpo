import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ViewSafeAreaView,
  ScrollView,
  View,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaTemas from "./telas/TelaTemas";
import TelaPadroesGOF from "./telas/TelaPadroesGOF";
import TelaDescricaoGOF from "./telas/TelaDescricaoGOF";

import TelaITIL4 from "./telasITIL/TelaITIL4";
import Tela4dimensoesITIL from "./telasITIL/Tela4dimensoesITIL";
import TelaSVSITIL from "./telasITIL/TelaSVSITIL";
import TelaPraticasITIL from "./telasITIL/TelaPraticasITIL";
import TelaPraticasGeraisITIL from "./telasITIL/TelaPraticasGeraisITIL";
import TelaPraticasServicoITIL from "./telasITIL/TelaPraticasServicoITIL";
import TelaPraticasTecnicasITIL from "./telasITIL/TelaPraticasTecnicasITIL";
import TelaPrincipiosITIL from "./telasITIL/TelaPrincipiosITIL";
import TelaCadeiaITIL from "./telasITIL/TelaCadeiaITIL";
import TelaRandomizerGOF from "./telas/TelaRandomizerGOF";
import InicioCobit from "./TelasCobit/InicioCobit";
import RandomizadorITIL from "./telasITIL/RandomizadorITIL";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Temas"
          component={TelaTemas}
          options={{ title: "Temas de Estudo" }}
        />

        <Stack.Screen
          name="ITIL"
          component={TelaITIL4}
          options={{ title: "ITIL 4" }}
        />

        <Stack.Screen
          name="SVSITIL"
          component={TelaSVSITIL}
          options={{ title: "Sistema de Valor de Serviços" }}
        />

        <Stack.Screen
          name="PrincipiosITIL"
          component={TelaPrincipiosITIL}
          options={{ title: "7 Princípios ITIL" }}
        />

        <Stack.Screen
          name="CadeiaITIL"
          component={TelaCadeiaITIL}
          options={{ title: "Cadeia de Valor de Serviços" }}
        />

        <Stack.Screen
          name="PraticasITIL"
          component={TelaPraticasITIL}
          options={{ title: "Práticas ITIL 4" }}
        />
        <Stack.Screen
          name="PraticasGeraisITIL"
          component={TelaPraticasGeraisITIL}
          options={{ title: "Gerenciamentos Gerais" }}
        />
        <Stack.Screen
          name="PraticasServicoITIL"
          component={TelaPraticasServicoITIL}
          options={{ title: "Gerenciamentos de Serviços" }}
        />
        <Stack.Screen
          name="PraticasTecnicoITIL"
          component={TelaPraticasTecnicasITIL}
          options={{ title: "Gerenciamentos Técnicos" }}
        />
        <Stack.Screen
          name="4dimensoesITIL"
          component={Tela4dimensoesITIL}
          options={{ title: "4 Dimensões" }}
        />

        <Stack.Screen
          name="Padroes GOF"
          component={TelaPadroesGOF}
          options={{ title: "Design Patterns GOF" }}
        />

        <Stack.Screen
          name="Descricao"
          component={TelaDescricaoGOF}
          options={({ route }) => ({ title: route.params.nomeGOF })}
        />

        <Stack.Screen
          name="RandomizerGOF"
          component={TelaRandomizerGOF}
          options={{ title: "Randomizer GOF" }}
        />

        <Stack.Screen
          name="RandomizerITIL"
          component={RandomizadorITIL}
          options={{ title: "Randomizador ITIL 4" }}
        />

        <Stack.Screen
          name="Cobit"
          component={InicioCobit}
          options={{ title: "COBIT 2019" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    color: "black",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "center",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
});
