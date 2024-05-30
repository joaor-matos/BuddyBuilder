import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { Suspense, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome6 } from '@expo/vector-icons';
import { getUserById } from '../lib/data';

function Home({ navigation, route }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const token = await AsyncStorage.getItem("token");
      const userId = await AsyncStorage.getItem("userId");

      if (userId) {
        const userDataFromServer = await getUserById(parseInt(userId), token);
        setUser(userDataFromServer);
      } else {
        console.log("ID do usuário não encontrado no AsyncStorage");
      }

    } catch (error) {
      console.error("Erro ao obter dados do usuário: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  useEffect(() => {
    if (route.params?.reload) {
      fetchData();
    }
  }, [route.params?.reload]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000FF" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Usuário não encontrado.</Text>
      </View>
    )
  }

  return (
    <Suspense fallback={(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000FF" />
      </View>)}
    >
      <SafeAreaView key={user.id} style={{ flex: 1, backgroundColor: '#182649', flexDirection: 'column' }}>
        <StatusBar style="auto" />
        <View style={styles.menu}>
          <View style={styles.streakView}>
            <Text style={{ fontSize: 40, fontWeight: '700', marginHorizontal: 10, }}>0</Text>
            <FontAwesome6 name="fire" size={44} color="black" />
          </View>

          <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}
            onPress={() => navigation.navigate('Configuracao', { userId: user.id })}>
            <Image
              source={require('../images/menu.png')}
              style={styles.iconMenu}
            />
          </TouchableOpacity>
        </View>
        {user?.treinos && user.treinos.map((treino) => (
          <View key={treino?.id}>
            <TouchableOpacity style={styles.btnTreino} activeOpacity={0.9}
              onPress={() => navigation.navigate('Treino', { treinoId: treino?.id, exercicios: treino?.exercicios })}>
              <Text style={{ fontSize: 26 }}>{treino?.nome_treino}</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity style={styles.btnAddExerc} activeOpacity={0.9}
          onPress={() => navigation.navigate('CriarTreino')}>
          <Image
            source={require('../images/plus.png')}
            style={styles.addIcon}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </Suspense>
  );
}

export default Home

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
  streakView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 70,
    width: 140,
    borderRadius: 10,
  },
  btnTreino: {
    fontSize: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    borderColor: '#D9D9D9',
    borderWidth: 8,
    marginHorizontal: 14,
    marginBottom: 10,
  },
  btnAddExerc: {
    height: 60,
    width: 60,
    marginTop: 14,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
  addIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
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
  },
  iconMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 5,
  },
});