 import React, { useState, } from "react";
 import { TextInput, Text, View, TouchableOpacity, StyleSheet  } from "react-native";



const IMC = () => {
     const [peso, setPeso] = useState('');
     const [altura, setAltura] = useState('');
     const [imc, setIMC] = useState('');
     let impressaoIMC;

     const calcularIMC = () => {
         const p = parseFloat(peso);
         const a = parseFloat(altura) / 100;
         const resultado = p / (a * a);
         setIMC(resultado.toFixed(2))
        

         if (resultado < 18.5) {
             impressaoIMC = "Está em situação de Magreza"
         } else if (resultado >= 18.5 && resultado <= 24.9) {
             impressaoIMC = "Está no peso ideal"
         } else if (resultado >= 25 && resultado <= 29.9) {
             impressaoIMC = "Está com sobrepeso"
         } else if (resultado >= 30 && resultado <= 39.9) {
             impressaoIMC = "Está com obesidade"
         } else {
             impressaoIMC = "Está com obesidade grave"
         }
     }

     return (
         <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: "center", marginBottom: 10, }}>Cálculo IMC</Text>
             <TextInput style={styles.input} placeholder="Peso" onChangeText={text => setPeso(text)} value={peso} />
             <TextInput style={styles.input} placeholder="Altura" onChangeText={text => setAltura(text)} value={altura}/>
             <TouchableOpacity style={styles.submit} onPress={calcularIMC}><Text style={{ alignSelf: "center", fontWeight: 'bold', fontSize: 20, }}>Calcular</Text></TouchableOpacity>

             {imc !== '' && (
                 <Text>Seu IMC é: {imc} = {impressaoIMC}</Text>
             )}
         </View>
     )
 }

 const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        width: 200,
        alignSelf: "center"
        
    },
    input: {
        backgroundColor: 'gray',
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