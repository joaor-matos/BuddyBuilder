import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

export default function Configuracao() {
    return (
        <View style={styles.container}>
            <View style={styles.conta}>
                <Text style={styles.text}>Perfil</Text>
                <TouchableOpacity style={styles.btn}><Text style={{fontSize: 16, fontWeight: 700}}>Usuário</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn}><Text style={{fontSize: 16, fontWeight: 700}}>Calculo IMC</Text></TouchableOpacity>
            </View>
            <View style={styles.conta}>
                <Text style={styles.text}>Treino</Text>
                <TouchableOpacity style={styles.btn}><Text style={{fontSize: 16, fontWeight: 700}}>Pernas</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn}><Text style={{fontSize: 16, fontWeight: 700}}>Biceps / Triceps</Text></TouchableOpacity>
                <TouchableOpacity style={styles.add}><Text style={{fontSize: 16, fontWeight: 700}}>Adicionar novo Treino</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#242424",
    },
    btn: {
        backgroundColor: "#F0F0F0",
        color: "#000",
        fontSize: 20,
        fontWeight: 600,
        margin: 12,
        padding: 8,
        borderRadius: 8
    },
    text: {
        color: "#fff",
        fontSize: 16,
        padding: 12,
        fontWeight: 700,
    },
    conta: {
        flex: 1,
        flexDirection: "column"
    },
    add: {
        padding: 12,
        fontSize: 16,
        fontWeight: 600,
        backgroundColor: "#707070",
        color: "#fff",
        borderRadius: 8,
    }
})