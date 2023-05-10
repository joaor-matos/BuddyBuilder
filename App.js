import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, SafeAreaView } from 'react-native';
/* import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';*/

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#76d600'}}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.navegar} activeOpacity={0.5}>
          <Image
          source={{uri: 'https://cdn-icons-png.flaticon.com/512/60/60817.png'}}
          style={styles.buttonIcon}
          />
         <View style={styles.separator}/>
         <Image
         source={{uri: 'https://cdn-icons-png.flaticon.com/512/60/60817.png'}}
         style={styles.buttonIcon}
         />
         <View style={styles.separator}/>
         <Image
         source={{uri: 'https://cdn-icons-png.flaticon.com/512/60/60817.png'}}
         style={styles.buttonIcon}
         />
       </TouchableOpacity>
      <View style={styles.separator}/>
      <TouchableOpacity style={styles.navegar} activeOpacity={0.5}>
        <Image
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/60/60817.png'}}
        style={styles.buttonIcon}
        />
      </TouchableOpacity>
      <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#76d600',
    alignItems: 'center',
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
  separator: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  buttonIcon: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch'
  },
});
