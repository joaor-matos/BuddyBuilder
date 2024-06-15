import React, { Suspense } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useUserData } from '../hooks/useUserData';
import { useCriarTreino } from '../hooks/useCriarTreino';

const CriarTreino = () => {
  const { user, token, userId } = useUserData();
  const { nomeTreino, setNomeTreino, exercicios, addExercicio, handleExercicioChange, handleSubmit, removeExercicio } = useCriarTreino(process.env.EXPO_PUBLIC_API_URL, token, userId);

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Usuário não encontrado.</Text>
      </View>
    )
  }

  return (
    <Suspense
      fallback={(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000FF" />
        </View>)}
    >
      <View style={{ backgroundColor: '#182649', flex: 1, paddingVertical: 30, }}>
        <View style={styles.header}>
          <Text style={{ color: '#F0F0F0', fontSize: 45, fontWeight: '600', }}>Criar treino</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <View style={styles.container}>
            <View style={styles.containerTreino}>
              <TextInput
                style={{ fontSize: 24, alignSelf: 'center', margin: 5, }}
                placeholder='Nome do Treino'
                value={nomeTreino}
                onChangeText={setNomeTreino}
              />
            </View>
            <ScrollView>
              {exercicios.map((exercicio, index) => (
                <View key={index} style={styles.containerExerc}>
                  <TextInput
                    style={styles.exercicioInputText}
                    placeholder='Exercício'
                    value={exercicio.nomeExercicio}
                    onChangeText={(value) => handleExercicioChange(index, value)}
                  />
                </View>
              ))}
            </ScrollView>
            <View style={{ justifyContent: 'center', flexDirection: 'row', gap: 36 }}>
              <TouchableOpacity style={styles.addExerc} onPress={addExercicio}>
                <Image
                  source={require('../images/plus.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.addExerc} onPress={removeExercicio}>
                <Image
                  source={require('../images/menos.png')}
                  style={{width: 28}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <TouchableOpacity style={styles.finalizarTreino} onPress={handleSubmit}>
              <Text style={{ fontSize: 30, color: '#F0F0F0', }}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Suspense>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#182649',
  },
  header: {
    backgroundColor: '#182649',
    justifyContent: 'center',
    paddingLeft: 20,

  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerTreino: {
    fontSize: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,

  },
  exercInput: {
    fontSize: 20,
    backgroundColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 2,
  },
  addExerc: {
    height: 60,
    width: 60,
    marginTop: 14,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',

  },
  finalizarTreino: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#F0F0F0',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,

  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  containerExerc: {
    backgroundColor: '#FFFFFF',
    borderColor: '#F0F0F0',
    borderWidth: 10,
    borderRadius: 8,
    padding: 6,
    marginVertical: 6,
  },
  exercicioInputText: {
    fontSize: 24,
    fontWeight: '500'
  }
});

export default CriarTreino;