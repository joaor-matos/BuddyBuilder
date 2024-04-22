//Elementos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, SafeAreaView, ScrollView, ImageBackground, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { cloneElement, startTransition } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Componentes
import Cronometro from './components/Cronometro';
import Exercicio from './components/Exercicio';
import Temporizador from './components/Temporizador';
import IMC from './components/IMC';

//Páginas
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import CriarTreino from './pages/CriarTreino';
import ConfigScreen from './pages/Configuracao';
import CalculoIMC from './pages/CalculoIMC';
import ConfigUsuario from './pages/ConfigUsuario';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#182649', flexDirection: 'column' }}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}
          onPress={() => navigation.navigate('Configuracao')}>
          <View style={{ backgroundColor: '#AB0000', height: '60%', width: '60%', borderRadius: 6, }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.timerTreino} activeOpacity={0.9}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', marginHorizontal: 10 }}>1:12:43</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}
          onPress={() => navigation.navigate('Configuracao')}>
          <Image
            source={require('./images/menu.png')}
            style={styles.iconMenu}
          />
        </TouchableOpacity>

        <StatusBar style="auto" />

      </View>
      <View style={styles.viewTreino}>
        <ScrollView style={styles.scrollTreino}>
          <Exercicio nomeExerc='ESTEIRA' />
          <Exercicio nomeExerc='AGACHAMENTO BARRA' />
          <Exercicio nomeExerc='ELEVAÇÃO PÉLVICA' />
          <Exercicio nomeExerc='CADEIRA EXTENSORA + AGACHAMENTO DESLOCADO' />
          <Exercicio nomeExerc='CADEIRA FLEXORA' />
          <Exercicio nomeExerc='PANTURRILHA BURRINHO' />
        </ScrollView>
      </View>

      <View style={{ flexDirection: 'column', justifyContent: 'space-between', }}>
        <Temporizador />
        <Cronometro />
      </View>

    </SafeAreaView>
  );
}

function IMCScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: '#182649', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <IMC />
      </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Configuracao'>
        <Stack.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Configuracao' component={ConfigScreen} />
        <Stack.Screen options={{ headerShown: true }} name='IMC' component={IMCScreen} />
        <Stack.Screen options={{ headerShown: true }} name='Treino' component={CriarTreino} />
        <Stack.Screen options={{ headerShown: true }} name='ConfigUsuario' component={ConfigUsuario} />
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} name='Cadastro' component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  menu: {
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#182649',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 10,
  },
  navegar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: '#white',
    height: 80,
    borderRadius: 5,
    margin: 5,
  },
  bttnHome: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    width: 100,
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
  },
  bttnConfig: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 70,
    width: 100,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  bttnMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 70,
    width: 70,
    borderRadius: 10,
  },

  timerTreino: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 70,
    borderRadius: 10,
  },

  iconMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  separator: {
    backgroundColor: '#636363',
    width: 1,
    height: 70,
  },
  buttonIcon: {
    padding: 13,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 50,
    width: 50,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },

  viewTreino: {

    alignSelf: 'center',
    backgroundColor: '#D9D9D9',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    borderRadius: 10,
    width: 390,
    alignItems: 'center',
    flexDirection: 'column',
  },
  viewExerc: {
    marginTop: 5,
    backgroundColor: '#636363',
    height: 70,
    width: 340,
    borderRadius: 10,
  },
  container: {
    backgroundColor: "#242424",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 20,
  },
  btn: {
    width: 200,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: '#D9D9D9',
    color: "black",
    justifyContent: "center",
    elevation: 2,
    marginTop: 10,
  },
});
