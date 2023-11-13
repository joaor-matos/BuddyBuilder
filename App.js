//Elementos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, SafeAreaView, ScrollView, ImageBackground, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { cloneElement, startTransition } from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { HiMenu } from "react-icons/hi";

// Componentes
import Cronometro from './components/Cronometro';
import Exercicio from './components/Exercicio';
import Temporizador from './components/Temporizador';
import IMC from './components/IMC';

//Páginas
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import CriarTreino from './pages/CriarTreino';
import Configuracao from './pages/Configuracao';
import Treino from './pages/Treino';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#242424', flexDirection: 'column' }}>
      <View style={styles.menu}>
      <TouchableOpacity style={styles.bttnTreino} activeOpacity={0.9}
      onPress={() => navigation.navigate('Configuracao')}>
        {/* <Image
        source={require('./images/treino.png')}
        style={styles.iconTreino}
        /> */}
        <HiMenu style={styles.iconConfig} size={70} />
      </TouchableOpacity>

      <StatusBar style="auto" />

      </View>
      <View style={styles.viewTreino}>
        <ScrollView style={styles.scrollTreino}>
          <Exercicio nomeExerc='ESTEIRA'/>
          <Exercicio nomeExerc='AGACHAMENTO BARRA'/>
          <Exercicio nomeExerc='ELEVAÇÃO PÉLVICA'/>
          <Exercicio nomeExerc='CADEIRA EXTENSORA + AGACHAMENTO DESLOCADO'/>
          <Exercicio nomeExerc='CADEIRA FLEXORA'/>
          <Exercicio nomeExerc='PANTURRILHA BURRINHO'/>
        </ScrollView>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around', flex: 0.13,}}>
    <Temporizador/>
    <Cronometro/>
    </View>
    </SafeAreaView>

  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen options={{headerShown: false}} name='Home' component={HomeScreen}/>
        <Stack.Screen options={{headerShown: true}} name='Configuracao' component={Configuracao}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  menu: {
    flex: 0.2,
    alignItems: 'center',
    backgroundColor: '#242424',
    justifyContent: 'center',
    flexDirection: 'row',
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
  bttnTreino: {
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 70,
    width: 70,
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
  iconConfig: {
    padding: 1,
    margin: 'auto',
    resizeMode: 'stretch',
    justifyContent: 'center',
    color: '707070',
  },
  viewTreino: {
    flex: 0.3,
    alignSelf: 'center',
    backgroundColor: '#D9D9D9',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    borderRadius: 10,
    width: 390,
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: -50,
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
