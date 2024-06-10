import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ActivityIndicator, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const baseUrl = process.env.EXPO_PUBLIC_API_URL;

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://${baseUrl}:3000/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      if (response.ok) {
        const token = data.token;
        const id = data.id;
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('userId', id.toString());
        navigation.navigate('Home');
      } else {
        console.error("Credenciais inválidas");
      }
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ alignItems: "center", justifyContent: "space-between", flex: 1 }} >
      <View style={styles.logoContainer} />
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }} >
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <View style={{ margin: 50 }}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000FF" />
          ) : (
            <TouchableOpacity style={styles.btn} onPress={handleLogin}>
              <Text style={{ fontSize: 20, fontWeight: "bold", }}>Login</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.btn}
          onPress={() => navigation.navigate('Cadastro')}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cadastrar-se</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.btn}
          onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Home</Text>
          </TouchableOpacity> */}

        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242424",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    borderColor: '#BFBFBF',
    borderWidth: 1,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 15,
    fontSize: 20,
  },
  btn: {
    width: 200,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: '#D9D9D9',
    color: "777777",
    justifyContent: "center",
    elevation: 2,
    marginTop: 15,
  },
  logoContainer: {
    backgroundColor: '#182649',
    flex: 1,
    width: '100%'
  },
});
