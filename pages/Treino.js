import React, { Suspense } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from "@react-navigation/native";

import Cronometro from '../components/Cronometro';
import Exercicio from '../components/Exercicio';
import Temporizador from '../components/Temporizador';

function Treino({ navigation }) {
  const route = useRoute();
  const { exercicios } = route.params;

  if (!exercicios || exercicios.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Nenhum exercício encontrado para este treino.</Text>
      </View>
    );
  }

  return (
    <Suspense fallback={(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000FF" />
      </View>)}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: '#182649', flexDirection: 'column' }}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}>
            <View style={{ backgroundColor: '#549E48', height: '60%', width: '60%', borderRadius: 6, }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.timerTreino} activeOpacity={0.9}>
            <Text style={{ fontSize: 35, fontWeight: 'bold', marginHorizontal: 10 }}>0:00:00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}
            onPress={() => navigation.navigate('Configuracao')}>
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
})