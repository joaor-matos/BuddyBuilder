import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import IMC from '../components/IMC';

function CalculoIMC({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#182649', flexDirection: 'column', padding: 20, marginTop: 40, }}>
      <StatusBar style="auto" />
      <View style={styles.headerIMC}>
        <Text style={{ color: '#F0F0F0', fontSize: 40, fontWeight: '600', paddingBottom: 20, alignSelf: 'flex-start' }}>IMC</Text>
        <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}
          onPress={() => navigation.navigate('Configuracao')}>
          <Image
            source={require('../images/menu.png')}
            style={styles.iconMenu}
          />
        </TouchableOpacity>
      </View>
      <IMC />
    </View>
  )
}

export default CalculoIMC;

const styles = StyleSheet.create({
  headerIMC: {
    backgroundColor: '#182649',
    justifyContent: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  iconMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 5,
  },
});