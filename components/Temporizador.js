import { useState, useEffect, cloneElement } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

const Temporizador = () => {
  const [tempo, setTempo] = useState(0);
  const [tempoDefinido, setTempoDefinido] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTempo((tempo) => tempo - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    return `${formatValue(minutes)}:${formatValue(seconds)}`;
  };

  const formatValue = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const startTimer = () => {
    setTempo(tempoDefinido);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTempo(0);
    setIsRunning(false);
  };

  const handleTempoDefinidoChange = (text) => {
    const tempoDefinido = parseInt(text);
    setTempoDefinido(isNaN(tempoDefinido) ? 0 : tempoDefinido);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTemp}>
        <View style={{ backgroundColor: '#F0F0F0', height: 48, width: 140, borderRadius: 5, marginTop: 5, }}>
          <Text style={styles.timerText}>{formatTime(tempo)}</Text>
        </View>
      <View style={styles.inputContainer}>
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
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginRight: 10, fontWeight:"bold" , justifyContent: "center", alignItems: "center", }}>Segundos:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={tempoDefinido.toString()}
          onChangeText={handleTempoDefinidoChange}
        />
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
    marginTop: 40,
  },
  viewInput: {
    flexDirection: "row",

  },
  viewTemp: {
    backgroundColor: '#D9D9D9',
    height: 140,
    width: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 2,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 2,
  },
});

export default Temporizador;