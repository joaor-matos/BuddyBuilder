import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, SafeAreaView, ScrollView, ImageBackground, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { cloneElement, startTransition } from 'react';
import Cronometro from './components/Cronometro';
import Exercicio from './components/Exercicio';
import Treino from './pages/Treino';
import Temporizador from './components/Temporizador';
import IMC from './components/IMC';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#242424', flexDirection: 'column' }}>
      <View style={styles.menu}>
      <TouchableOpacity style={styles.bttnTreino} activeOpacity={0.9}
      onPress={() => navigation.navigate('Treino')}>
        <Image
        source={require('./images/treino.png')}
        style={styles.iconTreino}
        />
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

function TreinoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#242424' }}>
      <IMC/>
    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={{ padding: 40, alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: '#242424', }} /*style={styles.container}*/>
      {/* <TextInput style={styles.inputEmail} placeholder="E-mail" onChangeText={(text) => setEmail(text)} value={email} /> */}
      <TextInput style={styles.input} placeholder="E-mail" />
      {/* <TextInput style={styles.inputPassword} placeholder="Senha" onChangeText={(text) => setPassword(text)} value={password} /> */}
      <TextInput style={styles.input} placeholder="Senha" />
     
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 20, color: '#9ebdff', textDecorationLine: 'underline' }}>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
}

function CadastroScreen({ navigation }) {
  return (
      <View style={{ padding: 40, alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: '#242424', }}>
          {/* <TextInput style={styles.nicknameInput} placeholder="Apelido" onChangeText={text => setNickname(text)} value={nickname} /> */}
          <TextInput style={styles.input} placeholder="Apelido"/>

          {/* <TextInput style={styles.emailInput} placeholder="E-mail" onChangeText={text => setEmail(text)} value={email} /> */}
          <TextInput style={styles.input} placeholder="E-mail"/>

          {/* <TextInput placeholder="Senha" onChangeText={text => setPassword(text)} value={password} /> */}
          <TextInput style={styles.input} placeholder="Senha"/>

          {/* <TextInput style={styles.confirmPasswordInput} placeholder="Confirmar senha" onChangeText={text => setConfirmPassWord(text)} value={confirmPassword} /> */}
          <TextInput style={styles.input} placeholder="Confirmar senha"/>

          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}><Text style={{ fontSize: 20, fontWeight: "bold" }}>Concluir cadastro</Text></TouchableOpacity>

          <TouchableOpacity
              title="Login" onPress={() => navigation.navigate('Login')} >
              <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 20, color: '#9ebdff', textDecorationLine: 'underline' }}>Fazer Login</Text>
          </TouchableOpacity>
      </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{headerShown: false}} name='Home' component={HomeScreen}/>
        <Stack.Screen options={{headerShown: false}} name='Treino' component={TreinoScreen}/>
        <Stack.Screen options={{headerShown: false}} name='Login' component={LoginScreen}/>
        <Stack.Screen options={{headerShown: false}} name='Cadastro' component={CadastroScreen}/>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 70,
    width: 100,
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
  iconTreino: {
    padding: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 50,
    width: 50,
    resizeMode: 'stretch',
    justifyContent: 'center',
    transform: [{rotate: '-20deg'}],
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
