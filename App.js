import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function ConfigScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Configuração</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#76d600'}}>
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
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown: false}} name='Home' component={HomeScreen}/>
        <Stack.Screen name='Config' component={ConfigScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    padding: 10,
    backgroundColor: '#76d600',
    alignItems: '',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  navegar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  bttnHome: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 50,
    backgroundColor: '#485a96',

    borderColor: '#fff',
    height: 40,
  },
  bttnConfig: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderColor: '#fff',
    height: 40,
    width: 50,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  bttnTreino: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderColor: '#fff',
    height: 40,
    width: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  separator: {
    backgroundColor: '#fff',
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
  }
});
