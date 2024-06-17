import React, { Suspense, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useUserData } from "../hooks/useUserData";

import Cronometro from '../components/Cronometro';
import Exercicio from '../components/Exercicio';
import Temporizador from '../components/Temporizador';

function Treino() {
   const { user, userId, token } = useUserData();
   const route = useRoute();
   const navigation = useNavigation()
    const { exercicios } = route.params;

    if (!exercicios || exercicios.length === 0) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Nenhum exercício encontrado para este treino.</Text>
        </View>
      );
    }

  // Função de cronometrar tempo de treino

  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonColor, setButtonColor] = useState('#549E48');

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
    const newColor = buttonColor === '#549E48' ? '#AB0000' : '#549E48';
    setButtonColor(newColor);
  };

  const finalizarTimer = () => {
    setIsRunning(false);
    const newColor = buttonColor === '#AB0000' ? '#549E48' : '#AB0000';
    setButtonColor(newColor);
  };

   const baseUrl = process.env.EXPO_PUBLIC_API_URL;

  const treinoFinalizado = async () => {
    finalizarTimer();
    try {
      const response = await fetch(`http://${baseUrl}:3000/users/${userId}/treinosFinalizados`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ treinosFinalizados: user.treinos_finalizados + 1 }),
      })

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro ao finalizar o treino: ", errorData)
      }

      // navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao finalizar o treino: ", error);
    }
  }

  const alertTimer = () => {
    if (isRunning === false) {
      Alert.alert('Iniciar treino', 'Deseja iniciar o treino?', [
        {
          text: 'Iniciar',
          onPress: () => startTimer(),
          style: 'default'
        },
        {
          text: 'Não iniciar',
          style: 'cancel',
        }
      ]);
    } else if (isRunning === true) {
      Alert.alert('Finalizar treino', 'Deseja Finalizar o treino?', [
        {
          text: 'Finalizar',
          onPress: () => treinoFinalizado(),
          style: 'default'
        },
        {
          text: 'Não finalizar',
          style: 'cancel',
        }
      ]);
    }
  };

  useEffect(() => {
    if (segundos === 60) {
      setSegundos(0);
      setMinutos(minutos => minutos + 1);
    }

  }, [segundos, minutos]);

  useEffect(() => {
    if (minutos === 60) {
      setMinutos(0);
      setHoras(horas => horas + 1);
    }

  }, [segundos, minutos]);

  return (
    <Suspense fallback={(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000FF" />
      </View>)}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: '#182649', flexDirection: 'column' }}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9} onPress={alertTimer} >
            <View style={[styles.btnTimer, { backgroundColor: buttonColor }]} />
          </TouchableOpacity>
          <View style={styles.timerTreino}>
            <Text style={{ fontSize: 35, fontWeight: 'bold', marginHorizontal: 10 }}>
              {formatTime(horas)}:{formatTime(minutos)}:{formatTime(segundos)}
            </Text>
          </View>
          <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}
            onPress={() => navigation.navigate('Home', { reload: true })}>
            <Image
              source={require('../images/menu.png')}
              style={styles.iconMenu}
            />
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
        <View style={styles.viewTreino}>
          <ScrollView style={styles.scrollTreino}>
             {exercicios.map((exercicio) =>
              <Exercicio key={exercicio?.id} exercicio={exercicio} />
            )} 
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', padding: 20, margin: 5, }}>
          <Temporizador />
          <Cronometro />
        </View>
      </SafeAreaView>
    </Suspense>
  );
}

export default Treino;

const styles = StyleSheet.create({
  menu: {
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#182649',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
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
  timerTreino: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 70,
    borderRadius: 10,
  },
  viewTreino: {
    alignSelf: 'center',
    backgroundColor: '#D9D9D9',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    borderRadius: 10,
    width: 390,
    alignItems: 'center',
    flexDirection: 'column',
  },
  scrollTreino: {
    height: 220,
  },
  iconMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  btnTimer: {
    height: '60%',
    width: '60%',
    borderRadius: 6,
  },
})