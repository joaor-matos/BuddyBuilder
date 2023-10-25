import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

export default function Configuracao() {
    return (
        <View style={styles.container}>
            <View style={styles.conta}>
                <Text style={styles.text}>Perfil</Text>
                <TouchableOpacity style={styles.btn}>Usuário</TouchableOpacity>
                <TouchableOpacity style={styles.btn}>Calculo IMC</TouchableOpacity>
            </View>
            <View style={styles.conta}>
                <Text style={styles.text}>Treino</Text>
                <TouchableOpacity style={styles.btn}>Pernas</TouchableOpacity>
                <TouchableOpacity style={styles.btn}>Biceps/Triceps</TouchableOpacity>
                <TouchableOpacity style={styles.add}>Adicionar novo Treino</TouchableOpacity>
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
        fontSize: 16,
        fontWeight: 600,
        margin: 12,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        padding: 12,
        fontWeight: 600,
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
    }
})