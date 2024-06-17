import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import { Suspense } from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { useUserData } from '../hooks/useUserData';

function Home({ navigation }) {
   const { user, isLoading } = useUserData();
  
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
      <SafeAreaView key={user?.id} style={{ flex: 1, backgroundColor: '#182649', flexDirection: 'column' }}>
        <StatusBar style="auto" />
        <View style={styles.menu}>
          <View style={styles.streakView}>
            <Text style={{ fontSize: 40, fontWeight: '700', marginHorizontal: 10, }}>{user?.treinos_finalizados}</Text>
            <Image
              source={require('../images/streakIcon.png')}
              style={styles.iconStreak}
            />
          </View>

          <TouchableOpacity style={styles.bttnMenu} activeOpacity={0.9}
            onPress={() => navigation.navigate('Configuracao', { userId: user?.id })}>
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
  iconStreak: {
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
});