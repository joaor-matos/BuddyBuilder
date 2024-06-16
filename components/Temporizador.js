import { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';

const Temporizador = () => {
  const [tempo, setTempo] = useState(0);
  const [tempoDefinido, setTempoDefinido] = useState("0:00");
  const [isRunning, setIsRunning] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [isEditble, setIsEditable] = useState(true);

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
      setIsEditable(false);
    }
  };

  const pauseTimer = () => {
    if (isPause == false) {
      setIsRunning(false);
      setIsPause(true);
    } else {
      setIsRunning(true)
      setIsPause(false)
    }
      
  };

  const resetTimer = () => {
    setTempo(0);
    setIsRunning(false);
    setTempoDefinido("00:00");
    setIsEditable(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTemp}>
      <Text style={{ fontSize: 28, fontWeight: '600', marginBottom: 8, justifyContent: 'space-around' }}>Temporizador</Text>
        <View style={{ backgroundColor: '#F0F0F0', width: 280, borderRadius: 5, justifyContent: 'center' }}>
          <TextInput style={styles.timerText} 
          // value={tempoDefinido}
          onChangeText={(text) => setTempoDefinido(text)}
          editable={isEditble}
          >{formatTime(tempo)} 
          
          </TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={startTimer}>
          <Image
          source={require('../images/playIcon.png')}
          style={styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pauseTimer}>
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
    marginBottom: 20,
  },
  viewTemp: {
    backgroundColor: '#D9D9D9',
    height: 180,
    width: 300,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  timerText: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 2,
    alignSelf: 'center',
    justifyContent: 'center'
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
    padding: 10,
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
  icon: {
    height: 26,
    width: 26,
  }
});

export default Temporizador;