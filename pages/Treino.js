import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, SafeAreaView, ScrollView, ImageBackground, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Cronometro from '../components/Cronometro';
import Exercicio from '../components/Exercicio';
import Temporizador from '../components/Temporizador';

function Treino({ navigation }) {
    
    return (
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
            <Exercicio nomeExerc='ESTEIRA' />
            <Exercicio nomeExerc='AGACHAMENTO BARRA' />
            <Exercicio nomeExerc='ELEVAÇÃO PÉLVICA' />
            <Exercicio nomeExerc='CADEIRA EXTENSORA + AGACHAMENTO DESLOCADO' />
            <Exercicio nomeExerc='CADEIRA FLEXORA' />
            <Exercicio nomeExerc='PANTURRILHA BURRINHO' />
          </ScrollView>
        </View>
  
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', padding: 20, margin: 5, }}>
          <Temporizador />
          <Cronometro />
        </View>
  
      </SafeAreaView>
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
        height: 260,
      },
      iconMenu: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 5,
      },
})