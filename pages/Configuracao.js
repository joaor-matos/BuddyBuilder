//Componentes
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

//Páginas
import CalculoIMC from './CalculoIMC';

function Configuracao({ navigation }) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Perfil</Text>
            <View style={{ alignSelf: 'center', justifyContent: 'space-around', backgroundColor: '#F0F0F0', borderRadius: 4, height: 160, width: 380,}}>
                
                <Image />

                <View>
                    <Text style={{ fontSize: 18, marginBottom: 8, fontWeight: '700' }}>nome_usuario</Text>
                    <Text style={{ fontSize: 18 }}>Dias ativo: </Text>
                    <Text style={{ fontSize: 18 }}>IMC: </Text>
                </View>
                
            </View>
            <View style={styles.conta}>
                <Text style={styles.text}>Configurações</Text>
                <TouchableOpacity style={styles.btn}><Text style={{fontSize: 20, fontWeight: "500"}}>Apelido</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn}><Text style={{fontSize: 20, fontWeight: "500"}}>Calculo IMC</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn}><Text style={{fontSize: 20, fontWeight: "500"}}>Gerenciar treinos</Text></TouchableOpacity>
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
    }
})