import { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';

const Temporizador = () => {
  const [tempo, setTempo] = useState(0);
  const [tempoDefinido, setTempoDefinido] = useState("0:00");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && tempo > 0) {
      intervalId = setInterval(() => {
        setTempo((tempo) => tempo - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, tempo]);

  const formatTime = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    return `${formatValue(minutes)}:${formatValue(seconds)}`;
  };

  const formatValue = (value) => {
    return value < 10 ? `0${value}` : value.toString();
  };

  const startTimer = () => {
    const [minutes, seconds] = tempoDefinido.split(":").map(Number);
    const totalSeconds = minutes * 60 + seconds;
    
    if (!isNaN(totalSeconds) && totalSeconds > 0) {
      setTempo(totalSeconds);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTempo(0);
    setIsRunning(false);
    setTempoDefinido("0:00");
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTemp}>
      <Text style={{ fontSize: 28, fontWeight: '600', marginBottom: 8, justifyContent: 'space-around' }}>Temporizador</Text>
        <View style={{ backgroundColor: '#F0F0F0', width: 280, borderRadius: 5, }}>
          <Text style={styles.timerText}>{formatTime(tempo)}</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={tempoDefinido}
          onChangeText={(text) => setTempoDefinido(text)}
          placeholder="Min:Sec"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={startTimer}>
          <AntDesign name="caretright" size={34} color="#5A76C0" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={stopTimer}>
          <FontAwesome5 name="pause" size={34} color="#549E48" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Entypo name="ccw" size={34} color="#A63434" />
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
    marginBottom: 20,
  },
  viewTemp: {
    backgroundColor: '#D9D9D9',
    height: 200,
    width: 300,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  timerText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 2,
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
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 2,
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    paddingLeft: 2,
    fontSize: 20,
    width: 80,
  },
});

export default Temporizador;