import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

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
        <View style={{ backgroundColor: '#F0F0F0', height: 48, width: 140, borderRadius: 5, marginBottom: 5, }}>
          <Text style={styles.timerText}>
          {formatTime(minutos)}:{formatTime(segundos)}
          </Text>
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startTimer}>
          <Text style={styles.buttonText}>▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stopTimer}>
          <Text style={styles.buttonText}>║</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>⬤</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewCronometro: {
    backgroundColor: '#D9D9D9',
    height: 100,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timerText: {
    fontSize: 30,
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
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: "center",
    marginHorizontal: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cronometro;
