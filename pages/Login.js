 import React from "react";
 import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, } from "react-native";
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

  const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = () => {
      // implementar lógica de validação do lado do cliente e armazenamento de dados
  };
  };


 function Login({ navigation }) {
   return (
     <View style={{ padding: 40, alignItems: "center", justifyContent: "center", flex: 1 }} /*style={styles.container}*/>
       {/* <TextInput style={styles.inputEmail} placeholder="E-mail" onChangeText={(text) => setEmail(text)} value={email} /> */}
       <TextInput style={styles.input} placeholder="E-mail" />
       {/* <TextInput style={styles.inputPassword} placeholder="Senha" onChangeText={(text) => setPassword(text)} value={password} /> */}
       <TextInput style={styles.input} placeholder="Senha" />
      
       <TouchableOpacity style={styles.btn}>
         <Text style={{ fontSize: 20, fontWeight: "bold" }}>Login</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
         <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 20, color: 'blue', textDecorationLine: 'underline' }}>Cadastrar-se</Text>
       </TouchableOpacity>
     </View>
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
     width: 200,
     height: 40,
     borderRadius: 5,
     backgroundColor: '#F0F0F0',
     elevation: 2,
     alignItems: "center",
     justifyContent: "center",
     paddingHorizontal: 10,
     marginTop: 10,
     fontSize: 20,
   },
   btn: {
     width: 200,
     height: 40,
     borderRadius: 8,
     alignItems: "center",
     backgroundColor: '#D9D9D9',
     color: "black",
     justifyContent: "center",
     elevation: 2,
     marginTop: 10,
   },
 });
