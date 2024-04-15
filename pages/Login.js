import React from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // implementar lógica de validação do lado do cliente e armazenamento de dados
  };
};


function Login({ navigation }) {
  return (
    <SafeAreaView style={{ alignItems: "center", justifyContent: "space-between", flex: 1 }} >
      <View style={styles.logoContainer} />
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }} /*style={styles.container}*/>
        {/* <TextInput style={styles.inputEmail} placeholder="E-mail" onChangeText={(text) => setEmail(text)} value={email} /> */}
        <TextInput style={styles.input} placeholder="E-mail" />
        {/* <TextInput style={styles.inputPassword} placeholder="Senha" onChangeText={(text) => setPassword(text)} value={password} /> */}
        <TextInput style={styles.input} placeholder="Senha" />
        <View style={{ margin: 50 }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ fontSize: 20, fontWeight: "bold", }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cadrastar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;

// export default Login;

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
