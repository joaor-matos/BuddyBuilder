import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Descanço de 1:10</Text>
      <button>
        
      </button>
      <CountDown>
        until={70}
        timeToShow={['M', 'S']}
        onFinish={() => alert('Fim do descanço.')}
      </CountDown>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
