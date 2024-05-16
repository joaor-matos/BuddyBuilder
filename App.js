//Elementos
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, SafeAreaView, ScrollView, ImageBackground, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { cloneElement, startTransition, Suspense, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import { FontAwesome6 } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-web';

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
import Treino from './pages/Treino';
import GerenciarTreinos from './pages/GerenciarTreinos';
import { getUserById } from './lib/data';

function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const userId = await AsyncStorage.getItem("userId");

        if (userId) {
          const userDataFromServer = await getUserById(parseInt(userId), token);
          setUser(userDataFromServer);
        } else {
          console.log("ID do usuário não encontrado no AsyncStorage")
        }

      } catch (error) {
        console.error("Erro ao obter dados do usuário: ", error);
      }
    }

    fetchData();
  }, []);

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Usuário não encontrado.</Text>
      </View>
    )
  }

  return (
    <Suspense fallback={(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000FF" />
      </View>)}
    >
      <SafeAreaView key={user.id} style={{ flex: 1, backgroundColor: '#182649', flexDirection: 'column' }}>
        <StatusBar style="auto" />
        <View style={styles.menu}>
          <View style={styles.streakView}>
            <Text style={{ fontSize: 40, fontWeight: '700', marginHorizontal: 10, }}>0</Text>
            <FontAwesome6 name="fire" size={44} color="black" />
          </View>

          <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}
            onPress={() => navigation.navigate('Configuracao')}>
            <Image
              source={require('./images/menu.png')}
              style={styles.iconMenu}
            />
          </TouchableOpacity>
        </View>
        {user?.treinos && user.treinos.map((treino) => (
          <View key={treino?.id}>
            <TouchableOpacity style={styles.btnTreino} activeOpacity={0.9}
              onPress={() => navigation.navigate('TreinoScreen', { treinoId: treino?.id })}>
              <Text style={{ fontSize: 30 }}>{treino?.nome_treino}</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity style={styles.btnAddExerc} activeOpacity={0.9}
          onPress={() => navigation.navigate('CriarTreino')}>
          <Image
            source={require('./images/plus.png')}
            style={styles.addIcon}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </Suspense>
  );
}


function TreinoScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#182649', flexDirection: 'column' }}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}>
          <View style={{ backgroundColor: '#549E48', height: '60%', width: '60%', borderRadius: 6, }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.timerTreino} activeOpacity={0.9}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', marginHorizontal: 10 }}>0:00:00</Text>
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

      <View style={{ flexDirection: 'column', justifyContent: 'space-between', padding: 20, margin: 5, }}>
        <Temporizador />
        <Cronometro />
      </View>

    </SafeAreaView>
  );
}

function IMCScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#182649', flexDirection: 'column', padding: 20, marginTop: 40, }}>
      <StatusBar style="auto" />
      <View style={styles.headerIMC}>
        <Text style={{ color: '#F0F0F0', fontSize: 40, fontWeight: '600', paddingBottom: 20, alignSelf: 'flex-start' }}>IMC</Text>
        <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}
          onPress={() => navigation.navigate('Configuracao')}>
          <Image
            source={require('./images/menu.png')}
            style={styles.iconMenu}
          />
        </TouchableOpacity>
      </View>
      <IMC />
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  // const [fontsLoaded] = useFonts({
  //   'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Treino'>
        <Stack.Screen options={{ headerShown: false }} name='HomeScreen' component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name='Treino' component={Treino} />
        <Stack.Screen options={{ headerShown: false }} name='Configuracao' component={ConfigScreen} />
        <Stack.Screen options={{ headerShown: false }} name='IMC' component={IMCScreen} />
        <Stack.Screen options={{ headerShown: false }} name='CriarTreino' component={CriarTreino} />
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} name='Cadastro' component={Cadastro} />
        <Stack.Screen options={{ headerShown: false }} name='GerenciarTreinos' component={GerenciarTreinos} />
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
    marginBottom: 10,
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
  streakView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 70,
    width: 140,
    borderRadius: 10,
  },

  btnTreino: {
    fontSize: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    borderColor: '#D9D9D9',
    borderWidth: 8,
    marginHorizontal: 14,
  },

  btnAddExerc: {
    height: 60,
    width: 60,
    marginTop: 14,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },

  addIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 5,
  },

  headerIMC: {
    backgroundColor: '#182649',
    justifyContent: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  scrollTreino: {
    height: 260,
  },
});
