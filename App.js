import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { startTransition } from 'react';
import Cronometro from './components/Cronometro';
import Exercicio from './components/Exercicio';
import Treino from './pages/Treino';
import Temporizador from './components/Temporizador';
import IMC from './components/IMC';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#76d600', flexDirection: 'column' }}>
      <View style={styles.menu}>
      <TouchableOpacity style={styles.bttnConfig} activeOpacity={0.9} 
      onPress={() => navigation.navigate('Config')}>
        <Image
        source={require('./images/config.png')}
        style={styles.buttonIcon}
        />
      </TouchableOpacity>
      <View style={styles.separator}/>
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
          <Exercicio/>
        </ScrollView>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around', flex: 0.13,}}>
    <Temporizador/>
    <Cronometro/>
    </View>
    </SafeAreaView>

  );
}

function ConfigScreen({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', padding: 50 }}>
      <IMC/>
    </View>
  );
}

function TreinoScreen({ navigation }) {
  return (
    <View>
      <Treino/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown: false}} name='Home' component={HomeScreen}/>
        <Stack.Screen options={{headerShown: false}} name='Config' component={ConfigScreen}/>
        <Stack.Screen options={{headerShown: false}} name='Treino' component={TreinoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  menu: {
    flex: 0.2,
    alignItems: 'center',
    backgroundColor: '#76d600',
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
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
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
  sepExerc: {
    backgroundColor: 'black',
    width: 3,
    height: 70,
    marginLeft: 40,
  },

});
