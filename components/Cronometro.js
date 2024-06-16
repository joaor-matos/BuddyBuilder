import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = value => {
    return value < 10 ? `0${value}` : value;
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSegundos(0);
    setMinutos(0);
  };

  useEffect(() => {
    if (segundos === 60) {
      setSegundos(0);
      setMinutos(minutos => minutos + 1);
    }

  }, [segundos, minutos]);

  return (
    <View style={styles.container}>
      <View style={styles.viewCronometro}>
        <Text style={{ fontSize: 28, fontWeight: '600', marginBottom: 8, justifyContent: 'space-around' }}>Cronomêtro</Text>
        <View style={{ backgroundColor: '#F0F0F0', width: 280, borderRadius: 5, marginBottom: 5, }}>
          <Text style={styles.timerText}>
          {formatTime(minutos)}:{formatTime(segundos)}
          </Text>
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startTimer}>
        <Image
          source={require('../images/playIcon.png')}
          style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stopTimer}>
        <Image
          source={require('../images/pauseIcon.png')}
          style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
        <Image
          source={require('../images/restartIcon.png')}
          style={styles.icon}/>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewCronometro: {
    backgroundColor: '#D9D9D9',
    height: 180,
    width: 300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timerText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 6,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#F0F0F0',
    width: 60,
    height: 40,
    alignItems: 'center',
    justifyContent: "center",
    marginHorizontal: 6,
    borderRadius: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    height: 26,
    width: 26,
  }
});

export default Cronometro;
