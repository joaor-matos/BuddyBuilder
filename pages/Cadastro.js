import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

function CadastroScreen({ navigation }) {
  const [apelido, setApelido] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleSignUp = async () => {
    try {
      if (senha !== confirmSenha) {
        Alert.alert("Erro ao cadastrar", "As senhas não coincidem.");
        return;
      }

      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, apelido, senha }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert("Cadastro realizado com sucesso!", "Você pode fazer login agora.", [
          { text: "OK", onPress: () => navigation.navigate('Login') },
        ]);
        navigation.navigate('Login');
      } else {
        if (data && data.error) {
          Alert.alert("Erro ao cadastrar", data.error);
        } else {
          Alert.alert("Erro ao cadastrar", "Ocorreu um erro ao tentar cadastrar. Por favor, tente novamente.");
        }
      }
    } catch (error) {
      console.error("Erro ao fazer cadastro: ", error);
      Alert.alert("Erro ao cadastrar", "Ocorreu um erro ao tentar cadastrar. Por favor, tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.textNickname}>Apelido</Text>
        <TextInput
          style={styles.nicknameInput}
          placeholder="Apelido"
          value={apelido}
          onChangeText={setApelido}
        />

        <Text style={styles.textEmail}>E-mail</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.textPassword}>Senha</Text>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <Text style={styles.textConfirm}>Confirmar senha</Text>
        <TextInput
          style={styles.confirmPasswordInput}
          placeholder="Confirmar senha"
          value={confirmSenha}
          onChangeText={setConfirmSenha}
          secureTextEntry
          returnKeyType="send"
          onSubmitEditing={handleSignUp}
        />

        <TouchableOpacity style={styles.btnCadastro} onPress={[handleSignUp, () => navigation.navigate('Login')]}>
          <Text style={{ fontWeight: "bold", textAlign: 'center', fontSize: 20, }}>Concluir cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          title="Login" style={styles.btnCadastro} onPress={() => navigation.navigate('Login')} >
          <Text style={{ fontWeight: "bold", textAlign: 'center' }}>
            Fazer Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: 'center',
    justifyContent: 'center',
  },
  nicknameInput: {
    width: 300,
    height: 35,
    padding: 3,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderColor: '#BFBFBF',
    marginBottom: 30,
  },
  emailInput: {
    width: 300,
    height: 35,
    padding: 3,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderColor: '#BFBFBF',
    marginBottom: 30,
  },
  passwordInput: {
    width: 300,
    height: 35,
    padding: 3,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderColor: '#BFBFBF',
    marginBottom: 30,
  },
  confirmPasswordInput: {
    width: 300,
    height: 35,
    padding: 3,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
    borderWidth: 1,
    borderColor: '#BFBFBF',
    marginBottom: 30,
  },
  btnCadastro: {
    width: 270,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#D9D9D9",
    marginTop: 15,
    alignSelf: 'center',
  },
  textNickname: {
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: "400",
    textAlign: "left",
    marginBottom: 3,
  },
  textEmail: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 3,
  },
  textPassword: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 3,
  },
  textConfirm: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 3,
  },
  textCadastro: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: "700",
  },
  textPassword: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: "400",
  },
})

export default CadastroScreen;