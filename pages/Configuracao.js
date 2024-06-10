//Componentes
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native"
import { useUserData } from "../hooks/useUserData";

function Configuracao({ navigation }) {
  const { user } = useUserData();

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Usuário não encontrado.</Text>
      </View>
    )
  }

  return (
    <View key={user?.id} style={styles.container}>
      <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', paddingHorizontal: 20, }}>
        <TouchableOpacity style={styles.btnHome} activeOpacity={0.9}
          onPress={() => navigation.navigate('Home', { userId: user?.id })}>
          <Image
            source={require('../images/treino.png')}
            style={styles.iconHome}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Perfil</Text>
      <View style={{ alignSelf: 'center', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F0F0', borderRadius: 4, height: 160, width: 380, }}>

        <Image source={require('../images/user_icon.png')}
          style={styles.userIcon}
        />

        <View>
          <Text style={{ fontSize: 18, marginBottom: 8, fontWeight: '700' }}>{user?.apelido}</Text>
          <Text style={{ fontSize: 18 }}>Treinos Finalizados: {user?.treinos_finalizados}</Text>
          <Text style={{ fontSize: 18 }}>IMC: {user?.imc}</Text>
        </View>

      </View>
      <View style={styles.conta}>
        <Text style={styles.text}>Configurações</Text>
        <TouchableOpacity style={styles.btn} activeOpacity={0.9}><Text style={{ fontSize: 20, fontWeight: "500" }}>Apelido</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} activeOpacity={0.9}
          onPress={() => navigation.navigate('IMC')}><Text style={{ fontSize: 20, fontWeight: "500" }}>Calculo IMC</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} activeOpacity={0.9}
          onPress={() => navigation.navigate('GerenciarTreinos')}><Text style={{ fontSize: 20, fontWeight: "500" }}>Gerenciar treinos</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Configuracao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    padding: 5,
    backgroundColor: "#182649",
  },
  userIcon: {
    width: 100,
    height: 100,
  },
  btn: {
    backgroundColor: "#F0F0F0",
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    margin: 4,
    padding: 9,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  text: {
    color: "#fff",
    fontSize: 38,
    padding: 12,
    fontWeight: "700",
  },
  conta: {
    flex: 1,
    flexDirection: "column"
  },
  add: {
    padding: 12,
    margin: 5,
    fontSize: 16,
    fontWeight: "600",
    backgroundColor: "#707070",
    color: 'F0F0F0',
    borderRadius: 8,
  },
  btnHome: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    borderColor: '#fff',
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  iconHome: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 5,
    transform: [{ rotate: '15deg' }]
  },
})