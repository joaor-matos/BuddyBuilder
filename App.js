import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { startTransition } from 'react';
// import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

function ConfigScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Configuração</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#76d600', flexDirection: 'column'}}>
      <View style={styles.menu}>
      <TouchableOpacity style={styles.bttnConfig} activeOpacity={0.9} 
      onPress={() => navigation.navigate('Config')}>
        <Image
        source={require('./images/config.png')}
        style={styles.buttonIcon}
        />
      </TouchableOpacity>
      <View style={styles.separator}/>
      <TouchableOpacity style={styles.bttnHome} activeOpacity={0.9}>
        <Image
        source={require('./images/home.png')}
        style={styles.buttonIcon}
        />
      </TouchableOpacity>

      <View style={styles.separator}/>

      <TouchableOpacity style={styles.bttnTreino} activeOpacity={0.9}>
        <Image
        source={require('./images/treino.png')}
        style={styles.iconTreino}
        />
      </TouchableOpacity>

      <StatusBar style="auto" />

      </View>
      <View style={styles.viewTreino}>
        <ScrollView style={styles.scrollTreino}>
      
        </ScrollView>
    </View>
    </SafeAreaView>

  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown: false}} name='Home' component={HomeScreen}/>
        <Stack.Screen options={{
            title: <Text style={{fontSize: 10}}>Configurações</Text>, headerStyle:{height: 30, justifyContent: 'center'}}} name='Config' component={ConfigScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  menu: {
    flex: 0.10,
    padding: 10,
    backgroundColor: '#76d600',
    alignItems: '',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  navegar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderColor: '#white',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  bttnHome: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 50,
    backgroundColor: '#D9D9D9',

    borderColor: '#fff',
    height: 40,
  },
  bttnConfig: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 40,
    width: 50,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  bttnTreino: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 40,
    width: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  separator: {
    backgroundColor: '#636363',
    width: 0.5,
    height: 40,
  },
  buttonIcon: {
    padding: 13,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  iconTreino: {
    padding: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    justifyContent: 'center',
    transform: [{rotate: '-20deg'}],
  },
  viewTreino: {
    backgroundColor: '#D9D9D9',
    marginHorizontal: 'auto',
    justifyContent: 'flex-start',
    borderRadius: 6,
    height: 100,
    width: 200,
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: 2,
  }
});
