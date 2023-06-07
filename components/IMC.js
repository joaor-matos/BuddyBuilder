 import React, { useState, } from "react";
 import { TextInput, Text, View, TouchableOpacity, StyleSheet  } from "react-native";



const IMC = () => {
     const [peso, setPeso] = useState('');
     const [altura, setAltura] = useState('');
     const [imc, setIMC] = useState('');
     const [impressaoIMC, setImpressaoIMC] = useState('')

     const calcularIMC = () => {
         const p = parseFloat(peso);
         const a = parseFloat(altura) / 100;
         const resultado = p / (a * a);
         setIMC(resultado.toFixed(2))
        

         if (resultado < 18.5) {
             setImpressaoIMC("Está em situação de Magreza")
         } else if (resultado >= 18.5 && resultado <= 24.9) {
             setImpressaoIMC("Está no peso ideal")
         } else if (resultado >= 25 && resultado <= 29.9) {
             setImpressaoIMC("Está com sobrepeso")
         } else if (resultado >= 30 && resultado <= 39.9) {
             setImpressaoIMC("Está com obesidade")
         } else {
             setImpressaoIMC("Está com obesidade grave")
         }
     }

     return (
         <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: "center", marginBottom: 10, }}>Cálculo IMC</Text>
             <TextInput style={styles.input} placeholder="Peso" onChangeText={text => setPeso(text)} value={peso} keyboardType="numeric"/>
             <TextInput style={styles.input} placeholder="Altura em cm" onChangeText={text => setAltura(text)} value={altura} keyboardType="numeric"/>
             <TouchableOpacity style={styles.submit} onPress={calcularIMC}><Text style={{ alignSelf: "center", fontWeight: 'bold', fontSize: 20, }}>Calcular</Text></TouchableOpacity>

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