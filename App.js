import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useCountdown } from 'react-native-countdown-circle-timer'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Descanço de 1:10</Text>
      <button>1:10</button>
      <CountdownCircleTimer
      isPlaying
      duration={70}
      colors={['#004777']}
      size = '40'
      strokeWidth={3}
      >
    {({ remainingTime }) => <Text>{remainingTime}</Text>}
    </CountdownCircleTimer>
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
