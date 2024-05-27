import { useState } from "react";
import { TextInput, Text, View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const IMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState('');
  const [impressaoIMC, setImpressaoIMC] = useState('')

  const baseUrl = process.env.EXPO_PUBLIC_API_URL;

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;

    if (isNaN(p) || isNaN(a) || p <= 0 || a <= 0) {
      Alert.alert("Erro", "Peso e altura devem ser valores numéricos positivos.");
      return null;
    }

    const resultado = p / (a * a);
    return resultado.toFixed(2);
  };

  const handleCalcularIMC = async () => {
    const resultadoIMC = calcularIMC();
    if (!resultadoIMC) return;

    setIMC(resultadoIMC);

    if (resultadoIMC < 18.5) {
      setImpressaoIMC("Está em situação de Magreza")
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.99) {
      setImpressaoIMC("Está no peso ideal")
    } else if (resultadoIMC >= 25 && resultadoIMC <= 29.99) {
      setImpressaoIMC("Está com sobrepeso")
    } else if (resultadoIMC >= 30 && resultadoIMC <= 39.99) {
      setImpressaoIMC("Está com obesidade")
    } else {
      setImpressaoIMC("Está com obesidade grave")
    }

    try {
      const token = await AsyncStorage.getItem("token");
      const userId = await AsyncStorage.getItem("userId");

      if (userId && token) {
        const response = await fetch(`http://${baseUrl}:3000/users/${parseInt(userId)}/imc`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ peso, altura, imc: resultadoIMC }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.log("Erro ao atualizar o IMC na API: ", errorData);
        }
      } else {
        console.log("Token ou ID do usuário não encontrados no AsyncStorage");
      }
    } catch (error) {
      console.error("Erro ao atualizar o IMC do usuário: ", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: "center", marginBottom: 10, }}>Cálculo IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso"
        onChangeText={text => setPeso(text)}
        value={peso}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Altura em cm"
        onChangeText={text => setAltura(text)}
        value={altura}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.submit} onPress={handleCalcularIMC}>
        <Text style={{ alignSelf: "center", fontWeight: 'bold', fontSize: 20, }}>Calcular</Text>
      </TouchableOpacity>

      {imc !== '' && (
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20, margin: 10, }}>Seu IMC é: {imc} {"\n"} {impressaoIMC}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: 400,
    alignSelf: "center"

  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  submit: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
  },
});

export default IMC;