import React, { cloneElement, useState, useEffect, Suspense } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserById } from '../lib/data';

// const AdicionarExerc = () => {
  /* const [fontsLoaded] = useFonts({
      'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  }); */

  // const [quantPeso, setPeso] = useState();
//   const [quantSet, setSet] = useState();
//   const [quantRep, setRep] = useState();
//   const [nomeExerc, setNomeExerc] = useState();
//   const [treino, setTreino] = useState([]);
//   const [nomeTreino, setNomeTreino] = useState();

//   const handleTreino = () => {
//     const arrExerc = {
//       nome: nomeExerc,
//       peso: quantPeso,
//       set: quantSet,
//       rep: quantRep,
//     }

//     setTreino([...treino, arrExerc]);
//     setPeso('');
//     setSet('');
//     setRep('');
//     setNomeExerc('');
//   };
//   return (
//     <View style={{ borderColor: 'black', borderWidth: 2, paddingTop: 7, paddingHorizontal: 5, borderRadius: 10, }}>
//       <TextInput style={styles.exercInput} placeholder='Nome do Exercício'
//         value={nomeExerc}
//         onChangeText={text => setNomeExerc(text)}>
//       </TextInput>
//       <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
//         <TextInput style={styles.exercInput} placeholder='Peso'
//           value={quantPeso}
//           onChangeText={text => setPeso(text)}></TextInput>
//         <TextInput style={styles.exercInput} placeholder='Sets'
//           value={quantSet}
//           onChangeText={text => setSet(text)}></TextInput>
//         <TextInput style={styles.exercInput} placeholder='Repetições'
//           value={quantRep}
//           onChangeText={text => setRep(text)}></TextInput>
//       </View>
//     </View>
//   );
// };

function GerenciarTreinos({ navigation }) {
  // const [listForm, setListForm] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const userId = await AsyncStorage.getItem("userId");

        if (userId && token) {
          const userDataFromServer = await getUserById(parseInt(userId), token);
          setUser(userDataFromServer);
        } else {
          console.log("ID do usuário ou token não encontrado no AsyncStorage")
        }

      } catch (error) {
        console.error("Erro ao obter dados do usuário: ", error);
      }
    }

    fetchData();
  }, []);

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Usuário não encontrado.</Text>
      </View>
    )
  }

  // const addExercForm = () => {
  //   setListForm([...listForm,])
  // }

  return (
    <Suspense fallback={(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000FF" />
      </View>)}
    >
      <SafeAreaView key={user?.id} style={{ backgroundColor: '#182649', flex: 1, paddingVertical: 50, /* justifyContent: 'space-between' */ }}>
        <View style={styles.header}>
          <Text style={{ color: '#F0F0F0', fontSize: 40, fontWeight: '600', fontFamily: 'Inter-Bold', paddingBottom: 20, alignSelf: 'flex-start' }}>Gerenciar</Text>
          <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}
            onPress={() => navigation.navigate('Configuracao')}>
            <Image
              source={require('../images/menu.png')}
              style={styles.iconMenu}
            />
          </TouchableOpacity>
        </View>
        {user?.treinos && user.treinos.map((treino) => (
          <View key={treino?.id} style={styles.containerTreino}>
            <View style={styles.containerNome}>
              <Text style={{ fontFamily: 'Inter-Bold', fontSize: 24 }}>{treino?.nome_treino}</Text>
            </View>
            <Image
              source={require('../images/lixo.png')}
              style={styles.icon}
            />
          </View>
        ))}
      </SafeAreaView >
    </Suspense>
  )
}

export default GerenciarTreinos;

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
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  bttnMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 20,
  },
  containerTreino: {
    backgroundColor: '#D9D9D9',
    padding: 5,
    margin: 10,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  containerNome: {
    fontSize: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: 300,

  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    marginHorizontal: 10,

  },
});

